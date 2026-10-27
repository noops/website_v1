export type Project = {
  slug: string;
  title: string;
  date: string;
  summary: string;
  description: string;
  body: string[];
  details: { label: string; value: string }[];
  tech: string[];
  link: string;
  github?: string;
};

export const projects: Project[] = [
  {
    slug: "burrito-burrito-burrito",
    title: "burritoburritoburrito",
    date: "May 2026",
    summary:
      "A map-based burrito finder powered by live OpenStreetMap data. The v0 of a hyper-specific social platform built entirely around burritos.",
    description: "Find the best burritos near you, anywhere in the world.",
    body: [
      "Started as a simple question: what if there was a map just for burritos? No restaurant noise, no Yelp clutter — just burritos.",
      "The app pulls live data from OpenStreetMap via the Overpass API with no API keys required. Search any city in the world, filter by style, and get directions in one tap.",
      "But this is just v0. The real goal is to build a hyper-specific social platform around burritos — check-ins, reviews, a personal burrito passport, and eventually a full social graph for people who take burritos seriously.",
    ],
    details: [
      { label: "framework", value: "React 19 + Vite" },
      { label: "map", value: "Leaflet + OpenStreetMap (no API key needed)" },
      { label: "data", value: "Overpass API + Nominatim geocoding" },
      { label: "deploy", value: "Vercel + Cloudflare" },
    ],
    tech: ["react", "leaflet", "openstreetmap", "vite", "vercel"],
    link: "https://burrito-burrito-burrito.com",
  },
  {
    slug: "slog-maxxing",
    title: "Slog Maxxing",
    date: "March 2026",
    summary:
      "A personal dashboard for tracking my day and chatting with an AI about my notes. It makes journaling actually useful.",
    description:
      "A comprehensive environment for digital journaling, time tracking, and conversational RAG workflows.",
    body: [
      "I was tired of traditional journaling—it felt like a chore. So I built Slog Maxxing to make it easier to track what I actually do all day and then talk to my notes to find things I've forgotten.",
      'I went for a hyper-minimalist design to keep things focused. The best part is the RAG integration, which lets me ask things like "when did I last work on that API?" and get a really clear answer from my own data.',
    ],
    details: [
      { label: "framework", value: "Next.js 15" },
      { label: "design", value: "Tailwind v4 (Monochrome OKLCH)" },
      { label: "features", value: "RAG Chat, Session Timers, Stream Management" },
    ],
    tech: ["next.js", "tailwind", "rag"],
    link: "https://slogmaxxing.com",
  },
  {
    slug: "shmantasy-shmootball",
    title: "Shmantasy Shmootball",
    date: "Feb 2026",
    summary:
      "A dashboard for my Sleeper dynasty league. Standings, trade history, team values, and past champions in one place.",
    description: "A home base for my dynasty fantasy football league.",
    body: [
      "My league runs on Sleeper. It's fine for setting lineups, but it's bad at answering the things we actually argue about: who won that trade, whose roster is getting old, who's won it all before.",
      "So I built a site that pulls everything from the Sleeper API. It has standings, every trade we've made, team pages with FantasyCalc trade values, weekly matchup recaps, league history back to year one, and our bylaws.",
      "It started as an afternoon test of how much Claude Code could build. It kept growing from there.",
    ],
    details: [
      { label: "framework", value: "Next.js" },
      { label: "data", value: "Sleeper API + FantasyCalc" },
      { label: "charts", value: "Recharts" },
      { label: "deploy", value: "Vercel" },
    ],
    tech: ["next.js", "sleeper api", "fantasycalc", "recharts", "vercel"],
    link: "https://shmantasyshmootball.vercel.app/",
    github: "https://github.com/noops/dynasty_site_v1",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
