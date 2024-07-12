import  { useContext } from "react";
import TaskContext from "../context/task";
import TodoShow from "./TodoShow";

export default function TodoFormList() {
  const { todo } = useContext(TaskContext);

  return (
    <div>
      <ul>
        {todo.map((item, index) => (
          <TodoShow key={index} item={item} index={index} />
        ))}
      </ul>
    </div>
  );
}
