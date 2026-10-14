import { createFileRoute } from "@tanstack/react-router";
import {
  DatabaseCollectionGrid,
  EditorialSlideshow,
  type EditorialSlide,
} from "@/components/storefront";
import accSlideshow1 from "@/assets/acc_slideshow1.png";
import accSlideshow2 from "@/assets/acc_slideshow2.png";
import accSlideshow3 from "@/assets/acc_slideshow3.png";
import accSlideshow4 from "@/assets/acc_slideshow4.png";

const slides: EditorialSlide[] = [
  {
    eyebrow: "Autumn / Winter 2026",
    title: "Accessories",
    copy: "The finishing gesture. Silk, leather and cashmere, made slowly by Italian hands.",
    image: accSlideshow1,
    alt: "CIAO D MILANO accessories and atelier objects",
  },
  {
    eyebrow: "Objects of Permanence",
    title: "Made by Hand",
    copy: "Small pieces, exacting standards — edge-painted, hand-rolled and built to be kept.",
    image: accSlideshow2,
    alt: "Italian craftsmanship in a Milan atelier",
  },
  {
    eyebrow: "The Detail",
    title: "Quiet Signatures",
    copy: "Considered leather, printed silk and pure cashmere that complete every silhouette.",
    image: accSlideshow3,
    alt: "Editorial portrait with luxury Italian accessories",
  },
  {
    eyebrow: "The Finishing Gesture",
    title: "Made to Be Kept",
    copy: "A thoughtful collection of enduring accents, shaped by Italian hands.",
    image: accSlideshow4,
    alt: "Hand-finished Italian accessories from CIAO D MILANO",
  },
];

export const Route = createFileRoute("/accessories")({
  validateSearch: (search: Record<string, unknown>): { category?: string } =>
    typeof search["category"] === "string" ? { category: search["category"] } : {},
  head: () => ({
    meta: [
      { title: "Accessories — CIAO D MILANO" },
      {
        name: "description",
        content: "Italian silk, leather and cashmere accessories, finished by hand.",
      },
      { property: "og:title", content: "Accessories — CIAO D MILANO" },
      {
        property: "og:description",
        content: "Discover hand-finished Italian accessories from the CIAO D MILANO atelier.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <EditorialSlideshow label="Accessories highlights" slides={slides} />
      <DatabaseCollectionGrid line="accessories" fittingRoom />
    </>
  ),
});
