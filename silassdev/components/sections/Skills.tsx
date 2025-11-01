// components/sections/Skills.tsx
'use client';
import { motion } from 'framer-motion';

type Skill = { name: string; level: number };

const skills: Skill[] = [
  { name: 'TypeScript', level: 88 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 82 },
  { name: 'Tailwind CSS', level: 86 },
  { name: 'MySQL', level: 72 },
  { name: 'Node.js', level: 78 },
  { name: 'Framer Motion', level: 64 },
  { name: 'Testing (Jest)', level: 55 },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-indigo-500">Skills</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">
          Technologies and tools I use day-to-day — focused on building performant and maintainable apps.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((s) => (
            <motion.div
              key={s.name}
              whileHover={{ y: -6 }}
              className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium">{s.name}</div>
                <div className="text-sm text-gray-500">{s.level}%</div>
              </div>

              <div className="mt-3 h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${s.level}%` }}
                  transition={{ duration: 0.9 }}
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
