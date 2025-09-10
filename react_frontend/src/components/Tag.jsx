import React from "react";
import "./Tag.css";

/**
 * PUBLIC_INTERFACE
 * Tag
 * Props:
 * - tone: "success" | "warning" | "error" | "neutral"
 * - children: ReactNode
 */
export default function Tag({ tone = "neutral", children }) {
  return <span className={`tag tag--${tone}`}>{children}</span>;
}
