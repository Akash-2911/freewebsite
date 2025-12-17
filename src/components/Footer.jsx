export default function Footer() {
  return (
    <footer className="mt-16 border-t bg-gray-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} freewebsite — curated free tools
      </div>
    </footer>
  );
}
