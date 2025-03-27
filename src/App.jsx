import "./app.css";
import React from "react";

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>🏝️ Simple Travel List 🧳</h1>;
}

function Form() {
  return (
    <div className="add-form">
      <h3>What Do You Need for Your Trip?</h3>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list">
      <h3>Packing List</h3>
    </div>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <h3>🎒 You Have X items on Your List ,and You Already Packed X(X%)</h3>
    </footer>
  );
}
