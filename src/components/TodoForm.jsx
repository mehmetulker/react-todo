import React from "react";
import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useContext } from "react";
import TasksContext from "../context/task";

function TodoForm({
  taskFromUpdate = null,
  setTaskFromUpdate = null,
  item,
  index,
}) {
  const { todo, setTodo } = useContext(TasksContext);
  console.log(taskFromUpdate);
  console.log(setTaskFromUpdate);

  const initialFormState = taskFromUpdate
    ? { done: item.done, text: item.text }
    : { done: false, text: "" };

  const [form, setForm] = useState(initialFormState);


  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onChangeUpdateInput = (e) => {
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

  const onSubmitUpDate = () => {
    const updatedTasks = todo.map((task, id) => {
      if (index === id && form.text !== item.text) {
        return { ...task, text: form.text, done: false };
      }
      return task;
    });

    setTodo(updatedTasks);
    setTaskFromUpdate(!taskFromUpdate);
  };

  return (
    <div>
      <header className="header">
        <h1>todos</h1>
        {taskFromUpdate ? (
          <form onSubmit={onSubmit}>
            <input
              name="text"
              className="edit"
              value={form.text}
              onChange={onChangeUpdateInput}
              onMouseOut={onSubmitUpDate}
            />
          </form>
        ) : (
          <form onSubmit={onSubmit}>
            <input
              name="text"
              className="new-todo"
              value={form.text}
              placeholder="What needs to be done?"
              onChange={onChangeInput}
            />
          </form>
        )}
      </header>
    </div>
  );
}

export default TodoForm;
TodoForm.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number,
  taskFromUpdate: PropTypes.bool,
  setTaskFromUpdate: PropTypes.func,
};


