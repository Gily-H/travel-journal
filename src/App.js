import React from "react";
import Navbar from "./components/Navbar";
import Entry from "./components/Entry";
import data from "./data";
import "./styles/app.css";

export default function App() {
  const entries = data.map(function (entry) {
    return <Entry key={entry.id} destination={entry} />;
  });

  return (
    <>
      <Navbar />
      {entries}
    </>
  );
}
