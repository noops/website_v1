import Link from "next/link";
import { notFound } from "next/navigation";
import { TerminalHeading } from "@/components/terminal-heading";
import { Tag } from "@/components/tag";
import { getProject } from "@/lib/projects";

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const project = getProject(slug);

    if (!project) {
        notFound();
    }

    return (
        <article className="space-y-10">
            <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                ← cd ..
            </Link>

            <header className="space-y-3">
                <p className="text-xs text-muted-foreground">{project.date.toLowerCase()}</p>
                <h1 className="text-3xl font-bold text-yellow">{project.title}</h1>
                <p className="text-foreground leading-relaxed">{project.description}</p>
                <div className="flex gap-2 pt-1 text-xs">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border border-border px-3 py-1.5 text-muted-foreground hover:text-foreground hover:border-muted-foreground transition-colors"
                        >
                            source
                        </a>
                    )}
                    <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border border-green/50 px-3 py-1.5 text-green hover:bg-green/10 transition-colors"
                    >
                        live ↗
                    </a>
                </div>
            </header>

            <section className="space-y-4 text-muted-foreground leading-relaxed">
                {project.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </section>

            <section>
                <TerminalHeading command="cat details.yml" />
                <dl className="border border-border bg-card divide-y divide-border">
                    {project.details.map(({ label, value }) => (
                        <div key={label} className="flex gap-4 px-4 py-2">
                            <dt className="w-24 shrink-0 text-green">{label}:</dt>
                            <dd>{value}</dd>
                        </div>
                    ))}
                </dl>
                <div className="flex flex-wrap gap-1.5 mt-4">
                    {project.tech.map((tech, i) => (
                        <Tag key={tech} label={tech} index={i} />
                    ))}
                </div>
            </section>
        </article>
    );
}
