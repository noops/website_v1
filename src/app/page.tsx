import Link from "next/link";
import { Github, Linkedin } from "lucide-react";
import { TerminalHeading } from "@/components/terminal-heading";
import { Tag } from "@/components/tag";
import { projects } from "@/lib/projects";
import { posts } from "@/lib/posts";

const STACK = ["python", "sql", "pandas", "numpy", "scikit-learn", "scipy", "statsmodels", "claude code"];

const SOCIALS = [
  { href: "https://github.com/noops", label: "github", icon: Github },
  { href: "https://www.linkedin.com/in/ben-kirton-a9667310b/", label: "linkedin", icon: Linkedin },
];

const CACTUS = String.raw`
      ,*-.
      |  |
  ,.  |  |
  | |_|  | ,.
  \__  __/ | |
     |  |__/ /
     |  |___/
     |  |
  ~~~~~~~~~~~~
`;

export default function Home() {
  const [featured] = projects;

  return (
    <div className="space-y-16">
      <section className="flex flex-col sm:flex-row gap-8 sm:items-center">
        <pre aria-hidden className="hidden sm:block text-aqua/70 text-xs leading-tight select-none">
          {CACTUS}
        </pre>

        <div className="space-y-4">
          <div>
            <p className="text-xs text-muted-foreground">~ whoami</p>
            <h1 className="text-3xl font-bold text-yellow">noops</h1>
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Data scientist exploring AI and building things. Trying to make AI more accessible and ship cool stuff. Based in Austin, TX.
          </p>
          <p className="text-muted-foreground">
            <span className="text-green">▸</span> building{" "}
            <Link href={`/projects/${featured.slug}`} className="text-yellow font-bold hover:underline">
              {featured.title}
            </Link>{" "}
            — open-source AI for climate and energy
          </p>
          <div className="flex flex-wrap gap-1.5">
            {STACK.map((tech, i) => (
              <Tag key={tech} label={tech} index={i} />
            ))}
          </div>
          <div className="flex gap-4 text-muted-foreground">
            {SOCIALS.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="hover:text-foreground transition-colors"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </section>

      <section>
        <TerminalHeading command="cat projects.log">
          <Link href="/projects" className="text-muted-foreground hover:text-foreground transition-colors">
            ls -a →
          </Link>
        </TerminalHeading>
        <ol className="border-l border-border ml-1.5 space-y-6">
          {projects.map((project, i) => (
            <li key={project.slug} className="relative pl-6">
              <span
                className={`absolute -left-[4px] top-1.5 size-[7px] rounded-full ${i === 0 ? "bg-green" : "bg-yellow"}`}
              />
              <Link href={`/projects/${project.slug}`} className="group block">
                <p className="text-xs text-green">
                  {project.title.toLowerCase()} <span className="text-muted-foreground">— {project.date.toLowerCase()}</span>
                </p>
                <p className="mt-1 leading-relaxed group-hover:text-yellow transition-colors">{project.summary}</p>
              </Link>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <TerminalHeading command="ls blog/">
          <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
            all →
          </Link>
        </TerminalHeading>
        <ul className="divide-y divide-border">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex items-baseline justify-between gap-4 py-2">
                <span className="group-hover:text-yellow transition-colors">
                  <span className="text-muted-foreground mr-2 group-hover:text-green">›</span>
                  {post.title}
                </span>
                <span className="text-xs text-muted-foreground shrink-0">{post.date.toLowerCase()}</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <TerminalHeading command="cat why.md" />
        <div className="border border-border bg-card p-5 space-y-3 text-muted-foreground leading-relaxed">
          <p>You can literally just do things. With the tools available today there&apos;s nothing holding you back.</p>
          <p>I like small, focused tools that are easy on the eyes, and the feeling of turning an idea into a working app in an afternoon.</p>
        </div>
      </section>
    </div>
  );
}
