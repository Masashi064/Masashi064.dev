import { useTranslation } from 'react-i18next';
import { Github, Linkedin, Twitter, Mail, Facebook } from 'lucide-react';
import React from 'react';

export default function Footer() {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Masashi064', label: 'GitHub' },
    // Example if you want to enable later:
    // { icon: Linkedin, href: 'https://linkedin.com/in/your-id', label: 'LinkedIn' },
    // { icon: Twitter, href: 'https://x.com/your-id', label: 'Twitter' },
    { icon: Facebook, href: 'https://www.facebook.com/saisho.masashi/', label: 'Facebook', },
    {
      // Launches default email app
      icon: Mail,
      href:
        'mailto:m.kawahara064@gmail.com?subject=Hello%20Masashi&body=Hi%20Masashi%2C',
      label: 'Email',
    },
    //{
      // LINE official or personal ID
      //iconImg: 'https://cdn.simpleicons.org/line',
      //href: 'https://line.me/ti/p/~your_line_id',
      //label: 'LINE',
    //},
    //{
      // WhatsApp with full phone number (no + or dashes)
      //iconImg: 'https://cdn.simpleicons.org/whatsapp',
      //href: 'https://wa.me/6586601136',
      //label: 'WhatsApp',
    //},
  ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          <div className="flex space-x-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="p-3 bg-white dark:bg-gray-800 rounded-full text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:shadow-lg transition-all duration-300 transform hover:scale-110"
              >
                {'icon' in link ? (
                  <link.icon className="w-5 h-5" />
                ) : (
                  <img
                    src={link.iconImg}
                    alt={link.label}
                    className="w-5 h-5"
                    loading="lazy"
                  />
                )}
              </a>
            ))}
          </div>

          <div className="text-center space-y-2">
            <p className="text-gray-600 dark:text-gray-400">
              {t('footer.builtWith')}
            </p>
            <p className="text-gray-500 dark:text-gray-500 text-sm">
              © {currentYear} Portfolio. {t('footer.rights')}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
