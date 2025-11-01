'use client';
import { motion } from 'framer-motion';
import { Project } from '@/lib/data/projects'; 

export default function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      <motion.div onClick={onClose} className="absolute inset-0 bg-black/40" />
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        className="relative bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-3xl w-full mx-4 shadow-2xl border border-gray-100 dark:border-gray-800"
      >
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{project.summary}</p>
          </div>
          <button onClick={onClose} className="text-gray-500">Close</button>
        </div>

        <div className="mt-4 text-gray-600 dark:text-gray-300">
          <p>
            Example features: authentication, role-based access, real-time updates, payments (Stripe), and tests.
          </p>
          <div className="mt-4 flex gap-3">
            {project.live && <a href={project.live} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">Open demo</a>}
            {project.repo && <a href={project.repo} target="_blank" rel="noreferrer" className="px-3 py-2 border rounded">View repo</a>}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
