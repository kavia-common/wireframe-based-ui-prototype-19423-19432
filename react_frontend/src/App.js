import React, { useState, useEffect } from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Button from "./components/Button";
import Input from "./components/Input";
import Tag from "./components/Tag";
import Table from "./components/Table";

// PUBLIC_INTERFACE
function App() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  const columns = [
    { key: "name", header: "Name" },
    { key: "status", header: "Status" },
    { key: "role", header: "Role" },
  ];

  const data = [
    { name: "Jane Cooper", status: <Tag tone="success">Active</Tag>, role: "Admin" },
    { name: "Jacob Jones", status: <Tag tone="warning">Pending</Tag>, role: "Editor" },
    { name: "Esther Howard", status: <Tag tone="error">Blocked</Tag>, role: "Viewer" },
  ];

  return (
    <div className="App">
      <Navigation />
      <main className="container mt-24">
        <div className="row mb-16" style={{ justifyContent: "space-between" }}>
          <div>
            <h1 className="u-heading-xl mb-4">Design System Demo</h1>
            <p className="u-body u-muted">Light theme with tokens from Figma spec.</p>
          </div>
          <div className="row">
            <Button variant="outline" onClick={toggleTheme} aria-label="Toggle theme">
              {theme === "light" ? "🌙 Dark" : "☀️ Light"}
            </Button>
            <Button variant="primary">Primary Action</Button>
          </div>
        </div>

        <section className="surface p-16 mb-16">
          <h2 className="u-title mb-12">Inputs</h2>
          <div className="grid">
            <Input label="Search" placeholder="Search or enter text..." hint="Type to search" />
            <Input label="Email" type="email" placeholder="you@example.com" />
            <Input label="With error" placeholder="Value" error="This field is required" />
          </div>
        </section>

        <section className="surface p-16 mb-16">
          <h2 className="u-title mb-12">Tags</h2>
          <div className="row">
            <Tag>Neutral</Tag>
            <Tag tone="success">Completed</Tag>
            <Tag tone="warning">Warning</Tag>
            <Tag tone="error">Error</Tag>
          </div>
        </section>

        <section className="mb-32">
          <h2 className="u-title mb-12">Table</h2>
          <Table columns={columns} data={data} />
        </section>
      </main>
    </div>
  );
}

export default App;
