'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';


export default function Header() {
return (
<motion.header
initial={{ y: -50, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.6 }}
className="fixed top-0 left-0 w-full backdrop-blur-md bg-white/30 dark:bg-gray-900/30 shadow-sm z-50"
>
<div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
<Link href="/" className="text-xl font-bold text-indigo-500 dark:text-indigo-400">
Silas Pilar
</Link>
<nav className="space-x-6 text-sm">
<Link href="#about" className="hover:text-indigo-500 transition-colors">About</Link>
<Link href="#skills" className="hover:text-indigo-500 transition-colors">Skills</Link>
<Link href="#projects" className="hover:text-indigo-500 transition-colors">Projects</Link>
<Link href="#contact" className="hover:text-indigo-500 transition-colors">Contact</Link>
</nav>
</div>
</motion.header>
);
}