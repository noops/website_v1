import Link from "next/link";
import { ExternalLink } from "lucide-react";

const projects = [
    {
        slug: "shmantasy-shmootball",
        title: "Shmantasy Shmootball",
        date: "Feb 2026",
        description: "Built in 3 hours on a Monday afternoon to show the bros how easy it is to build with AI.",
        tech: ["Next.js", "Tailwind", "Vercel", "API Integration"],
    },
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-5xl font-bold mb-12 text-gradient">Projects</h1>

            <div className="grid gap-12">
                {projects.map((project) => (
                    <article key={project.slug} className="group glass p-8 rounded-2xl hover:border-primary/50 transition-colors">
                        <Link href={`/projects/${project.slug}`}>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm text-muted">{project.date}</span>
                                <ExternalLink size={20} className="text-muted group-hover:text-primary transition-colors" />
                            </div>
                            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h2>
                            <p className="text-lg text-muted leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="flex gap-3">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-muted">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
