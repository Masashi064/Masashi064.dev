// api/contact.js
import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed' });

  try {
    // 文字列でもオブジェクトでも受け取れるように吸収
    const raw = req.body ?? {};
    const data = typeof raw === 'string' ? JSON.parse(raw || '{}') : raw;

    const { name, email, message } = data || {};
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    if (!process.env.RESEND_API_KEY) {
      // 環境変数未設定のときのガード（原因特定しやすくする）
      return res.status(500).json({ error: 'RESEND_API_KEY is not set' });
    }
    if (!process.env.EMAIL_TO) {
      return res.status(500).json({ error: 'EMAIL_TO is not set' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: process.env.EMAIL_FROM || 'onboarding@resend.dev',
      to: process.env.EMAIL_TO,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`
    });

    return res.status(200).json({ ok: true });
  } catch (e) {
    console.error('contact_api_error:', e);
    return res.status(500).json({ error: e?.message || 'Server error' });
  }
}
