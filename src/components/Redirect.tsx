// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

"use client";

import { useEffect } from "react";

export function Redirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to);
  }, [to]);

  return (
    <div className="flex min-h-[50vh] items-center justify-center">
      {/* React hoists this into <head> at prerender time, so the redirect
          also works without JavaScript (and for crawlers). */}
      <meta httpEquiv="refresh" content={`0;url=${to}`} />
      <p className="text-neutral-500">
        Redirecting to <a href={to} className="underline">{to}</a>&hellip;
      </p>
    </div>
  );
}
