import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className="mx-auto max-w-6xl px-4">
      {/* HERO */}
      <section className="py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight">
          Discover free & free-tier websites
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A curated directory of useful tools that are free to use or offer a
          meaningful free tier — with clear login and usage transparency.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            to="/home"
            className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
          >
            Browse directory
          </Link>

          <Link
            to="/submit"
            className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100"
          >
            Submit a website
          </Link>
        </div>
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

      {/* BANNER / AD */}
      <section className="my-12 rounded-xl border border-dashed bg-gray-50 p-6 text-center">
        <h2 className="text-xl font-semibold">
          Promote your product here
        </h2>
        <p className="mt-2 text-gray-700">
          Reach users actively looking for useful tools and resources.
        </p>
        <a
          href="mailto:2911akashpatel@gmail.com?subject=Advertising on freewebsite"
          className="mt-4 inline-block rounded-lg bg-black px-5 py-2 font-medium text-white hover:bg-gray-800"
        >
          Get your ad here
        </a>
      </section>

      {/* SUBMIT CTA */}
      <section className="my-16 rounded-xl border p-8 text-center">
        <h2 className="text-2xl font-bold">
          Want your website listed?
        </h2>
        <p className="mt-4 text-gray-600">
          Free and free-tier websites can be listed at no cost.
          Paid-only tools may require a sponsorship or listing fee.
        </p>
        <Link
          to="/submit"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Submit for review
        </Link>
      </section>
    </div>
  );
}

function Feature({ title, text }) {
  return (
    <div className="rounded-lg border p-6 text-center">
      <h3 className="font-semibold">{title}</h3>
      <p className="mt-2 text-gray-600">{text}</p>
    </div>
  );
}
