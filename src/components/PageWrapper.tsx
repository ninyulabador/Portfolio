import { useState, useEffect } from "react";
import type{ Page } from "../types";


interface PageWrapperProps {
  children: React.ReactNode;
  pageKey: Page;
}

export default function PageWrapper({ children, pageKey }: PageWrapperProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [pageKey]);

  return (
    <div
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : "translateY(20px)",
        transition: "opacity 0.45s ease, transform 0.45s ease",
      }}
    >
      {children}
    </div>
  );
}