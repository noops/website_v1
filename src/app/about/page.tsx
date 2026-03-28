import { Cpu, Wind, Zap, Music } from "lucide-react";

export default function AboutPage() {
    const interests = [
        {
            title: "Just Do Things",
            description: "You can literally just do things. With the tools and knowledge available today there's nothing holding you back.",
            icon: <Cpu size={24} />,
        },
        {
            title: "Simple Design",
            description: "I'm a big fan of minimalism. I think digital tools should be clean, focused, and easy on the eyes.",
            icon: <Wind size={24} />,
        },
        {
            title: "Building Fast",
            description: "There's nothing quite like the feeling of turning an idea into a working app in just a few hours.",
            icon: <Zap size={24} />,
        },
        {
            title: "Staying Curious",
            description: "I'm constantly learning. Whether it's a new model or a better way to code, I'm always looking for what's next.",
            icon: <Music size={24} />,
        },
    ];

    return (
        <div className="container mx-auto px-6 py-20 max-w-4xl">
            <section className="mb-24">
                <h1 className="text-5xl font-bold mb-8 text-foreground">About</h1>
                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6 text-xl font-light">
                    <p>
                        Data scientist exploring AI and using agents. Trying to leverage my professional experience to make AI more accessible and build cool things.
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
                        <div key={index} className="bg-card border border-border p-8 rounded-3xl group hover:border-border/80 transition-all">
                            <div className="text-primary mb-4 group-hover:scale-110 transition-transform origin-left">
                                {interest.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-3 text-foreground">{interest.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {interest.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}
