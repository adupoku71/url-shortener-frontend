import Features from "@/components/Features";
import QuickAccessLinks from "@/components/QuickAccessLinks";
import ShortenForm from "@/components/ShortenForm";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4  py-10">
      <div className="text-center mb-11">
        <h2 className="md:text-5xl font-bold text-gray-900 mb-6 text-3xl sm:text-2xl">
          Shorten. Share. Track.
        </h2>
        <p className="text-gray-600 md:text-xl max-w-2xl mx-auto text-base sm:text-lg">
          Transform long URLs into short, shareable links and get detailed
          analytics on every click
        </p>
      </div>
      <ShortenForm />
      <QuickAccessLinks />
      <Features />
    </main>
  );
}
