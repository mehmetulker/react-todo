import { useContext, useEffect } from "react";
import TaskContext from "../context/task";
import TodoShow from "./TodoShow";

export default function TodoFormList() {
  const { getFilteredTodos, todo } = useContext(TaskContext);
  const filteredTodos = getFilteredTodos();
  useEffect(() => {}, [todo]);
  console.log(filteredTodos);


  return (
    <div>
      <ul>
        {filteredTodos.map((item, index) => (
          <TodoShow key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}
