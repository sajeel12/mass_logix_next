import type { Metadata, Viewport } from "next";
import { Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const titleDefault = `${site.name} — AI Software Development & FBR e-Invoicing`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: titleDefault,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "AI software development",
    "AI chatbot development",
    "AI automation agency",
    "AI voice agents",
    "custom AI solutions",
    "software development agency",
    "software house Pakistan",
    "FBR IRIS e-invoicing",
    "FBR digital invoicing integration",
    "web app development",
    "mobile app development",
    "MassLogix",
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: site.url,
    title: titleDefault,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
    // images resolved automatically from the opengraph-image route
  },
  twitter: {
    card: "summary_large_image",
    title: titleDefault,
    description: site.description,
    creator: "@masslogix",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05060a" },
  ],
  width: "device-width",
  initialScale: 1,
};

// Runs before paint to set the saved theme (default light) and avoid a flash.
const themeInit = `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'){document.documentElement.classList.add('dark');document.documentElement.style.colorScheme='dark';}else{document.documentElement.style.colorScheme='light';}}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const orgId = `${site.url}/#organization`;
  const siteId = `${site.url}/#website`;

  // Structured data. The Organization `logo` is what Google uses to show a
  // logo alongside the site name in search results / knowledge panel.
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": orgId,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        email: site.email,
        description: site.description,
        logo: {
          "@type": "ImageObject",
          "@id": `${site.url}/#logo`,
          url: `${site.url}${site.logo}`,
          contentUrl: `${site.url}${site.logo}`,
          width: 518,
          height: 597,
          caption: site.name,
        },
        image: { "@id": `${site.url}/#logo` },
        sameAs: [site.socials.linkedin, site.socials.instagram],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "sales",
          email: site.email,
          telephone: site.phone,
          availableLanguage: ["en", "ur"],
        },
      },
      {
        "@type": "WebSite",
        "@id": siteId,
        url: site.url,
        name: site.name,
        description: site.description,
        publisher: { "@id": orgId },
        inLanguage: "en",
      },
      {
        "@type": "ProfessionalService",
        "@id": `${site.url}/#service`,
        name: site.name,
        image: { "@id": `${site.url}/#logo` },
        url: site.url,
        parentOrganization: { "@id": orgId },
        description:
          "Custom software, web & mobile apps, AI/ML, cloud, and FBR IRIS e-invoicing.",
        areaServed: ["PK", "Worldwide"],
        serviceType: [
          "Custom Software Development",
          "Web Application Development",
          "Mobile App Development",
          "AI/ML Development",
          "Cloud & DevOps",
          "FBR IRIS e-Invoicing Integration",
        ],
      },
    ],
  };

  return (
    <html
      lang="en"
      className={`${sans.variable} ${mono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
