import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-gray-600">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          {/* Left */}
          <p>
            © {new Date().getFullYear()} <span className="font-medium">freewebsite</span> — curated free & free-tier tools
          </p>

          {/* Links */}
          <nav className="flex gap-4">
            <Link to="/home" className="hover:text-black">
              Directory
            </Link>
            <Link to="/submit" className="hover:text-black">
              Submit
            </Link>
            <Link to="/about" className="hover:text-black">
              About
            </Link>
            <a
              href="mailto:2911akashpatel@gmail.com"
              className="hover:text-black"
            >
              Contact
            </a>
          </nav>
        </div>

        {/* Transparency note */}
        <p className="mt-4 text-center text-xs text-gray-500">
          Some listings may be sponsored. Free and free-tier tools are always
          discoverable without payment.
        </p>
      </div>
    </footer>
  );
}
