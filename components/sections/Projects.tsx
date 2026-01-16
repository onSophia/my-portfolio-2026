"use client";

import { motion, Variants } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { FolderGit2, ArrowUpRight } from "lucide-react";
import Link from "next/link";


const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    },
};

export function Projects() {
    return (
        <section id="projects" className="py-32 overflow-hidden bg-slate-50/50 dark:bg-black/20">
            <div className="container px-4 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center md:text-left"
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 mb-4 border border-blue-200 dark:border-blue-800">
                        <FolderGit2 size={16} />
                        <span className="text-sm font-medium">Портфолио</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-500">
                        Избранные работы
                    </h2>
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10"
                >
                    {SITE_DATA.projects.map((project) => (
                        <motion.div key={project.slug} variants={cardVariants}>
                            <Link href={`/projects/${project.slug}`} className="group block h-full perspective-1000">
                                <article className="h-full flex flex-col bg-white dark:bg-[#111] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5)] hover:border-blue-500/30 group-hover:-translate-y-2">

                                    {/* Картинка */}
                                    <div className="relative aspect-[16/10] overflow-hidden">
                                        <div className="absolute inset-0 bg-blue-600/0 group-hover:bg-blue-600/10 transition-colors z-10 duration-500" />
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        />
                                        <div className="absolute top-6 left-6 z-20">
                                            <span className="px-4 py-2 text-xs font-bold uppercase tracking-wider bg-white/90 dark:bg-black/80 backdrop-blur-md rounded-xl shadow-lg text-slate-900 dark:text-white border border-white/20">
                                                {project.category}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Текст */}
                                    <div className="p-8 flex flex-col flex-grow relative">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-2xl font-bold group-hover:text-blue-500 transition-colors duration-300">
                                                {project.title}
                                            </h3>
                                            <div className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-400 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300 transform group-hover:rotate-45">
                                                <ArrowUpRight size={20} />
                                            </div>
                                        </div>

                                        <p className="text-slate-600 dark:text-slate-400 line-clamp-2 mb-6 text-lg">
                                            {project.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tags.slice(0, 3).map(tag => (
                                                <span key={tag} className="text-xs font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-900/50 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-slate-800">
                                                    #{tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}