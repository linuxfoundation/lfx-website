import type { Metadata } from "next";
import { Redirect } from "@/components/Redirect";

export const metadata: Metadata = {
  robots: "noindex, follow",
  other: { "http-equiv": "refresh", content: "0;url=https://mentorship.lfx.linuxfoundation.org/" },
};

export default function MentorshipRedirect() {
  return <Redirect to="https://mentorship.lfx.linuxfoundation.org/" />;
}
