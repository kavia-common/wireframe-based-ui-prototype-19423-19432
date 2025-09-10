import React from "react";
import "./Table.css";

/**
 * PUBLIC_INTERFACE
 * Table
 * Props:
 * - columns: Array<{ key: string; header: string }>
 * - data: Array<Record<string, React.ReactNode>>
 */
export default function Table({ columns = [], data = [] }) {
  return (
    <div className="table__wrapper surface">
      <table className="table">
        <thead>
          <tr>
            {columns.map(col => (
              <th key={col.key} scope="col">{col.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr><td colSpan={columns.length} className="table__empty u-muted">No data</td></tr>
          ) : (
            data.map((row, idx) => (
              <tr key={idx}>
                {columns.map(col => (
                  <td key={col.key} data-key={col.key}>{row[col.key]}</td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
