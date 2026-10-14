import { createFileRoute } from "@tanstack/react-router";
import {
  DatabaseCollectionGrid,
  EditorialSlideshow,
  type EditorialSlide,
} from "@/components/storefront";
import menSlideshow1 from "@/assets/men_slideshow1.png";
import menSlideshow2 from "@/assets/men_slideshow2.png";
import menSlideshow3 from "@/assets/men_slideshow3.png";
import menSlideshow4 from "@/assets/men_slideshow4.png";

const slides: EditorialSlide[] = [
  {
    eyebrow: "Autumn / Winter 2026",
    title: "Men",
    copy: "Precision in every line. Modern tailoring, fine knitwear and enduring leather goods.",
    image: menSlideshow1,
    alt: "CIAO D MILANO menswear tailoring campaign",
  },
  {
    eyebrow: "The Milanese Cut",
    title: "Modern Tailoring",
    copy: "A study in structure, movement and the quiet confidence of impeccable cloth.",
    image: menSlideshow2,
    alt: "Italian tailoring in a Milan setting",
  },
  {
    eyebrow: "Made to Endure",
    title: "Finishing Touches",
    copy: "Considered leather, polished details and objects shaped for a lifetime.",
    image: menSlideshow3,
    alt: "Italian leather accessories and atelier objects",
  },
  {
    eyebrow: "The Modern Wardrobe",
    title: "Built to Last",
    copy: "Refined essentials, shaped by Italian craft and designed for everyday distinction.",
    image: menSlideshow4,
    alt: "Italian menswear from the CIAO D MILANO collection",
  },
];

export const Route = createFileRoute("/men")({
  validateSearch: (search: Record<string, unknown>): { category?: string } =>
    typeof search["category"] === "string" ? { category: search["category"] } : {},
  head: () => ({
    meta: [
      { title: "Men — CIAO D MILANO" },
      {
        name: "description",
        content: "Italian menswear defined by precise tailoring and quiet confidence.",
      },
      { property: "og:title", content: "Men — CIAO D MILANO" },
      { property: "og:description", content: "Discover refined Italian menswear and accessories." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <EditorialSlideshow label="Men's collection highlights" slides={slides} />
      <DatabaseCollectionGrid line="men" fittingRoom />
    </>
  ),
});
