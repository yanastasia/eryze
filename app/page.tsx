import Link from "next/link";

import { JsonLd } from "@/components/seo/json-ld";
import { Container } from "@/components/site/container";
import { MotionReveal } from "@/components/site/motion-reveal";
import { ProjectGrid } from "@/components/site/project-grid";
import { featuredProjects } from "@/data/projects";
import { createPageMetadata } from "@/lib/metadata";
import { getBreadcrumbStructuredData, getPageStructuredData, getStudioServiceStructuredData } from "@/lib/structured-data";

export const metadata = createPageMetadata({
  title: "Ideas, in a different light",
  description: "Eryze is an independent product and engineering studio. We make complex ideas work beautifully.",
  path: "/",
});

const disciplines = [
  { title: "Discover", description: "Find the right problem." },
  { title: "Design", description: "Give the solution form." },
  { title: "Engineer", description: "Make it work in the real world." },
] as const;

export default function HomePage() {
  const selectedProjects = featuredProjects.slice(0, 3);

  return (
    <>
      <JsonLd data={[
        getPageStructuredData({
          title: "Ideas, in a different light",
          description: "Eryze is an independent product and engineering studio. We make complex ideas work beautifully.",
          path: "/",
        }),
        getBreadcrumbStructuredData([{ name: "Home", path: "/" }]),
        getStudioServiceStructuredData(),
      ]} />

      <section className="relative isolate flex min-h-[min(53rem,100svh)] items-center overflow-hidden bg-[#efecf2] pb-16 pt-32 text-[#0b0a15] sm:pt-40">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(58%_70%_at_88%_28%,rgba(157,91,255,0.16),transparent_72%),linear-gradient(145deg,#f3f1fc,#e6e0ec)]" />
        <Container className="relative z-10 w-full">
          <div className="max-w-[38rem] lg:ml-[6vw]">
            <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">Independent product &amp; engineering studio</p>
            <h1 className="mt-7 text-balance font-sans text-[clamp(3rem,4.8vw,4.9rem)] font-normal leading-[1.01] tracking-[-0.06em]">
              Ideas, in a<br /><em className="font-display font-normal tracking-[-0.03em]">different light.</em>
            </h1>
            <p className="mt-6 max-w-[19rem] font-serif text-[clamp(1.15rem,1.7vw,1.4rem)] leading-[1.45] text-[#5c5665] sm:max-w-md">
              We design and build digital products, platforms, and systems that move ideas forward.
            </p>
            <Link className="group mt-8 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em]" href="#work">
              <span className="grid size-12 place-items-center rounded-full bg-[#0b0a15] text-xl text-white transition-transform group-hover:translate-x-1">↗</span>
              Explore our work
            </Link>
          </div>
        </Container>
        <p className="absolute bottom-8 right-6 z-10 hidden items-center gap-4 text-[0.62rem] uppercase tracking-[0.16em] sm:flex sm:right-12 lg:right-[6vw] before:h-px before:w-10 before:bg-current">Scroll to explore</p>
      </section>

      <section className="relative isolate flex min-h-[34rem] items-center overflow-hidden bg-[#0b0a15] py-24 text-[#f3f1fc] sm:py-32">
        <div aria-hidden className="absolute inset-0 -z-10 bg-[radial-gradient(55%_85%_at_78%_100%,rgba(123,47,247,0.22),transparent_72%)]" />
        <Container className="relative z-10 w-full">
          <MotionReveal>
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-[12%]">
              <h2 className="max-w-lg font-serif text-[clamp(2.35rem,3.4vw,3.8rem)] font-normal leading-[1.12] tracking-[-0.025em]">
                A shift in perspective changes <em className="font-display text-[#cfabea]">what&apos;s possible.</em>
              </h2>
              <p className="max-w-sm font-serif text-[clamp(1.2rem,1.8vw,1.5rem)] leading-[1.55] text-[#ccc5d5] lg:justify-self-end">
                We bring new thinking and technical precision to the things worth building.
              </p>
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="bg-[#f3f1fc] py-24 text-[#0b0a15] sm:py-32" id="work">
        <Container>
          <MotionReveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">Selected work</p>
                <h2 className="mt-3 font-display text-[clamp(2.8rem,4vw,4.2rem)] font-normal leading-none tracking-[-0.025em]">Made <em className="text-[#8a50d2]">real.</em></h2>
              </div>
              <p className="hidden text-xs text-[#71697b] sm:block">A few things we&apos;ve built</p>
            </div>
            <ProjectGrid projects={selectedProjects} />
          </MotionReveal>
        </Container>
      </section>

      <section className="bg-[linear-gradient(148deg,#d7d0f0,#e2dcf2_58%,#d7d0f0)] py-24 text-[#0b0a15] sm:py-32" id="approach">
        <Container>
          <MotionReveal>
            <div className="grid gap-8 lg:grid-cols-2 lg:gap-[9%]">
              <div>
                <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em]">What we do</p>
                <h2 className="mt-4 max-w-xl font-display text-[clamp(2.7rem,4vw,4.25rem)] font-normal leading-[0.96] tracking-[-0.025em]">
                  Thoughtful by design.<br /><em className="text-[#8a50d2]">Built to last.</em>
                </h2>
              </div>
              <p className="max-w-lg font-serif text-[clamp(1.35rem,2.2vw,1.8rem)] leading-[1.38] text-[#433b52] lg:pt-8">
                From a first idea to the systems behind it, we bring the right pieces together.
              </p>
            </div>

            <div className="mt-16 grid border-t border-[#0b0a15]/25 sm:grid-cols-3 lg:mt-24">
              {disciplines.map((discipline) => (
                <article className="border-b border-[#0b0a15]/15 py-6 sm:border-b-0 sm:border-r sm:px-8 sm:first:pl-0 sm:last:border-r-0" key={discipline.title}>
                  <h3 className="text-sm font-medium">{discipline.title}</h3>
                  <p className="mt-2 font-serif text-lg text-[#51495e]">{discipline.description}</p>
                </article>
              ))}
            </div>
          </MotionReveal>
        </Container>
      </section>

      <section className="relative overflow-hidden bg-[#0b0a15] py-28 text-[#f3f1fc] sm:py-36" id="contact">
        <Container>
          <p className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#9d5bff]">Have something in mind?</p>
          <h2 className="mt-6 max-w-[12ch] font-display text-[clamp(3.2rem,6vw,5.8rem)] font-normal leading-[0.92] tracking-[-0.035em]">Let&apos;s make <em className="text-[#c690ef]">something matter.</em></h2>
          <Link className="group mt-10 inline-flex items-center gap-4 text-xs font-medium uppercase tracking-[0.14em]" href="/contact">
            <span className="grid size-12 place-items-center rounded-full bg-[#f3f1fc] text-xl text-[#0b0a15] transition-transform group-hover:translate-x-1">↗</span>
            Start a conversation
          </Link>
        </Container>
      </section>
    </>
  );
}
