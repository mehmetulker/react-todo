import React, { useContext } from "react";
import TaskContext from "../context/task";

export default function TodoFormList() {
  const { todo } = useContext(TaskContext);

  return (
    <div>
      <ul>
        {todo.map((item, index) => (
          <li key={index}> {item.text}</li>
        ))}
      </ul>
    </div>
  );
}
