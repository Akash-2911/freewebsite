import { Helmet } from "react-helmet-async";

export default function Submit() {
  return (
    <>
      <Helmet>
        <title>Submit Your Website — freewebsite</title>
        <meta
          name="description"
          content="Submit your free or free-tier website to be listed on freewebsite."
        />
      </Helmet>

      <div className="mx-auto max-w-3xl px-4 py-12">
        <h1 className="text-3xl font-bold">Submit Your Website</h1>

        <p className="mt-4 text-gray-600">
          If your website is free or offers a meaningful free tier,
          you can apply for a free listing.
        </p>

        <p className="mt-2 text-gray-600">
          Paid-only websites require a listing fee.
        </p>

        <div className="mt-8 rounded-lg border p-6">
          <h2 className="text-lg font-semibold">How to apply</h2>

          <ol className="mt-4 list-decimal space-y-2 pl-5 text-gray-600">
            <li>Website name</li>
            <li>Website URL</li>
            <li>Short description</li>
            <li>Is login required?</li>
            <li>Is it completely free or free-tier?</li>
          </ol>

          <a
            href="mailto:2911akashpatel@gmail.com?subject=Website Submission"
            className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
          >
            Submit via Email
          </a>
        </div>
      </div>
    </>
  );
}
