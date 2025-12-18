import { useState } from "react";
import sitesData from "../data/sites.json";
import WebsiteCard from "../components/WebsiteCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("all");

  const categories = [
    "all",
    ...new Set(sitesData.map((site) => site.category).filter(Boolean)),
  ];

  const filteredSites = sitesData.filter((site) => {
    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.description.toLowerCase().includes(search.toLowerCase());

    if (filter === "no-login" && site.loginRequired) return false;
    if (filter === "login" && !site.loginRequired) return false;
    if (filter === "free" && site.freeType !== "full") return false;
    if (filter === "tier" && site.freeType !== "tier") return false;
    if (category !== "all" && site.category !== category) return false;

    return matchesSearch;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 py-10">
      <h1 className="text-3xl font-bold">Website Directory</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search websites by name or description…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mt-6 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring"
      />

      {/* Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        <FilterButton label="All" onClick={() => setFilter("all")} />
        <FilterButton label="No Login" onClick={() => setFilter("no-login")} />
        <FilterButton label="Login Required" onClick={() => setFilter("login")} />
        <FilterButton label="Completely Free" onClick={() => setFilter("free")} />
        <FilterButton label="Free Tier" onClick={() => setFilter("tier")} />
      </div>

      {/* Category */}
      <div className="mt-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border px-3 py-2"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All categories" : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Result count */}
      <p className="mt-6 text-sm text-gray-600">
        Showing <span className="font-medium">{filteredSites.length}</span>{" "}
        website{filteredSites.length !== 1 && "s"}
      </p>

      {/* Results */}
      <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSites.length > 0 ? (
          filteredSites.map((site) => (
            <WebsiteCard key={site.name} site={site} />
          ))
        ) : (
          <div className="col-span-full rounded-lg border p-8 text-center text-gray-600">
            <p className="font-medium">No websites found</p>
            <p className="mt-2 text-sm">
              Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function FilterButton({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-full border px-4 py-1 text-sm hover:bg-gray-100"
    >
      {label}
    </button>
  );
}
