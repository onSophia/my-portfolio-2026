"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { FolderGit2, ArrowRight } from "lucide-react";
import Link from "next/link";

export function Projects() {
    return (
        <section id="projects" className="py-24 overflow-hidden">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-3xl font-bold mb-12 flex items-center gap-3 justify-center md:justify-start"
            >
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <FolderGit2 size={24} />
                </div>
                Мои выдуманные работы ({SITE_DATA.projects.length})
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SITE_DATA.projects.map((project, idx) => {
                    const isEven = idx % 2 === 0;

                    return (
                        <motion.div
                            key={project.slug}
                            // Начинаем движение: четные слева (-100px), нечетные справа (100px)
                            initial={{ opacity: 0, x: isEven ? -100 : 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            // margin: "-50px" — анимация начнется почти сразу, как край карточки появится на экране
                            viewport={{ once: true, margin: "-50px" }}
                            // 🔥 ТУТ ИЗМЕНЕНИЯ:
                            // duration: 0.4 (было 0.7) — карточка летит быстро
                            // delay: idx * 0.1 (было 0.15) — пауза между карточками меньше
                            transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.1 }}
                        >
                            <Link href={`/projects/${project.slug}`} className="group block h-full">
                                <article className="h-full flex flex-col bg-white dark:bg-[#111] rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300">
                                    <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
                                        <div className="absolute top-4 left-4 z-10">
                                            <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 backdrop-blur rounded-full shadow-sm text-slate-800 dark:text-slate-200">
                                                {project.category}
                                            </span>
                                        </div>
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>

                                    <div className="p-6 flex flex-col flex-grow">
                                        <h3 className="text-xl font-bold mb-3 group-hover:text-blue-500 transition-colors flex items-center justify-between">
                                            {project.title}
                                            <ArrowRight size={20} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-500" />
                                        </h3>
                                        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-2 mb-4 flex-grow leading-relaxed">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto border-t border-slate-100 dark:border-slate-800 pt-4">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded">
                                                    {tag}
                                                </span>
                                            ))}
                                            {project.tags.length > 3 && (
                                                <span className="text-xs font-mono text-slate-400 px-2 py-1">+{project.tags.length - 3}</span>
                                            )}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
}