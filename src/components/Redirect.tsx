"use client";

import { useEffect } from "react";

export function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      <p className="text-neutral-500">Redirecting&hellip;</p>
    </div>
  );
}
