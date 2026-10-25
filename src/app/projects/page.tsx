import Link from "next/link";
import { TerminalHeading } from "@/components/terminal-heading";
import { Tag } from "@/components/tag";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <div>
            <TerminalHeading command="ls -la projects/" />
            <div className="space-y-4">
                {projects.map((project) => (
                    <Link
                        key={project.slug}
                        href={`/projects/${project.slug}`}
                        className="group block border border-border bg-card p-5 hover:border-muted-foreground transition-colors"
                    >
                        <div className="flex items-baseline justify-between gap-4 mb-2">
                            <h2 className="font-bold text-yellow group-hover:text-green transition-colors">{project.title}</h2>
                            <span className="text-xs text-muted-foreground shrink-0">{project.date.toLowerCase()}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{project.summary}</p>
                        <div className="flex flex-wrap gap-1.5">
                            {project.tech.map((tech, i) => (
                                <Tag key={tech} label={tech} index={i} />
                            ))}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
