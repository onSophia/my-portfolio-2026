"use client";
import { motion } from "framer-motion";
import { SITE_DATA } from "@/lib/data";
import { Check } from "lucide-react";

export function Pricing() {
    return (
        <section id="pricing" className="py-24 w-full">

            <div className="max-w-[1440px] mx-auto px-4 md:px-8">

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-3xl font-bold mb-12 flex items-center gap-2"
                >
                    <span className="text-blue-500 font-mono text-xl">03.</span> Цены и Услуги
                </motion.h2>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SITE_DATA.pricing.map((plan, idx) => {
                        const Icon = plan.icon;
                        return (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.2 }}
                                whileHover={{ y: -10 }}
                                className={`relative p-8 rounded-3xl border flex flex-col ${plan.popular
                                    ? "border-blue-500 bg-blue-50/50 dark:bg-blue-900/10 shadow-2xl shadow-blue-500/20"
                                    : "border-slate-200 dark:border-slate-800 bg-white dark:bg-[#111]"
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-bold rounded-full shadow-lg">
                                        ХИТ ЗАКАЗОВ
                                    </div>
                                )}

                                <div className="mb-6 p-3 w-fit rounded-2xl bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                                    <Icon size={32} />
                                </div>

                                <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
                                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4">
                                    {plan.price}
                                </div>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mb-6 min-h-[40px]">
                                    {plan.description}
                                </p>


                                <ul className="space-y-3 mb-8 flex-grow">
                                    {plan.features.map((feature, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                                            <Check size={16} className="text-green-500 mt-0.5 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <a
                                    href={SITE_DATA.contact.telegram}
                                    className={`block w-full py-3 text-center rounded-xl font-bold transition-all ${plan.popular
                                        ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-900 dark:text-white"
                                        }`}
                                >
                                    Обсудить
                                </a>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}