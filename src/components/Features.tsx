"use client";

import { FeatureCardProps } from "@/types/types";
import FeatureCard from "./ui/FeatureCard";
const features: FeatureCardProps[] = [
  {
    path: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Lightning Fast",
    description: "Generate short links instantly with our optimized platform",
  },
  {
    path: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
    title: "Reliable",
    description: "99.9% uptime guarantee with enterprise-grade infrastructure",
  },
  {
    path: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Analytics",
    description: "Track clicks and monitor performance of your links",
  },
];

export default function Features() {
  return (
    <section className="max-w-4xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 text-center">
        {features.map((feature) => (
          <FeatureCard
            key={feature.title}
            path={feature.path}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </section>
  );
}
