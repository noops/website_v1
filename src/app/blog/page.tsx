import Link from "next/link";

const posts = [
    {
        slug: "first-post",
        title: "My First Blog Post",
        date: "February 14, 2026",
        excerpt: "This is the content of my very first blog post. I'm excited to share my thoughts and projects here.",
    },
];

export default function BlogPage() {
    return (
        <div className="container mx-auto px-6 py-20 max-w-4xl">
            <h1 className="text-5xl font-bold mb-12 text-foreground">Blog</h1>

            <div className="space-y-16">
                {posts.map((post) => (
                    <article key={post.slug} className="group bg-card border border-border p-8 rounded-3xl hover:border-border/80 transition-all hover:shadow-2xl hover:shadow-primary/5">
                        <Link href={`/blog/${post.slug}`}>
                            <span className="text-sm text-muted-foreground mb-3 block">{post.date}</span>
                            <h2 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
                            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                                {post.excerpt}
                            </p>
                            <span className="text-primary font-medium flex items-center gap-2 group/link">
                                Read more <span className="group-hover/link:translate-x-1 transition-transform">→</span>
                            </span>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
}
