import { JsonLd } from "@/components/seo/json-ld";
import { PageHero } from "@/components/site/page-hero";
import { siteConfig } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";
import {
  getBreadcrumbStructuredData,
  getContactPointStructuredData,
  getPageStructuredData,
} from "@/lib/structured-data";

const contactDescription =
  "For projects, collaborations, or simply to say hello, email Anastasia at Eryze Studio.";

export const metadata = createPageMetadata({
  title: "Contact",
  description: contactDescription,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          getPageStructuredData({
            title: "Contact",
            description: contactDescription,
            path: "/contact",
            pageType: "ContactPage",
          }),
          getBreadcrumbStructuredData([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
          getContactPointStructuredData(),
        ]}
      />

      <PageHero
        description="For projects, collaborations, or simply to say hello."
        eyebrow="Contact"
        title="Let’s talk."
      >
        <div className="w-full py-2">
          <p className="eryze-kicker">Email</p>
          <a
            className="group mt-5 flex min-w-0 items-end justify-between gap-4 border-b border-border pb-5 font-serif text-[clamp(1.2rem,2.15vw,2rem)] leading-none tracking-[-0.04em] text-foreground transition-colors hover:border-brand-accent hover:text-brand-accent"
            href={`mailto:${siteConfig.email}`}
          >
            <span className="whitespace-nowrap">{siteConfig.email}</span>
            <span
              aria-hidden
              className="shrink-0 text-xl transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            >
              ↗
            </span>
          </a>
        </div>
      </PageHero>
    </>
  );
}
