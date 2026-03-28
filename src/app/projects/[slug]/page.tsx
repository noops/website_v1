import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const projects = {
    "slog-maxxing": {
        title: "Slog Maxxing",
        date: "March 2026",
        description: "A comprehensive environment for digital journaling, time tracking, and conversational RAG workflows.",
        content: (
            <>
                <p>
                    I was tired of traditional journaling—it felt like a chore. So I built Slog Maxxing to make it easier to track what I actually do all day and then talk to my notes to find things I've forgotten.
                </p>
                <p>
                    I went for a hyper-minimalist design to keep things focused. The best part is the RAG integration, which lets me ask things like "when did I last work on that API?" and get a really clear answer from my own data.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Project Details</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Framework:</strong> Next.js 15</li>
                    <li><strong>Design:</strong> Tailwind v4 (Monochrome OKLCH)</li>
                    <li><strong>Features:</strong> RAG Chat, Session Timers, Stream Management</li>
                </ul>
            </>
        ),
        link: "https://github.com/noops/slog_maxxing",
        github: "https://github.com/noops/slog_maxxing",
    },
    "shmantasy-shmootball": {
        title: "Shmantasy Shmootball",
        date: "Feb 2026",
        description: "A Dynasty Fantasy Football powerhouse built in an afternoon.",
        content: (
            <>
                <p>
                    One afternoon, I sat down and wondered: "Could I build an entire fantasy football app before dinner?"
                </p>
                <p>
                    With the help of an AI agent, the answer was... mostly yes! This was an incredible test of how fast you can iterate when you have an AI partner to handle the common coding patterns, letting me focus on the logic and design.
                </p>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-white">Project Details</h3>
                <ul className="list-disc list-inside space-y-2">
                    <li><strong>Framework:</strong> Next.js 15</li>
                    <li><strong>Styling:</strong> Tailwind CSS</li>
                    <li><strong>Deployment:</strong> Vercel</li>
                    <li><strong>Data:</strong> Fantasy API Integrations</li>
                </ul>
            </>
        ),
        link: "https://shmantasyshmootball.vercel.app/",
        github: "https://github.com/noops/dynasty_site_v1",
    },
};

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = projects[slug as keyof typeof projects];

    if (!project) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-20 max-w-2xl">
            <Link href="/projects">
                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary mb-12 -ml-3">
                    <ArrowLeft size={16} /> Back to Projects
                </Button>
            </Link>

            <article>
                <header className="mb-12">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-sm text-muted-foreground">{project.date}</span>
                        <div className="flex gap-2">
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Button variant="outline" size="sm" className="gap-2">
                                    <Github size={16} /> Source
                                </Button>
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" className="bg-white text-black hover:bg-slate-200 gap-2">
                                    Live Demo <ExternalLink size={16} />
                                </Button>
                            </a>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-foreground mb-8 leading-tight">
                        {project.title}
                    </h1>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    <p className="text-xl text-foreground font-medium">{project.description}</p>
                    {project.content}
                </div>
            </article>
        </div>
    );
}
