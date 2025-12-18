export default function WebsiteCard({ site }) {
  return (
    <div className="flex h-full flex-col rounded-xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      {/* Title */}
      <h3 className="text-lg font-semibold leading-tight">
        {site.name}
      </h3>

      {/* Tags */}
      <div className="mt-3 flex flex-wrap gap-2 text-xs">
        <Tag
          text={site.freeType === "full" ? "Free" : "Free tier"}
          variant="free"
        />
        <Tag
          text={site.loginRequired ? "Login required" : "No login"}
          variant={site.loginRequired ? "login" : "nologin"}
        />
      </div>

      {/* Description */}
      <p className="mt-3 flex-grow text-sm text-gray-600">
        {site.description}
      </p>

      {/* Action */}
      <a
        href={site.url}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600 hover:underline"
      >
        Visit website
        <span aria-hidden>→</span>
      </a>
    </div>
  );
}

function Tag({ text, variant }) {
  const styles = {
    free: "bg-blue-100 text-blue-700",
    login: "bg-red-100 text-red-700",
    nologin: "bg-green-100 text-green-700",
  };

  return (
    <span
      className={`rounded-full px-2.5 py-1 font-medium ${styles[variant]}`}
    >
      {text}
    </span>
  );
}
