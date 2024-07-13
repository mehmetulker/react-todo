import React, { useEffect, useState, createContext } from "react";
import PropTypes from "prop-types";
const TaskContext = createContext();

function Provider({ children }) {
  const todoData = [
    {
      text: "Thanks to Mehmet Seven",
      done: false,
    },
    {
      text: "Patiaka.dev! Thanks to your team",
      done: false,
    },

    {
      text: "Give talks",
      done: true,
    },

    {
      text: "Write tutorials",
      done: true,
    },

    {
      text: "Promote Mavo",
      done: true,
    },
    {
      text: "Have a life!",
      done: true,
    },
  ];

  const [todo, setTodo] = useState(todoData);
  const [filter, setfilter] = useState("all");
  useEffect(() => {}, [todo, filter]);

  ///*************FilteredTodos****************** */
  const getFilteredTodos = () => {
    switch (filter) {
      case "all":
        return todo;
      case "active":
        return todo.filter((todo) => !todo.done);
      case "completed":
        return todo.filter((todo) => todo.done);
      default:
        return todo;
    }
  };
  console.log(getFilteredTodos);

  ///*************clearcompleted****************** */

  const clearcompleted = () => {
    const newformList = todo.filter((item) => item.done === false);
    setTodo(newformList);
  };

  ///*************deleteTaskById****************** */

  const deleteTaskById = (index) => {
    const newformList = [...todo];
    newformList.splice(index, 1);
    setTodo(newformList);
  };

  ///*************updatedCheckTaskById****************** */

  const updatedCheckTaskById = (id) => {
    const updatedTasks = todo.map((task, index) => {
      if (index === id) {
        // console.log(task.done);
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTodo(updatedTasks);
  };
  const sharedValuesAndMethods = {
    todo,
    setTodo,
    deleteTaskById,
    updatedCheckTaskById,
    filter,
    setfilter,
    clearcompleted,
    getFilteredTodos,
  };
  return (
    <div>
      <TaskContext.Provider value={sharedValuesAndMethods}>
        {children}
      </TaskContext.Provider>
    </div>
  );
}

export { Provider };
export default TaskContext;
Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
