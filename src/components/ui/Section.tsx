import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    id?: string;
    className?: string;
    hasGrid?: boolean;
}

export function Section({ children, className, id, hasGrid = false, ...props }: SectionProps) {
    return (
        <section
            id={id}
            className={cn(
                "py-20 md:py-32 relative overflow-hidden",
                hasGrid && "bg-grid-white",
                className
            )}
            {...props}
        >
            {hasGrid && (
                <div className="absolute inset-0 bg-linear-to-b from-teal-900 via-transparent to-teal-900 pointer-events-none" />
            )}
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}
