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
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Website Directory</h1>
        <p className="mt-2 text-gray-600">
          Browse free and free-tier websites with clear usage transparency.
        </p>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search websites by name or description…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-lg border px-4 py-2 transition focus:outline-none focus:ring"
      />

      {/* Filters */}
      <div className="mt-4 flex flex-wrap gap-2">
        <FilterButton label="All" active={filter === "all"} onClick={() => setFilter("all")} />
        <FilterButton label="No Login" active={filter === "no-login"} onClick={() => setFilter("no-login")} />
        <FilterButton label="Login Required" active={filter === "login"} onClick={() => setFilter("login")} />
        <FilterButton label="Completely Free" active={filter === "free"} onClick={() => setFilter("free")} />
        <FilterButton label="Free Tier" active={filter === "tier"} onClick={() => setFilter("tier")} />
      </div>

      {/* Category */}
      <div className="mt-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border px-3 py-2 transition hover:bg-gray-50"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === "all" ? "All categories" : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Sponsored Banner */}
      <div className="my-10">
        <div className="relative rounded-2xl border border-blue-200 bg-blue-50 p-6 text-center shadow-sm transition hover:shadow-md">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            Sponsored
          </span>
          <h3 className="text-lg font-semibold text-gray-900">
            Advertise your product here
          </h3>
          <p className="mt-2 text-sm text-gray-700">
            Reach users actively searching for free and useful tools.
          </p>
          <a
            href="mailto:2911akashpatel@gmail.com?subject=Advertising on freewebsite"
            className="mt-4 inline-block rounded-lg bg-black px-5 py-2 text-white transition hover:scale-105 hover:bg-gray-800"
          >
            Get your ad here
          </a>
        </div>
      </div>

      {/* Result count */}
      <p className="mb-4 text-sm text-gray-600">
        Showing <span className="font-medium">{filteredSites.length}</span>{" "}
        website{filteredSites.length !== 1 && "s"}
      </p>

      {/* Results */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredSites.length > 0 ? (
          filteredSites.map((site) => (
            <div
              key={site.name}
              className="transition hover:-translate-y-1 hover:shadow-md"
            >
              <WebsiteCard site={site} />
            </div>
          ))
        ) : (
          <div className="col-span-full rounded-lg border p-10 text-center text-gray-600">
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

function FilterButton({ label, onClick, active }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-4 py-1 text-sm transition ${
        active
          ? "bg-black text-white"
          : "hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}
