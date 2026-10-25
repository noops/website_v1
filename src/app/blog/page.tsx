import Link from "next/link";
import { TerminalHeading } from "@/components/terminal-heading";
import { posts } from "@/lib/posts";

export default function BlogPage() {
    return (
        <div>
            <TerminalHeading command="ls blog/" />
            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.slug}>
                        <Link href={`/blog/${post.slug}`} className="group block">
                            <p className="text-xs text-muted-foreground mb-1">{post.date.toLowerCase()}</p>
                            <h2 className="font-bold text-yellow group-hover:text-green transition-colors mb-1">{post.title}</h2>
                            <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
