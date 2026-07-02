// Copyright The Linux Foundation and each contributor to LFX.
// SPDX-License-Identifier: MIT

import { Card } from "./Card";

export function MetricCard({ value, label }: { value: string; label: string }) {
  return (
    <Card className="text-center">
      <div className="font-heading text-4xl font-bold text-brand-500">{value}</div>
      <div className="mt-2 text-sm text-neutral-600">{label}</div>
    </Card>
  );
}
