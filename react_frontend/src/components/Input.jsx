import React from "react";
import "./Input.css";

/**
 * PUBLIC_INTERFACE
 * Input
 * Props:
 * - label?: string
 * - id?: string
 * - hint?: string
 * - error?: string
 */
export default function Input({ label, id, hint, error, ...rest }) {
  const inputId = id || `input-${Math.random().toString(36).slice(2)}`;
  const describedByIds = [];
  if (hint) describedByIds.push(`${inputId}-hint`);
  if (error) describedByIds.push(`${inputId}-error`);

  return (
    <div className="field">
      {label && <label className="field__label" htmlFor={inputId}>{label}</label>}
      <input
        id={inputId}
        className={`u-input field__control ${error ? "has-error" : ""}`}
        aria-describedby={describedByIds.join(" ") || undefined}
        aria-invalid={!!error}
        {...rest}
      />
      {hint && !error && <div id={`${inputId}-hint`} className="field__hint">{hint}</div>}
      {error && <div id={`${inputId}-error`} className="field__error">{error}</div>}
    </div>
  );
}
