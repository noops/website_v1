'use client';

import Link from "next/link";
import { ArrowRight, Code, BookOpen, User, Zap, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-6 pt-32 pb-40 max-w-5xl">
      {/* Hero Section */}
      <section className="mb-24">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 text-foreground leading-tight">
          Hey I&apos;m noops, exploring AI <span className="inline-block text-primary"><Cpu size={40} className="inline mb-2" /></span> and building.
        </h1>
        <div className="font-mono text-lg md:text-xl text-muted-foreground max-w-3xl leading-relaxed mb-12 border-l-2 border-primary/20 pl-6 py-2">
          Trying to leverage my professional experience to make AI more accessible and build cool things. Based in Austin, TX. 🌵
        </div>
      </section>

      <div className="w-full h-px bg-border border-t border-dashed border-border/50 mb-24" />

      {/* Projects Section - Refined Layout */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" /> Projects
          </h2>
          <Link href="/projects">
            <Button variant="outline" size="sm" className="rounded-full px-6 font-mono text-[10px] uppercase tracking-widest gap-2 bg-card/50">
              Explore <ArrowRight size={12} />
            </Button>
          </Link>
        </div>

        <div className="group relative overflow-hidden">
          <div className="flex overflow-x-auto pb-8 gap-8 no-scrollbar snap-x snap-mandatory">
            {[
              {
                slug: "slog-maxxing",
                title: "Slog Maxxing",
                year: "2026",
                description: "Personal dashboard for tracking the day and chatting with notes.",
                icon: <Code size={48} />,
                color: "bg-blue-500/10",
                tags: ["Next.js", "AI"]
              },
              {
                slug: "shmantasy-shmootball",
                title: "Shmantasy Shmootball",
                year: "2026",
                description: "Full fantasy football app built in an afternoon with AI.",
                icon: <Zap size={48} />,
                color: "bg-orange-500/10",
                tags: ["React", "API"]
              }
            ].map((project, i) => (
              <Link 
                key={i} 
                href={`/projects/${project.slug}`} 
                className="flex-shrink-0 w-[300px] md:w-[350px] snap-start"
              >
                <div className="h-[400px] bg-card/50 border border-border rounded-[2rem] p-8 flex flex-col justify-between hover:bg-card hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-center justify-between text-muted-foreground/60 font-mono text-[10px] tracking-widest uppercase">
                    <span>{project.year}</span>
                    <ArrowRight size={12} />
                  </div>
                  
                  <div className={`w-24 h-24 rounded-2xl ${project.color} flex items-center justify-center self-center group-hover:scale-105 transition-transform duration-500`}>
                    <div className="text-primary/80 group-hover:text-primary transition-colors">{project.icon}</div>
                  </div>

                  <div>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map(tag => (
                        <span key={tag} className="font-mono text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-sm bg-border/30 text-muted-foreground/80">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-xs text-muted-foreground/80 leading-relaxed line-clamp-2">{project.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="w-full h-px bg-border border-t border-dashed border-border/50 mb-24" />

      {/* Blog Section - Clean List */}
      <section>
        <div className="flex items-center justify-between mb-12">
          <h2 className="font-mono text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary" /> Blog Notes
          </h2>
          <Link href="/blog">
            <Button variant="ghost" size="sm" className="rounded-full px-6 font-mono text-[10px] uppercase tracking-widest bg-card/50">
              Read all
            </Button>
          </Link>
        </div>
        <div className="grid gap-4">
          <Link href="/blog/first-post" className="group">
            <div className="flex items-center justify-between p-8 bg-card border border-border rounded-3xl hover:border-primary/30 transition-all">
              <div className="flex items-center gap-8">
                <span className="font-mono text-xs text-muted-foreground uppercase tracking-widest">Feb 14, 2026</span>
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">My First Blog Post</h3>
              </div>
              <ArrowRight size={20} className="text-muted-foreground group-hover:translate-x-2 transition-transform" />
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
