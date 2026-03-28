'use client';

import * as React from 'react';
import Link from 'next/link';
import { Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navbar() {
    return (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-3xl px-6">
            <header className="flex justify-between items-center px-4 py-3 bg-[#050505]/80 backdrop-blur-xl rounded-full ring-1 ring-slate-800 shadow-[0_8px_30px_rgb(0,0,0,0.8)]">
                
                <Link href="/" className="flex items-center pl-2 space-x-3 group">
                    <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:bg-white transition-colors duration-500">
                        <Zap className="w-4 h-4 text-white group-hover:text-black transition-colors duration-500" />
                    </div>
                </Link>

                <div className="flex items-center justify-center space-x-1">
                    <NavIconLink href="/blog" label="Blog" icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-white transition-colors">
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
                        </svg>
                    } />
                    <NavIconLink href="/about" label="About" icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-white transition-colors">
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="12" y1="16" x2="12" y2="12"></line>
                          <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                    } />
                     <NavIconLink href="/projects" label="Projects" icon={
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-slate-300 group-hover:text-white transition-colors">
                            <polyline points="16 18 22 12 16 6"></polyline>
                            <polyline points="8 6 2 12 8 18"></polyline>
                        </svg>
                    } />
                </div>

                <div className="flex items-center pr-2">
                    <Link href="/projects">
                        <Button variant="default" className="bg-white text-black hover:bg-slate-200 shadow-sm text-sm h-9 px-5 rounded-full font-medium transition-all group">
                            Explore
                        </Button>
                    </Link>
                </div>
                
            </header>
        </div>
    );
}

function NavIconLink({ href, label, icon }: { href: string; label: string; icon: React.ReactNode }) {
    return (
        <Link href={href}>
            <div className="relative group hover:cursor-pointer hover:bg-slate-800/50 p-2.5 rounded-full transition-all duration-500">
                {icon}
                <div className="absolute top-full mt-4 left-1/2 transform -translate-x-1/2 w-max px-3 py-1.5 text-xs font-semibold tracking-wide text-white bg-[#0a0a0a] rounded-lg opacity-0 scale-50 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 ring-1 ring-slate-800 shadow-2xl pointer-events-none">
                    {label}
                </div>
            </div>
        </Link>
    );
}
