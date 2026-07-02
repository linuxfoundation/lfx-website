import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

export const metadata: Metadata = {
  robots: "noindex, follow",
  other: { "http-equiv": "refresh", content: "0;url=/" },
};

export default function DevelopersRedirect() {
  return <Redirect to="/" />;
}
