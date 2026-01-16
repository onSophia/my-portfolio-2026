"use client";
import Link from "next/link";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { motion } from "framer-motion";

const navItems = [
    { name: "Обо мне", href: "#about" },
    { name: "Проекты", href: "#projects" },
    { name: "Сертификаты", href: "#certificates" },
    { name: "Контакты", href: "#contact" },
];

export function Header() {
    return (

        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="sticky top-0 z-50 w-full border-b border-slate-200/50 dark:border-slate-800/50 bg-white/70 dark:bg-[#0a0a0a]/70 backdrop-blur-xl supports-[backdrop-filter]:bg-white/60"
        >
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Логотип */}
                <Link href="/" className="font-bold text-xl tracking-tight flex items-center gap-2">
                    <span className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-mono">
                        S
                    </span>
                    <span>Sofia.Dev</span>
                </Link>

                {/* Навигация (скрыта на мобильных) */}
                <nav className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Кнопка темы */}
                <div className="flex items-center gap-4">
                    <ModeToggle />
                </div>
            </div>
        </motion.header>
    );
}