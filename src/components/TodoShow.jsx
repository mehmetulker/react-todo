import React from "react";

export default function TodoShow({ index, item }) {
  return (
    <div>
      <li key={index}>{index}---{item.text}</li>
    </div>
  );
}
