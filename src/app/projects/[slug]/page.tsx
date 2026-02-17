import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

const projects = {
    "shmantasy-shmootball": {
        title: "Shmantasy Shmootball",
        date: "Feb 2026",
        description: "A Dynasty Fantasy Football powerhouse built in an afternoon.",
        content: (
            <>
                <p>
                    Threw this bad-boy together on Monday (President&apos;s day) afternoon 2026-02-09.
                    Fantasy football group text was popping off and some bros were talking about AI.
                    I wanted to show them how easy it is to build something.
                </p>
                <p>
                    This took 3ish hours using a Google AI agent (Antigravity). I already had access
                    and some familiarity with GitHub and Vercel.
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
            <Link href="/projects" className="inline-flex items-center gap-2 text-muted hover:text-primary transition-colors mb-12">
                <ArrowLeft size={16} /> Back to Projects
            </Link>

            <article>
                <header className="mb-12">
                    <div className="flex justify-between items-start mb-4">
                        <span className="text-sm text-muted">{project.date}</span>
                        <div className="flex gap-4">
                            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-muted hover:text-foreground transition-colors">
                                <Github size={18} /> Source
                            </a>
                            <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-primary hover:underline">
                                Live Demo <ExternalLink size={16} />
                            </a>
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold text-white mb-8 leading-tight">
                        {project.title}
                    </h1>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed space-y-6">
                    <p className="text-xl text-white font-medium">{project.description}</p>
                    {project.content}
                </div>
            </article>
        </div>
    );
}
