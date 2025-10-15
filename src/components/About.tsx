import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Users } from 'lucide-react';

export default function About() {
  const { t } = useTranslation();

  const skills = [
    { icon: Code, name: 'Frontend Development', level: 95 },
    { icon: Zap, name: 'Performance Optimization', level: 90 },
    { icon: Palette, name: 'UI/UX Design', level: 85 },
    { icon: Users, name: 'Team Collaboration', level: 92 }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              {t('about.description')}
            </p>
            <div className="flex flex-wrap gap-3">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Next.js', 'GraphQL', 'PostgreSQL', 'Docker'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              {t('about.skills')}
            </h3>
            {skills.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                      <skill.icon className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-gray-600 dark:text-gray-400 font-medium">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary-500 to-primary-600 rounded-full"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
