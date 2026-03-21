import type { ComponentProps } from "react";

import { Section } from "@/components/site/section";

type SectionWrapperProps = ComponentProps<typeof Section>;

export function SectionWrapper(props: SectionWrapperProps) {
  return <Section {...props} />;
}
