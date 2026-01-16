import { SITE_DATA } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Github, ExternalLink, Code2 } from "lucide-react";


export function generateStaticParams() {
    return SITE_DATA.projects.map((project) => ({
        slug: project.slug,
    }));
}


export default async function ProjectPage(props: { params: Promise<{ slug: string }> }) {
    const params = await props.params;
    const project = SITE_DATA.projects.find((p) => p.slug === params.slug);

    if (!project) {
        notFound();
    }

    return (
        <main className="min-h-screen bg-white dark:bg-[#0a0a0a] pb-24">
            <div className="max-w-4xl mx-auto px-6 pt-12 mb-8">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-500 transition-colors mb-8 group"
                >
                    <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    Назад к проектам
                </Link>
            </div>

            <article className="max-w-4xl mx-auto px-6">
                <div className="mb-8">
                    <span className="text-blue-500 font-mono text-sm font-bold uppercase tracking-wider bg-blue-50 dark:bg-blue-900/20 px-3 py-1 rounded-full">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-6">{project.title}</h1>
                    <p className="text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-2xl">
                        {project.description}
                    </p>
                </div>

                {/* Картинка */}
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 mb-12 shadow-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {/* Левая колонка */}
                    <div className="md:col-span-2 space-y-8">
                        <section>
                            <h2 className="text-2xl font-bold mb-4">О проекте</h2>
                            <div className="prose dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed">
                                {project.fullDescription}
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4">Сложности (Challenge)</h2>
                            <div className="bg-red-50 dark:bg-red-900/10 p-6 rounded-xl border border-red-100 dark:border-red-900/20">
                                <p className="text-slate-700 dark:text-slate-300 font-medium">
                                    🚀 {project.challenge}
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Правая колонка */}
                    <div className="space-y-8">
                        <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
                            <h3 className="font-bold mb-4 flex items-center gap-2">
                                <Code2 size={20} className="text-blue-500" />
                                Стек технологий
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-3 py-1 bg-white dark:bg-black rounded-lg text-sm border border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex flex-col gap-3">
                            <a
                                href={project.links.demo}
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold transition-all shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40"
                            >
                                <ExternalLink size={20} />
                                Открыть сайт
                            </a>
                            <a
                                href={project.links.repo}
                                target="_blank"
                                className="flex items-center justify-center gap-2 w-full py-4 border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl font-bold transition-colors"
                            >
                                <Github size={20} />
                                Исходный код
                            </a>
                        </div>
                    </div>
                </div>
            </article>
        </main>
    );
}