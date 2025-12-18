import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex h-14 items-center justify-between">
          {/* Brand */}
          <Link to="/" className="text-xl font-bold">
            freewebsite
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-4 text-sm md:flex">
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/submit">Submit</NavLink>

            <a
              href="https://www.buymeacoffee.com/akash.patel"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-yellow-400 px-3 py-1.5 font-semibold text-black hover:bg-yellow-500"
            >
              Buy me a coffee
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden rounded-lg border px-3 py-2 text-sm"
            aria-label="Toggle menu"
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t py-4 space-y-3">
            <MobileLink to="/home" onClick={() => setOpen(false)}>
              Home
            </MobileLink>
            <MobileLink to="/about" onClick={() => setOpen(false)}>
              About
            </MobileLink>
            <MobileLink to="/submit" onClick={() => setOpen(false)}>
              Submit
            </MobileLink>

            <a
              href="https://www.buymeacoffee.com/akash.patel"
              target="_blank"
              rel="noreferrer"
              className="block rounded-lg bg-yellow-400 px-4 py-2 text-center font-semibold text-black hover:bg-yellow-500"
            >
              Buy me a coffee
            </a>
          </div>
        )}
      </div>
    </header>
  );
}

function NavLink({ to, children }) {
  return (
    <Link to={to} className="text-gray-600 hover:text-black">
      {children}
    </Link>
  );
}

function MobileLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="block px-2 text-gray-700 hover:text-black"
    >
      {children}
    </Link>
  );
}
