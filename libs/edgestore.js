"use client";

import { createEdgeStoreProvider } from "@edgestore/react";

const { EdgeStoreProvider, useEdgeStore } = createEdgeStoreProvider({
  maxConcurrentUploads: 3,
});

export { EdgeStoreProvider, useEdgeStore };
