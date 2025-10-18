"use client";

import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import raw from '../data/projects.json';

// ===== 型定義（JSONの両対応を吸収） =====
type Lang = 'en' | 'ja';

type LocalizedString = { en: string; ja?: string };
type MaybeLocalized<T> = T | { en: T; ja?: T }; // 文字列でも配列でも使えるユーティリティ

type RawProject = {
  id: number;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  title: LocalizedString;
  description: LocalizedString;
  tags?: MaybeLocalized<string[]>;
};

type ProjectView = {
  id: number;
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  title: string;
  description: string;
  tags: string[];
};

// ===== 正規化ヘルパー =====
const getLang = (lng?: string): Lang => (lng && lng.startsWith('ja') ? 'ja' : 'en');

const pickLocalizedString = (v: LocalizedString, lang: Lang): string =>
  v[lang] ?? v.en ?? '';

const pickMaybeLocalizedArray = (v: MaybeLocalized<string[]> | undefined, lang: Lang): string[] => {
  if (!v) return [];
  // 配列1本のケース（英日共通）
  if (Array.isArray(v)) return v;
  // 言語別オブジェクトのケース
  return v[lang] ?? v.en ?? [];
};

export default function Projects() {
  const { t, i18n } = useTranslation();
  const lang = getLang(i18n.language);

  // JSON から View 用に正規化
  const projects: ProjectView[] = (raw.projects as RawProject[]).map(p => ({
    id: p.id,
    image: p.image,
    demoUrl: p.demoUrl,
    githubUrl: p.githubUrl,
    title: pickLocalizedString(p.title, lang),
    description: pickLocalizedString(p.description, lang),
    tags: pickMaybeLocalizedArray(p.tags, lang),
  }));

  // === あなたの既存アニメ設定（そのまま流用） ===
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('projects.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('projects.subtitle')}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              className="group bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-64 bg-gradient-to-br from-primary-400 to-primary-600 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold opacity-20">
                  {project.id}
                </div>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={`${project.id}-${index}-${tag}`}
                      className="px-3 py-1 text-sm bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {t('projects.liveDemo')}
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      {t('projects.sourceCode')}
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
