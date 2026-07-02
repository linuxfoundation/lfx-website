// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto max-w-[80rem] px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
