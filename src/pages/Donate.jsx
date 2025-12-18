import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

export default function Donate() {
  useEffect(() => {
    window.location.href = "https://www.buymeacoffee.com/akash.patel";
  }, []);

  return (
    <>
      <Helmet>
        <title>Support — freewebsite</title>
        <meta
          name="description"
          content="Support freewebsite by buying us a coffee."
        />
      </Helmet>

      <div className="p-8 text-center">
        Redirecting to Buy Me a Coffee…
      </div>
    </>
  );
}
