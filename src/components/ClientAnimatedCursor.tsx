"use client";

import { useEffect, useState } from "react";
import AnimatedCursor from "./AnimatedCursor";

export default function ClientAnimatedCursor() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Não renderiza nada durante o SSR
  if (!mounted) {
    return null;
  }

  return <AnimatedCursor />;
}
