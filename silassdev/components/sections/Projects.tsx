'use client';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects as projectsData, Project } from '@/lib/data/projects'; 
import ProjectModal from '@/components/shared/ProjectModal';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>('All');
  const [selected, setSelected] = useState<Project | null>(null);

  const tags = useMemo(() => {
    const set = new Set<string>();
    projectsData.forEach((p) => p.tags.forEach((t) => set.add(t)));
    return ['All', ...Array.from(set)];
  }, []);

  const visible = useMemo(() => {
    return filter === 'All' ? projectsData : projectsData.filter((p) => p.tags.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-indigo-500">Projects</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((t) => (
              <button
                key={t}
                onClick={() => setFilter(t)}
                className={`px-3 py-1 rounded-full text-sm ${filter === t ? 'bg-indigo-600 text-white' : 'bg-white dark:bg-gray-800 border'}`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {visible.map((p) => (
              <motion.article
                key={p.id}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="flex flex-col h-full">
                  <div className="flex-1">
                    <h3 className="font-semibold">{p.title}</h3>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{p.summary}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-xs">
                      {p.tags.map((t) => (
                        <span key={t} className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-full border text-xs">{t}</span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 flex gap-2">
                    {p.live && <a href={p.live} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">Live</a>}
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border rounded">Repo</a>}
                    <button onClick={() => setSelected(p)} className="ml-auto px-3 py-1 bg-indigo-600 text-white rounded">Details</button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <AnimatePresence>{selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}</AnimatePresence>
    </section>
  );
}
