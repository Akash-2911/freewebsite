import { useEffect } from "react";

export default function Donate() {
  useEffect(() => {
    window.location.href = "https://www.buymeacoffee.com/akash.patel";
  }, []);

  return (
      <div className="p-8 text-center">
        Redirecting to Buy Me a Coffee…
      </div>
  );
}
