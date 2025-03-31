import React from "react";

export default function Stats({ items }) {
  if (!items.length)
    return (
      <p className="stats">
        <em>Start adding items to your packing list 😊</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentPacked = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      <h3>
        {percentPacked === 100
          ? "You're Ready to Go ✈️"
          : `🎒 You Have ${numItems} items on Your List, and You Already packed ${numPacked} (${percentPacked}%)`}
      </h3>
    </footer>
  );
}
