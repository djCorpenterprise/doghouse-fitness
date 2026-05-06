"use client";

import { useEffect, useRef } from "react";

type Props = {
  formId: string;
};

export default function BeehiivForm({ formId }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector("script")) return;

    const script = document.createElement("script");
    script.src = "https://subscribe-forms.beehiiv.com/v3/loader.js";
    script.async = true;
    script.setAttribute("data-beehiiv-form", formId);
    container.appendChild(script);
  }, [formId]);

  return (
    <div
      ref={containerRef}
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: 60,
      }}
    />
  );
}
