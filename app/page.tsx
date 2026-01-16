import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Pricing } from "@/components/sections/Pricing";
import { Certificates } from "@/components/sections/Certificates";
import { SITE_DATA } from "@/lib/data";

export default function Home() {
    return (
        <main className="max-w-4xl mx-auto px-6 sm:px-12 overflow-hidden">
            <header className="flex justify-between items-center py-6">
                <div className="font-mono font-bold text-xl tracking-tighter cursor-pointer">
                    DEV.PORTFOLIO
                </div>
                <ThemeToggle />
            </header>

            <Hero />
            <Skills />

            <Pricing />

            <section id="about" className="py-24 max-w-2xl">
                <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
                    <span className="text-blue-500 font-mono text-xl">04.</span> Опыт и Обучение
                </h2>
                <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                    {SITE_DATA.about.text.map((p, i) => (
                        <p key={i} className="mb-4">{p}</p>
                    ))}
                </div>
            </section>

            {/*  Сертификаты  */}
            <Certificates />

            <Projects />

            <footer id="contact" className="py-24 border-t border-slate-200 dark:border-slate-800 text-center">
                <h2 className="text-3xl font-bold mb-6">Готовы обсудить проект?</h2>
                <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-lg mx-auto">
                    Свяжитесь со мной в Telegram.
                </p>
                <div className="flex justify-center gap-6 mt-8">
                    <a href={SITE_DATA.contact.telegram} className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                        Telegram
                    </a>
                </div>
                <div className="mt-12 text-xs text-slate-500 font-mono">
                    2026. Built with Next.js & Hard Work.
                </div>
            </footer>
        </main>
    );
}