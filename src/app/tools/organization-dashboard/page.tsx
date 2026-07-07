// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

export const metadata: Metadata = {
  robots: "noindex, follow",
};

export default function OrgDashRedirect() {
  return <Redirect to="https://myorg.lfx.dev/" />;
}
