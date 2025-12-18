import { useState } from "react";
import { Helmet } from "react-helmet-async";
import sitesData from "../data/sites.json";
import WebsiteCard from "../components/WebsiteCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [category, setCategory] = useState("all");

  // Collect unique categories from data
  const categories = [
    "all",
    ...new Set(sitesData.map((site) => site.category).filter(Boolean)),
  ];

  const filteredSites = sitesData.filter((site) => {
    // Search filter
    const matchesSearch =
      site.name.toLowerCase().includes(search.toLowerCase()) ||
      site.description.toLowerCase().includes(search.toLowerCase());

    // Login / free filters
    if (filter === "no-login" && site.loginRequired) return false;
    if (filter === "login" && !site.loginRequired) return false;
    if (filter === "free" && site.freeType !== "full") return false;
    if (filter === "tier" && site.freeType !== "tier") return false;

    // Category filter
    if (category !== "all" && site.category !== category) return false;

    return matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Directory — freewebsite</title>
        <meta
          name="description"
          content="Browse free and free-tier websites with search and filters."
        />
      </Helmet>

      <div className="mx-auto max-w-6xl px-4 py-10">
        <h1 className="text-3xl font-bold">Website Directory</h1>

        {/* SEARCH */}
        <input
          type="text"
          placeholder="Search websites..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="mt-6 w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring"
        />

        {/* FILTERS */}
        <div className="mt-4 flex flex-wrap gap-2">
          <FilterButton label="All" onClick={() => setFilter("all")} />
          <FilterButton label="No Login" onClick={() => setFilter("no-login")} />
          <FilterButton label="Login Required" onClick={() => setFilter("login")} />
          <FilterButton label="Completely Free" onClick={() => setFilter("free")} />
          <FilterButton label="Free Tier" onClick={() => setFilter("tier")} />
        </div>

        {/* CATEGORY FILTER */}
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

        {/* RESULTS */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredSites.length > 0 ? (
            filteredSites.map((site) => (
              <WebsiteCard key={site.name} site={site} />
            ))
          ) : (
            <p className="text-gray-500">No websites found.</p>
          )}
        </div>
      </div>
    </>
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
