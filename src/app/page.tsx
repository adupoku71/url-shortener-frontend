import Shortener from "@/components/Shortener";

export default function HomePage() {
  return (
    <main className="container mx-auto px-4 py-10 flex-1">
      <div className="text-center mb-11">
        <h2 className="font-bold text-gray-900 mb-6 text-3xl sm:text-4xl dark:text-white">
          Shorten Your Links the Smart Way
        </h2>
        <p className="text-gray-600 md:text-xl max-w-2xl mx-auto text-base sm:text-lg dark:text-white">
          Create simple, trackable, and reliable short links with ease.
        </p>
      </div>
      <Shortener />
    </main>
  );
}
