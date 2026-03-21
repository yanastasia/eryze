import { HomeHero } from "@/components/site/home-hero";
import {
  FeaturedProjectSequence,
  FinalCTAScene,
  PositioningStrip,
  ProcessTimeline,
  ServiceSequence,
} from "@/components/site/home-scenes";
import { HomepageAmbient } from "@/components/site/homepage-ambient";
import { featuredProjects } from "@/data/projects";
import { homeServices, processSteps } from "@/content/site";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Development studio for websites, platforms, and internal tools",
  description:
    "Eryze Studio delivers websites, platforms, and internal tools with clear scope, structured delivery, and reliable communication from kickoff to launch.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <HomepageAmbient />
      <HomeHero />

      <PositioningStrip
        paragraphs={[
          "You bring the business context. We bring the structure, product thinking, and execution. We ask the right questions early, define scope before building starts, and keep you informed at every stage without requiring you to manage the process yourself.",
          "You always know where things stand. Decisions are explained. Timelines are real. Work ships.",
        ]}
        title="Eryze takes full ownership of the project from kickoff to launch."
      />

      <ServiceSequence services={homeServices} />

      <FeaturedProjectSequence projects={featuredProjects} />

      <ProcessTimeline steps={processSteps} />

      <FinalCTAScene />
    </div>
  );
}
