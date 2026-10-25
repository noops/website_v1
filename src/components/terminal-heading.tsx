import type { ReactNode } from 'react';

export function TerminalHeading({ command, children }: { command: string; children?: ReactNode }) {
    return (
        <div className="flex items-center justify-between mb-5 text-xs">
            <h2 className="text-muted-foreground">
                <span className="text-green">$</span> {command}
            </h2>
            {children}
        </div>
    );
}
