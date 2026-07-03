import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

type Variant = "primary" | "ghost";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  showArrow?: boolean;
  className?: string;
};

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium tracking-tight transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-lime focus-visible:ring-offset-2 focus-visible:ring-offset-ink";

const variants: Record<Variant, string> = {
  primary:
    "bg-lime text-black shadow-[0_0_0_0_rgba(219,255,0,0.5)] hover:shadow-[0_0_30px_-4px_rgba(219,255,0,0.7)] hover:-translate-y-0.5",
  ghost:
    "border border-line-strong bg-surface/40 text-fg hover:border-lime/50 hover:bg-surface hover:-translate-y-0.5",
};

export default function Button({
  href,
  children,
  variant = "primary",
  external,
  showArrow = true,
  className = "",
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;
  const inner = (
    <>
      {children}
      {showArrow && (
        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </>
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {inner}
    </Link>
  );
}
