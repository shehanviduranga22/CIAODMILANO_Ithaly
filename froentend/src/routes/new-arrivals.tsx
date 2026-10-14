import { createFileRoute } from "@tanstack/react-router";
import {
  DatabaseSelectionGrid,
  EditorialSlideshow,
  type EditorialSlide,
} from "@/components/storefront";
import arrivelSlideshow1 from "@/assets/arrivel_slideshow1.png";
import arrivelSlideshow2 from "@/assets/arrivel_slideshow2.png";
import arrivelSlideshow3 from "@/assets/arrivel_slideshow3.png";
import arrivelSlideshow4 from "@/assets/arrivel_slideshow4.png";

const newArrivalCollections = [
  { line: "men", limit: 5 },
  { line: "women", limit: 5 },
  { line: "accessories", limit: 5 },
] as const;

const slides: EditorialSlide[] = [
  {
    eyebrow: "The Latest",
    title: "New Arrivals",
    copy: "A considered edit of new season tailoring, silk, cashmere and leather.",
    image: arrivelSlideshow1,
    alt: "The latest CIAO D MILANO collection in Milan",
  },
  {
    eyebrow: "New Season",
    title: "Quiet Statements",
    copy: "Restrained silhouettes in tactile cloth, chosen to be worn far beyond one season.",
    image: arrivelSlideshow2,
    alt: "New season Italian womenswear campaign",
  },
  {
    eyebrow: "Just Arrived",
    title: "The New Classics",
    copy: "Purposeful pieces refined through proportion, material and subtle detail.",
    image: arrivelSlideshow3,
    alt: "New season Italian menswear campaign",
  },
  {
    eyebrow: "The Latest",
    title: "Fresh Perspectives",
    copy: "New expressions of considered design, exceptional material and Milanese restraint.",
    image: arrivelSlideshow4,
    alt: "New arrivals from the CIAO D MILANO collection",
  },
];

export const Route = createFileRoute("/new-arrivals")({
  head: () => ({
    meta: [
      { title: "New Arrivals — CIAO D MILANO" },
      { name: "description", content: "The latest expressions from the CIAO D MILANO atelier." },
      { property: "og:title", content: "New Arrivals — CIAO D MILANO" },
      { property: "og:description", content: "Shop the newest Italian luxury fashion arrivals." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <EditorialSlideshow label="New arrival highlights" slides={slides} />
      <DatabaseSelectionGrid collections={newArrivalCollections} fittingRoom showFilters />
    </>
  ),
});
