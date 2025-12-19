export default function Submit() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Submit a Website</h1>

      <p className="mt-4 text-gray-600">
        We curate a directory of genuinely useful websites that are free to use
        or offer a meaningful free tier. All submissions are reviewed manually
        before being listed.
      </p>

      <p className="mt-3 text-sm text-gray-500">
        Free and free-tier websites are listed at no cost.
        Paid-only tools may require a sponsorship or listing fee.
      </p>

      <div className="mt-6 rounded-lg border bg-gray-50 p-4 text-sm text-gray-600">
        <p className="font-medium">Before submitting, please note:</p>
        <ul className="mt-2 list-disc space-y-1 pl-5">
          <li>The website must be publicly accessible</li>
          <li>Free trials or limited-time demos are not accepted</li>
          <li>Login requirements and free-tier limits must be clear</li>
          <li>Spam, waitlists, and misleading claims will be rejected</li>
        </ul>
      </div>

      <form
        name="website-submission"
        method="POST"
        data-netlify="true"
        action="/submit"
        className="mt-8 space-y-4"
      >
        <input type="hidden" name="form-name" value="website-submission" />

        <input
          name="name"
          required
          placeholder="Website name"
          className="w-full rounded-lg border px-4 py-2"
        />

        <input
          name="url"
          required
          placeholder="Website URL"
          className="w-full rounded-lg border px-4 py-2"
        />

        <textarea
          name="description"
          required
          placeholder="Short description (1–2 lines, plain English)"
          className="w-full rounded-lg border px-4 py-2"
          rows="3"
        />

        <select
          name="login"
          required
          className="w-full rounded-lg border px-4 py-2"
        >
          <option value="">Is login required?</option>
          <option>No</option>
          <option>Yes</option>
        </select>

        <select
          name="freeType"
          required
          className="w-full rounded-lg border px-4 py-2"
        >
          <option value="">Is it completely free or a free tier?</option>
          <option>Completely free</option>
          <option>Free tier</option>
        </select>

        <button
          type="submit"
          className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800"
        >
          Submit for review
        </button>
      </form>
    </div>
  );
}
