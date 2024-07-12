import React from "react";
import { useState, useEffect } from "react";
import { useContext } from "react";
import TasksContext from "../context/task";

export default function TodoForm() {
  const { todo, setTodo } = useContext(TasksContext);
  const [form, setForm] = useState({ done: false, text: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (form.text === "") {
      return false;
    }
    setTodo([...todo, form]);
    setForm({ text: "", done: "" });
    //addContact((prevState)=[...prevState,form]);
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        <form onSubmit={onSubmit}>
          <input
            name="text"
            className="new-todo"
            value={form.text}
            placeholder="What needs to be done?"
            onChange={onChangeInput}
          />
        </form>
      </header>
    </div>
  );
}
