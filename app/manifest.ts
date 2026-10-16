import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Eryze Studio",
    short_name: "Eryze",
    description:
      "Digital systems designed for clarity and built for growth.",
    start_url: "/",
    display: "standalone",
    background_color: "#0b0a15",
    theme_color: "#0b0a15",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/horizon-icon-512.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/horizon-apple-touch-180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
