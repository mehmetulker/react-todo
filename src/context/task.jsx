import React, { useState,createContext } from "react";
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
         text: "Patiaka.dev!",
         done: false,
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
  const sharedValuesAndMethods = {todo, setTodo};
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
