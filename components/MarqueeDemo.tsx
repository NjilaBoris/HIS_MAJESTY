import { cn } from "@/lib/utils";

import { Marquee } from "./ui/marquee";
import Copy from "./Copy/Copy";

const reviews = [
  {
    body: "Humanitarian Hero Award (2025) – World Humanitarian Day recognition for exceptional service to communities and humanitarian initiatives.",
  },
  {
    body: "Africa Legacy Award (2025) – Honoring outstanding contributions to African leadership, development, and community empowerment.",
  },
  {
    body: "U.S. Department of State Award (2016) – Recognition for achievements in traditional leadership and environmental advocacy.",
  },
  {
    body: "Peter Agbor Tabi Award (2010) – Outstanding contributions to community development.",
  },
  {
    body: "Bank of Credit and Commerce Cameroon Best Manager Award (1988) – Excellence in banking management and leadership.",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({ body }: { body: string }) => {
  return (
    <figure
      className={cn(
        "relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-row items-center gap-2"></div>
      <blockquote className="mt-2 text-xs">{body}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <section
      id="honor"
      className="relative lg:pt-18 mt-130 md:mt-80 lg:mt-0 flex w-full flex-col items-center justify-center overflow-hidden"
    >
      <Copy>
        <h2 className="text-[#13413c] lg:text-4xl! mb-5">
          Honors & Recognition
        </h2>
      </Copy>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.body} {...review} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </section>
  );
}
