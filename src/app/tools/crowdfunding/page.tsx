// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

export const metadata: Metadata = {
  robots: "noindex, follow",
  other: { "http-equiv": "refresh", content: "0;url=https://crowdfunding.lfx.linuxfoundation.org/" },
};

export default function CrowdfundingRedirect() {
  return <Redirect to="https://crowdfunding.lfx.linuxfoundation.org/" />;
}
