import Link from "next/link";
import { ArrowRight, Code, BookOpen, ExternalLink, User, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="container mx-auto px-6 py-20 max-w-5xl">
      {/* Hero Section */}
      <section className="mb-32">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-8">
          <Zap size={14} /> Vibe Coding in Progress
        </div>
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 text-gradient">
          Vibe Code <br />
          to Freedom.
        </h1>
        <p className="text-xl md:text-2xl text-muted max-w-2xl leading-relaxed mb-10">
          Building useful things in record time with AI agents. The mission is simple: create enough value to fire my 9-5 and ship what matters.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:scale-105 transition-transform flex items-center gap-2"
          >
            What&apos;s shipped so far <ArrowRight size={18} />
          </Link>
          <Link
            href="/musings"
            className="px-8 py-3 rounded-full glass font-medium hover:bg-white/10 transition-colors flex items-center gap-2"
          >
            Read the Musings
          </Link>
        </div>
      </section>

      <div className="grid md:grid-cols-3 gap-12">
        {/* About Preview */}
        <section className="glass p-8 rounded-3xl border border-white/5">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <User size={20} />
            <h2 className="text-lg font-semibold uppercase tracking-widest text-sm">The Mission</h2>
          </div>
          <p className="text-muted leading-relaxed mb-6">
            Quit the traditional 9-5. No life story, just results. Vibe coding my way to greatness, one project at a time.
          </p>
          <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1 group">
            More about the vibe <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </section>

        {/* Musings Preview */}
        <section className="glass p-8 rounded-3xl border border-white/5">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <BookOpen size={20} />
            <h2 className="text-lg font-semibold uppercase tracking-widest text-sm">Latest Thoughts</h2>
          </div>
          <div className="space-y-6">
            <Link href="/musings/first-post" className="group block">
              <span className="text-xs text-muted mb-1 block">Feb 14, 2026</span>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors leading-tight">My First Blog Post</h3>
              <p className="text-sm text-muted mt-2 group-hover:text-muted/80 transition-colors">Starting the journey...</p>
            </Link>
          </div>
        </section>

        {/* Projects Preview */}
        <section className="glass p-8 rounded-3xl border border-white/5">
          <div className="flex items-center gap-2 mb-6 text-primary">
            <Code size={20} />
            <h2 className="text-lg font-semibold uppercase tracking-widest text-sm">Shipped</h2>
          </div>
          <div className="space-y-6">
            <Link href="/projects/shmantasy-shmootball" className="group block">
              <span className="text-xs text-muted mb-1 block text-primary font-bold">FEBRUARY 2026</span>
              <h3 className="text-xl font-bold group-hover:text-primary transition-colors flex items-center gap-2 leading-tight">
                Shmantasy Shmootball
              </h3>
              <p className="text-sm text-muted mt-2 group-hover:text-muted/80 transition-colors">Built in 3 hours via AI to show the bros.</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
