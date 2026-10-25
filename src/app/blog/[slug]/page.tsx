import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost } from "@/lib/posts";

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = getPost(slug);

    if (!post) {
        notFound();
    }

    return (
        <article className="space-y-10">
            <Link href="/blog" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
                ← cd ..
            </Link>

            <header className="space-y-2">
                <p className="text-xs text-muted-foreground">{post.date.toLowerCase()}</p>
                <h1 className="text-3xl font-bold text-yellow">{post.title}</h1>
            </header>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
                {post.body.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                ))}
            </div>
        </article>
    );
}
