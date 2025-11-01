'use client';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link';


export default function Hero() {
return (
<section id="hero" className="flex flex-col justify-center items-center text-center min-h-screen px-6 bg-gradient-to-b from-indigo-50 to-white dark:from-gray-900 dark:to-gray-950">
<motion.div
initial={{ opacity: 0, y: 40 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.8 }}
>
<h1 className="text-5xl sm:text-6xl font-bold mb-4">
Turning <span className="text-indigo-500">Ideas</span> into Fast, Functional Web Apps
</h1>
<p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
I’m <strong>Silas Pilar</strong>, a junior full-stack developer who loves crafting high-performance web apps using <strong>React</strong>, <strong>TypeScript</strong>, and <strong>Next.js</strong>.
</p>
<Link href="#projects" className="inline-flex items-center gap-2 bg-indigo-500 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-600 transition-colors">
View My Work <FaArrowRight className="text-sm" />
</Link>
</motion.div>
</section>
);
}