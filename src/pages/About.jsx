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
        <li>
          A curated directory of free and free-tier websites that are actually
          usable
        </li>
        <li>
          Clear labels showing whether login is required and how free access
          works
        </li>
        <li>
          Manual review of every listing to reduce spam and misleading tools
        </li>
        <li>
          No user accounts, no tracking of personal data, and no paywalls to
          browse
        </li>
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

      <h2 className="mt-8 text-xl font-semibold">Get in touch</h2>

      <p className="mt-3 text-gray-600">
        If you’d like to suggest a website, promote a product, sponsor a
        placement, or share feedback, you can reach us at:
      </p>

      <p className="mt-2 font-medium">
        <a
          href="mailto:2911akashpatel@gmail.com"
          className="text-blue-600 hover:underline"
        >
          2911akashpatel@gmail.com
        </a>
      </p>
    </div>
  );
}
