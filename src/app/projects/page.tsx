import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
    {
        slug: "slog-maxxing",
        title: "Slog Maxxing",
        date: "March 2026",
        description: "A personal dashboard for tracking my day and chatting with an AI about my notes. It makes journaling actually useful.",
        tech: ["Next.js", "Tailwind CSS", "RAG"],
    },
    {
        slug: "shmantasy-shmootball",
        title: "Shmantasy Shmootball",
        date: "Feb 2026",
        description: "A full fantasy football app built in just one afternoon to see if I could really pull it off with AI.",
        tech: ["Next.js", "Tailwind", "Vercel", "API Integration"],
    },
];

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-5xl font-bold mb-12 text-foreground">Projects</h1>

            <div className="grid gap-12">
                {projects.map((project) => (
                    <article key={project.slug} className="group bg-card border border-border p-8 rounded-3xl hover:border-border/80 transition-all hover:shadow-2xl hover:shadow-primary/5">
                        <Link href={`/projects/${project.slug}`}>
                            <div className="flex justify-between items-start mb-4">
                                <span className="text-sm text-muted-foreground">{project.date}</span>
                                <Button variant="ghost" size="icon-sm" className="rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                                    <ExternalLink size={18} />
                                </Button>
                            </div>
                            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{project.title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {project.description}
                            </p>
                            <div className="flex flex-wrap gap-3">
                                {project.tech.map((t) => (
                                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-muted/30 border border-border text-muted-foreground font-medium uppercase tracking-wider">
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
