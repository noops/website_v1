import { TerminalHeading } from "@/components/terminal-heading";

const INTERESTS = [
    {
        title: "just do things",
        description: "You can literally just do things. With the tools and knowledge available today there's nothing holding you back.",
    },
    {
        title: "simple design",
        description: "I'm a big fan of minimalism. I think digital tools should be clean, focused, and easy on the eyes.",
    },
    {
        title: "building fast",
        description: "There's nothing quite like the feeling of turning an idea into a working app in just a few hours.",
    },
    {
        title: "staying curious",
        description: "I'm constantly learning. Whether it's a new model or a better way to code, I'm always looking for what's next.",
    },
];

export default function AboutPage() {
    return (
        <div className="space-y-12">
            <section>
                <TerminalHeading command="cat about.md" />
                <div className="border border-border bg-card p-5 text-muted-foreground leading-relaxed">
                    <p>
                        Data scientist exploring AI and using agents. Trying to leverage my professional experience to make AI more accessible and build things.
                    </p>
                </div>
            </section>

            <section>
                <TerminalHeading command="cat interests.log" />
                <ol className="border-l border-border ml-1.5 space-y-6">
                    {INTERESTS.map((interest) => (
                        <li key={interest.title} className="relative pl-6">
                            <span className="absolute -left-[4px] top-1.5 size-[7px] rounded-full bg-aqua" />
                            <p className="text-xs text-green">{interest.title}</p>
                            <p className="mt-1 leading-relaxed">{interest.description}</p>
                        </li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
