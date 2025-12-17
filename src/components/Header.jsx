import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link to="/" className="text-xl font-bold">
          freewebsite
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center gap-3 text-sm">
          <Link to="/home" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-black">
            About
          </Link>
          <Link to="/submit" className="text-gray-600 hover:text-black">
            Submit
          </Link>

          {/* Buy Me a Coffee */}
          <a
            href="https://www.buymeacoffee.com/akash.patel"
            target="_blank"
            rel="noreferrer"
            className="rounded-lg bg-yellow-400 px-3 py-1 text-sm font-semibold text-black hover:bg-yellow-500"
          >
            Buy me a coffee
          </a>
        </nav>
      </div>
    </header>
  );
}
