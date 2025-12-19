export default function Submit() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="text-3xl font-bold">Submit Your Website</h1>

      <p className="mt-4 text-gray-600">
        We list only free or free-tier websites with clear usage limits
        and login transparency. Submissions are reviewed manually.
      </p>

      <form
        name="website-submission"
        method="POST"
        data-netlify="true"
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
          placeholder="Short description (1–2 lines)"
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
          <option value="">Free or free-tier?</option>
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
