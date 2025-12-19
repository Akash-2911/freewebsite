import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="py-20 text-center">
        <div className="rounded-3xl bg-gradient-to-b from-blue-50 to-white px-6 py-16 transition-all">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Discover free & free-tier websites
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            A curated directory of genuinely useful tools that are free to use
            or offer a meaningful free tier — with no hidden paywalls or
            misleading claims.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/home"
              className="rounded-lg bg-blue-600 px-7 py-3 text-white transition hover:scale-105 hover:bg-blue-700"
            >
              Browse directory
            </Link>

            <Link
              to="/submit"
              className="rounded-lg border border-gray-300 px-7 py-3 text-gray-700 transition hover:scale-105 hover:bg-gray-100"
            >
              Submit a website
            </Link>
          </div>

          <p className="mt-6 text-sm text-gray-500">
            No signup required · Manually curated · Transparent listings
          </p>
        </div>
      </section>

      {/* STATS */}
      <section className="grid gap-6 py-12 text-center sm:grid-cols-3">
        <Stat value="100+" label="Websites listed" />
        <Stat value="0" label="Signup required to browse" />
        <Stat value="100%" label="Manually reviewed" />
      </section>

      {/* FEATURES */}
      <section className="grid gap-6 py-12 sm:grid-cols-3">
        <Feature
          title="Free to explore"
          text="Browse all free and free-tier websites without creating an account."
        />
        <Feature
          title="Clear transparency"
          text="We clearly label login requirements and free-tier limitations."
        />
        <Feature
          title="Manually curated"
          text="Every website is reviewed to avoid spam, fake trials, or misleading claims."
        />
      </section>

      {/* AD / SPONSORED */}
      <section className="my-16">
        <div className="relative rounded-2xl border border-blue-200 bg-blue-50 p-8 text-center shadow-sm transition hover:shadow-md">
          <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-3 py-1 text-xs font-medium text-white">
            Sponsored slot
          </span>

          <h2 className="text-xl font-semibold text-gray-900">
            Promote your product here
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-gray-700">
            Reach users who are actively looking for free and useful tools.
            Only relevant, high-quality products are accepted.
          </p>

          <a
            href="mailto:2911akashpatel@gmail.com?subject=Advertising on freewebsite"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:scale-105 hover:bg-gray-800"
          >
            Get your ad here
          </a>
        </div>
      </section>

      {/* SUBMIT CTA */}
      <section className="my-16 rounded-xl border p-8 text-center transition hover:shadow-sm">
        <h2 className="text-2xl font-bold">
          Want your website listed?
        </h2>

        <p className="mt-4 text-gray-600">
          Free and free-tier websites can be listed at no cost.
          Paid-only tools may require a sponsorship or listing fee.
        </p>

        <Link
          to="/submit"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white transition hover:scale-105 hover:bg-gray-800"
        >
          Submit for review
        </Link>
      </section>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-lg border p-6 text-center transition hover:shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}

function Stat({ value, label }) {
  return (
    <div className="rounded-lg border bg-white p-6 transition hover:shadow-sm">
      <div className="text-3xl font-bold text-blue-600">{value}</div>
      <div className="mt-1 text-sm text-gray-600">{label}</div>
    </div>
  );
}
