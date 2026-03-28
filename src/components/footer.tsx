import { Zap } from 'lucide-react';
import Link from 'next/link';

export function Footer() {
    return (
        <footer className="bg-[#050505] border-t border-slate-900 text-slate-500 py-16 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12 relative z-10">
                <div className="md:col-span-2 flex flex-col items-start text-left">
                    <div className="flex items-center space-x-2 text-white font-semibold text-xl mb-4">
                        <div className="w-8 h-8 rounded bg-white flex items-center justify-center">
                            <Zap className="w-5 h-5 text-black" />
                        </div>
                        <span>noops.work</span>
                    </div>
                    <p className="max-w-md mb-6 leading-relaxed">
                        A place where I share my journey of building with AI, exploring minimalist design, and shipping things as fast as I can.
                    </p>
                    <div className="text-xs tracking-widest font-medium border border-slate-800 bg-[#0a0a0a] inline-block px-4 py-1.5 rounded-full text-slate-300">
                        Built with AI
                    </div>
                </div>

                <div>
                    <h4 className="text-slate-300 font-medium mb-4 uppercase tracking-wider text-sm">Exploration</h4>
                    <ul className="space-y-3">
                        <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
                        <li><Link href="/projects" className="hover:text-white transition-colors">Projects</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="text-slate-300 font-medium mb-4 uppercase tracking-wider text-sm">Company</h4>
                    <ul className="space-y-3">
                        <li><Link href="/about" className="hover:text-white transition-colors">About Me</Link></li>
                        <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a></li>
                        <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-900 flex justify-between items-center text-sm">
                <p>&copy; {new Date().getFullYear()} noops.work. All rights reserved.</p>
                <p>Designed and built locally.</p>
            </div>
        </footer>
    );
}
