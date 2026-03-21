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
  title: "Founder-led product and platform studio",
  description:
    "Eryze Studio builds modern websites, digital products, internal systems, and automation-aware platforms with clean architecture and strong positioning.",
  path: "/",
});

export default function HomePage() {
  return (
    <div className="relative isolate overflow-hidden">
      <HomepageAmbient />
      <HomeHero />

      <PositioningStrip
        description="The studio combines product thinking, design, and development to deliver clear digital experiences and the systems behind them."
        title="Eryze builds websites, digital products, and internal tools with a focus on clarity, structure, and delivery."
      />

      <ServiceSequence services={homeServices} />

      <FeaturedProjectSequence projects={featuredProjects} />

      <ProcessTimeline steps={processSteps} />

      <FinalCTAScene />
    </div>
  );
}
