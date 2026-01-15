"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";

// Настройки анимации контейнера
const container = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // Задержка между появлением каждого элемента
        },
    },
};

// Настройки анимации для каждого элемента
const item = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    show: { opacity: 1, y: 0, scale: 1 },
};

export function Skills() {
    return (
        <section className="py-24 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 flex items-center gap-2"
            >
                <span className="text-blue-500 font-mono text-xl">02.</span> Мои навыки
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {SITE_DATA.skills.map((group, groupIdx) => (
                    <motion.div
                        key={groupIdx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                        className="p-6 rounded-2xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-lg hover:shadow-blue-500/20 transition-shadow duration-300"
                    >
                        <h3 className="font-mono text-blue-500 mb-4 font-bold text-lg border-b border-slate-100 dark:border-white/10 pb-2">
                            {group.category}
                        </h3>

                        <motion.ul
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="space-y-3"
                        >
                            {group.items.map((skill) => (
                                <motion.li key={skill} variants={item} className="flex items-center gap-3">
                                    <div className="w-2 h-2 bg-blue-400 rounded-full shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
                                    <span className="text-slate-700 dark:text-slate-200 font-medium">
                                        {skill}
                                    </span>
                                </motion.li>
                            ))}
                        </motion.ul>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}