import { Link } from "react-router-dom";

export default function Landing() {
  return (
      <div className="mx-auto max-w-6xl px-4">
        {/* HERO */}
        <section className="py-16 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Discover free websites and tools
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            A curated directory of free and free-tier websites.
            No sign-up barriers. Clear transparency.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/home"
              className="rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
            >
              Explore Directory
            </Link>

            <Link
              to="/submit"
              className="rounded-lg border border-gray-300 px-6 py-3 text-gray-700 hover:bg-gray-100"
            >
              Submit Your Website
            </Link>
          </div>
        </section>

        {/* FEATURES */}
        <section className="grid gap-6 py-12 sm:grid-cols-3">
          <Feature
            title="Free to explore"
            text="Our directory is open to everyone. No login required."
          />
          <Feature
            title="Clear transparency"
            text="We clearly show login requirements and free tiers."
          />
          <Feature
            title="Curated manually"
            text="Each website is reviewed before being listed."
          />
        </section>

        {/* BANNER / AD */}
        <section className="my-12 rounded-xl bg-yellow-100 p-6 text-center">
          <h2 className="text-xl font-semibold">
            Want to promote something here?
          </h2>
          <p className="mt-2 text-gray-700">
            Advertise your product, tool, or community.
          </p>
          <a
            href="mailto:youremail@example.com"
            className="mt-4 inline-block rounded-lg bg-yellow-400 px-5 py-2 font-medium hover:bg-yellow-500"
          >
            Contact us
          </a>
        </section>

        {/* SUBMIT CTA */}
        <section className="my-16 rounded-xl border p-8 text-center">
          <h2 className="text-2xl font-bold">
            Want your website listed?
          </h2>
          <p className="mt-4 text-gray-600">
            Free websites and free-tier tools can be listed for free.
            Paid-only websites require a listing fee.
          </p>
          <Link
            to="/submit"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            Apply for listing
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
