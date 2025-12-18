import { Helmet } from "react-helmet-async";

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — freewebsite</title>
        <meta
          name="description"
          content="Learn about freewebsite and how we curate free and free-tier websites."
        />
      </Helmet>

      <div className="p-8">
        <h1 className="text-2xl font-bold">About</h1>
        <p className="mt-2 text-gray-600">
          freewebsite is a curated list of free and free-tier websites.
        </p>
      </div>
    </>
  );
}
