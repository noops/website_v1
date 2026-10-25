'use client';

import { useSyncExternalStore } from 'react';
import { ArrowUp } from 'lucide-react';

const TIME_ZONE = 'America/Chicago';
const CLOCK_TICK_MS = 30_000;

function formatAustinTime() {
    return new Date().toLocaleTimeString('en-US', {
        timeZone: TIME_ZONE,
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZoneName: 'short',
    });
}

function subscribeToClock(onTick: () => void) {
    const id = setInterval(onTick, CLOCK_TICK_MS);
    return () => clearInterval(id);
}

export function Footer() {
    // Server snapshot is null so the prerendered HTML never bakes in a stale build-time clock.
    const time = useSyncExternalStore(subscribeToClock, formatAustinTime, () => null);

    return (
        <footer className="border-t border-border">
            <div className="max-w-2xl mx-auto px-5 h-12 flex items-center justify-between text-xs text-muted-foreground">
                <span>{time ? `${time} · austin, tx` : 'austin, tx'}</span>
                <button
                    type="button"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="flex items-center gap-1 hover:text-foreground transition-colors"
                >
                    top <ArrowUp size={12} />
                </button>
            </div>
        </footer>
    );
}
