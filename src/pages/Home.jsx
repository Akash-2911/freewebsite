import sites from "../data/sites.json";
import WebsiteCard from "../components/WebsiteCard";

export default function Home() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Website Directory</h1>
      <p className="mt-2 text-gray-600">
        Browse free and free-tier websites.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {sites.map((site) => (
          <WebsiteCard key={site.name} site={site} />
        ))}
      </div>
    </div>
  );
}
