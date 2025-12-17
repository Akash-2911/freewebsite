export default function WebsiteCard({ site }) {
  return (
    <div className="rounded-lg border p-4 shadow-sm hover:shadow-md transition">
      <h3 className="text-lg font-semibold">{site.name}</h3>

      <div className="mt-2 flex flex-wrap gap-2 text-xs">
        <Tag
          text={site.loginRequired ? "Login required" : "No login required"}
          color={site.loginRequired ? "red" : "green"}
        />
        <Tag
          text={site.freeType === "full" ? "Completely free" : "Free tier"}
          color="blue"
        />
      </div>

      <p className="mt-3 text-sm text-gray-600">
        {site.description}
      </p>

      <a
        href={site.url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-block text-sm font-medium text-blue-600 hover:underline"
      >
        Visit website →
      </a>
    </div>
  );
}

function Tag({ text, color }) {
  const colors = {
    green: "bg-green-100 text-green-700",
    red: "bg-red-100 text-red-700",
    blue: "bg-blue-100 text-blue-700",
  };

  return (
    <span className={`rounded-full px-2 py-1 ${colors[color]}`}>
      {text}
    </span>
  );
}
