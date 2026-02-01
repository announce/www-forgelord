
import { Hero } from "~/pages/(home)/components/Hero";
import type { Route } from "./+types/_index";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Forgelord" },
    { name: "description", content: "Where you prepare for League. Refine your champion pool, runes, and items." },
  ];
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <main>
      <Hero />
    </main>
  );
}
