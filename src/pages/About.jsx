export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-2xl font-bold">About freewebsite</h1>

      <p className="mt-4 text-gray-600">
        freewebsite was created to solve a simple problem: finding genuinely
        useful websites that are free to use without hidden paywalls, forced
        signups, or misleading “free trial” claims.
      </p>

      <p className="mt-4 text-gray-600">
        While exploring tools online, it’s often hard to know whether a website
        is truly free, requires an account, or limits access after a few uses.
        freewebsite exists to bring clarity to that experience.
      </p>

      <h2 className="mt-8 text-xl font-semibold">What we offer</h2>

      <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600">
        <li>A curated directory of free and free-tier websites</li>
        <li>Clear labels for login requirements and free-tier limits</li>
        <li>Manual review to reduce spam and misleading tools</li>
        <li>No accounts, no paywalls, and no tracking to browse</li>
      </ul>

      <h2 className="mt-8 text-xl font-semibold">Monetization & transparency</h2>

      <p className="mt-3 text-gray-600">
        Free and free-tier websites are always listed at no cost. Some paid-only
        tools or featured placements may appear as sponsored listings.
      </p>

      <p className="mt-3 text-gray-600">
        Sponsored placements are clearly labeled and never affect access to free
        tools or organic listings.
      </p>

      <h2 className="mt-8 text-xl font-semibold">About the creator</h2>

      <p className="mt-3 text-gray-600">
        freewebsite is built and maintained by <span className="font-medium">Akash Patel</span>.
        You can find my work and connect with me here:
      </p>

      <div className="mt-4 flex flex-col gap-3 sm:flex-row">
        {/* GitHub */}
        <a
          href="https://github.com/akashpatel"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z"
              clipRule="evenodd"
            />
          </svg>
          <span>GitHub — Akash Patel</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/akashpatel"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-gray-700 hover:text-black"
        >
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764 0-.974.784-1.764 1.75-1.764s1.75.79 1.75 1.764c0 .974-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.864-3.058-1.865 0-2.151 1.454-2.151 2.958v5.704h-3v-10h2.881v1.367h.041c.401-.76 1.379-1.561 2.837-1.561 3.033 0 3.594 1.997 3.594 4.594v5.999z" />
          </svg>
          <span>LinkedIn — Akash Patel</span>
        </a>
      </div>
    </div>
  );
}
