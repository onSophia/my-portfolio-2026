export function Footer() {
    return (
        <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#050505]">
            <div className="container mx-auto px-4 text-center">
                <p className="text-slate-500 dark:text-slate-400 text-sm">
                    © {new Date().getFullYear()} София Штокалова.
                    <span className="hidden md:inline"> Сделано с любовью на Next.js & Tailwind.</span>
                </p>
            </div>
        </footer>
    );
}