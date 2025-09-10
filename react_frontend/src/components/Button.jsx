import React from "react";
import "./Button.css";

/**
 * PUBLIC_INTERFACE
 * Button
 * Props:
 * - variant: "primary" | "outline" | "ghost"
 * - size: "md" | "sm" | "lg"
 * - disabled?: boolean
 * - onClick?: () => void
 */
export default function Button({ variant = "primary", size = "md", children, ...rest }) {
  const classes = ["btn", `btn--${variant}`, `btn--${size}`].join(" ");
  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}
