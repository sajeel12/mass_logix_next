import Image from "next/image";
import { site } from "@/lib/site";

/**
 * Brand lockup: the lime monogram (`main.png`) + "MassLogix" text rendered
 * in HTML so the text color follows the theme (the baked-in text of
 * `masslogixfull.png` is white and would vanish on the light theme).
 */
export default function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <Image
        src="/images/main.png"
        alt=""
        width={518}
        height={597}
        priority
        aria-hidden
        className="h-full w-auto"
      />
      <span className="text-lg font-semibold tracking-tight text-fg">
        Mass<span className="text-lime-soft">Logix</span>
      </span>
      <span className="sr-only">{site.name}</span>
    </span>
  );
}
