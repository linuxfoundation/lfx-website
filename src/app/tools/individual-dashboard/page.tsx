import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

export const metadata: Metadata = {
  robots: "noindex, follow",
  other: { "http-equiv": "refresh", content: "0;url=https://app.lfx.dev/" },
};

export default function IndDashRedirect() {
  return <Redirect to="https://app.lfx.dev/" />;
}
