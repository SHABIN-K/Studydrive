"use client";

import { Empty } from "@/components/ui/Empty";

export default function Error({ error, reset }) {
  return <Empty label="Something went wrong." error={error} reset={reset} />;
}
