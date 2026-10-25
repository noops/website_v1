import Link from 'next/link';

const NAV_LINKS = [
    { href: '/projects', label: 'projects' },
    { href: '/blog', label: 'blog' },
    { href: '/about', label: 'about' },
];

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
            <nav className="max-w-2xl mx-auto px-5 h-10 flex items-center justify-between text-xs">
                <Link href="/" className="font-bold text-green hover:text-yellow transition-colors">
                    noops
                </Link>
                <div className="flex items-center gap-5">
                    {NAV_LINKS.map(({ href, label }) => (
                        <Link
                            key={href}
                            href={href}
                            className="text-muted-foreground hover:text-foreground transition-colors"
                        >
                            {label}
                        </Link>
                    ))}
                </div>
            </nav>
        </header>
    );
}
