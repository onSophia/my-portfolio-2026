"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { ArrowRight, Download } from "lucide-react";

export function Hero() {
    return (
        <section className="min-h-[85vh] flex flex-col justify-center relative">
            {/* Фоновое пятно (Gradient Blob) для красоты */}
            <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] bg-blue-500/20 rounded-full blur-[100px] opacity-50 pointer-events-none" />

            <div className="space-y-6 max-w-4xl">
                {/* Анимация статуса */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 text-xs font-mono border border-blue-100 dark:border-blue-800"
                >
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                    </span>
                    {SITE_DATA.hero.status}
                </motion.div>

                {/* Анимация заголовка */}
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-5xl md:text-8xl font-bold tracking-tight text-slate-900 dark:text-white"
                >
                    {SITE_DATA.hero.name}
                    <span className="block text-slate-400 dark:text-slate-600 mt-2">
                        {SITE_DATA.hero.role}
                    </span>
                </motion.h1>

                {/* Анимация описания */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="max-w-xl text-lg text-slate-600 dark:text-slate-400 leading-relaxed"
                >
                    {SITE_DATA.hero.description}
                </motion.p>

                {/* Анимация кнопок */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap gap-4 pt-4"
                >
                    <a href="#projects" className="group flex items-center gap-2 px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black rounded-xl font-medium hover:scale-105 transition-transform">
                        Смотреть работы
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                    <button className="flex items-center gap-2 px-6 py-3 border border-slate-200 dark:border-slate-800 rounded-xl font-medium hover:bg-slate-100 dark:hover:bg-slate-900 transition-colors">
                        <Download size={18} />
                        Скачать CV
                    </button>
                </motion.div>
            </div>
        </section>
    );
}