"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Award, ZoomIn, ExternalLink } from "lucide-react";

export function Certificates() {
    return (
        <section className="py-12 border-b border-slate-200 dark:border-slate-800">
            <motion.h2
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-2xl font-bold mb-8 flex items-center gap-2"
            >
                <Award className="text-blue-500" />
                Мои сертификаты
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {SITE_DATA.certificates.map((cert, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 }}
                        className="group relative bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-2xl transition-all duration-300"
                    >
                        <a href={cert.image} target="_blank" rel="noopener noreferrer" className="block relative aspect-[1.414/1] overflow-hidden bg-slate-100 cursor-zoom-in">
                            <img
                                src={cert.image}
                                alt={cert.name}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                            />

                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="bg-white/90 dark:bg-black/80 text-slate-900 dark:text-white px-4 py-2 rounded-full flex items-center gap-2 text-sm font-bold shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <ZoomIn size={16} />
                                    Открыть оригинал
                                </div>
                            </div>
                        </a>

                        <div className="p-5 relative z-10 bg-white dark:bg-slate-900">
                            <h3 className="font-bold text-lg mb-1 flex justify-between items-center">
                                {cert.name}
                                <ExternalLink size={14} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                {cert.description}
                            </p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}