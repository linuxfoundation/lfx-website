// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

export const metadata: Metadata = {
  robots: "noindex, follow",
  other: { "http-equiv": "refresh", content: "0;url=https://myorg.lfx.dev/" },
};

export default function OrgDashRedirect() {
  return <Redirect to="https://myorg.lfx.dev/" />;
}
