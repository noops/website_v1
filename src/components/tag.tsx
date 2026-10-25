const TAG_COLORS = ['text-aqua', 'text-green', 'text-yellow', 'text-orange', 'text-purple', 'text-red'];

export function Tag({ label, index = 0 }: { label: string; index?: number }) {
    const color = TAG_COLORS[index % TAG_COLORS.length];
    return (
        <span className={`inline-block border border-border px-1.5 py-0.5 text-[11px] leading-none ${color}`}>
            {label}
        </span>
    );
}
