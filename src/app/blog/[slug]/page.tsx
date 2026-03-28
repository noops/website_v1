import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";

const posts = {
    "first-post": {
        title: "My First Blog Post",
        date: "February 14, 2026",
        content: (
            <>
                <p>This is the content of my very first blog post. I'm excited to share my thoughts and projects here.</p>
                <p>Stay tuned for more updates!</p>
                <h3 className="text-2xl font-bold mt-8 mb-4 text-white">A Subheading Example</h3>
                <p>Here's some more content under a subheading.</p>
            </>
        ),
    },
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts[slug as keyof typeof posts];

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-6 py-20 max-w-2xl">
            <Link href="/blog">
                <Button variant="ghost" className="gap-2 text-muted-foreground hover:text-primary mb-12 -ml-3">
                    <ArrowLeft size={16} /> Back to Blog
                </Button>
            </Link>

            <article>
                <header className="mb-12">
                    <span className="text-sm text-muted-foreground mb-4 block">{post.date}</span>
                    <h1 className="text-5xl font-bold text-foreground mb-8 leading-tight">
                        {post.title}
                    </h1>
                </header>

                <div className="prose prose-invert prose-lg max-w-none text-muted-foreground leading-relaxed space-y-6">
                    {post.content}
                </div>
            </article>
        </div>
    );
}
