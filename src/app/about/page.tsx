import { Cpu, Wind, Zap, Music } from "lucide-react";

export default function AboutPage() {
    const interests = [
        {
            title: "AI",
            description: "This stuff is unbelievable. I have no idea where we're headed, I'm just along for the ride.",
            icon: <Cpu size={24} />,
        },
        {
            title: "Minimalism",
            description: "Trying to stop being a mindless consoomer in all ways. De-clutter and feel better.",
            icon: <Wind size={24} />,
        },
        {
            title: "Doing things",
            description: "You can literally just do things. Given enough time and effort you can do literally anything.",
            icon: <Zap size={24} />,
        },
        {
            title: "Being Really Good At Something",
            description: "It's really cool and feels so good. Currently trying for guitar.",
            icon: <Music size={24} />,
        },
    ];

    return (
        <div className="container mx-auto px-6 py-20 max-w-4xl">
            <section className="mb-24">
                <h1 className="text-5xl font-bold mb-8 text-gradient">About</h1>
                <div className="prose prose-invert prose-lg max-w-none text-muted leading-relaxed space-y-6">
                    <p>
                        Come with me on a journey as I vibe code my way to greatness. Greatness here meaning something along the lines of eventually creating something useful that people or business will pay me for so that I can quit my traditional 9-5 job. You don’t need my life story, people already share too much about themselves.
                    </p>
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-12 flex items-center gap-3">
                    <span className="h-[1px] w-8 bg-primary"></span>
                    Interests
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {interests.map((interest, index) => (
                        <div key={index} className="glass p-8 rounded-3xl group hover:border-primary/30 transition-all">
                            <div className="text-primary mb-4 group-hover:scale-110 transition-transform origin-left">
                                {interest.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-white">{interest.title}</h3>
                            <p className="text-muted leading-relaxed">
                                {interest.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
