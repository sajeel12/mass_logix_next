import Image from "next/image";
import { Mail, Phone, Calendar, Linkedin, Instagram } from "lucide-react";
import { navLinks, services, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="brand-surface relative border-t">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* brand */}
          <div className="flex flex-col gap-5">
            <Image
              src="/images/main.png"
              alt={site.name}
              width={518}
              height={597}
              className="h-14 w-auto self-start"
              sizes="56px"
            />
            <p className="max-w-xs text-sm leading-relaxed text-fg-dim">
              Building exceptional technology for scalable, future-ready ideas.
              Let&apos;s code the future together.
            </p>
            <div className="flex gap-3">
              <SocialIcon href={site.socials.linkedin} label="LinkedIn">
                <Linkedin className="h-4.5 w-4.5" />
              </SocialIcon>
              <SocialIcon href={site.socials.instagram} label="Instagram">
                <Instagram className="h-4.5 w-4.5" />
              </SocialIcon>
            </div>
          </div>

          {/* nav + services */}
          <div className="grid grid-cols-2 gap-8">
            <FooterCol title="Company" links={navLinks.map((l) => l)} />
            <FooterCol
              title="Services"
              links={[
                { label: "FBR e-Invoicing", href: "#fbr-iris" },
                ...services.map((s) => ({ label: s.title, href: "#services" })),
              ]}
            />
          </div>

          {/* contact */}
          <div className="flex flex-col gap-4">
            <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
              Contact
            </h4>
            <ul className="flex flex-col gap-3 text-sm">
              <ContactLink icon={<Mail className="h-4 w-4" />} href={`mailto:${site.email}`}>
                {site.email}
              </ContactLink>
              <ContactLink icon={<Phone className="h-4 w-4" />} href={`tel:${site.phoneHref}`}>
                {site.phone}
              </ContactLink>
              <ContactLink
                icon={<Calendar className="h-4 w-4" />}
                href={site.calendly}
                external
              >
                Schedule a meeting
              </ContactLink>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 text-sm text-fg-muted sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs">Global operations · Remote-first</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-fg-muted">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5 text-sm">
        {links.map((l, i) => (
          <li key={`${l.href}-${i}`}>
            <a
              href={l.href}
              className="text-fg-dim transition-colors hover:text-lime"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ContactLink({
  icon,
  href,
  external,
  children,
}: {
  icon: React.ReactNode;
  href: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        className="group inline-flex items-center gap-3 text-fg-dim transition-colors hover:text-fg"
      >
        <span className="text-lime">{icon}</span>
        {children}
      </a>
    </li>
  );
}

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line-strong text-fg-dim transition-all hover:border-lime/50 hover:text-lime"
    >
      {children}
    </a>
  );
}
