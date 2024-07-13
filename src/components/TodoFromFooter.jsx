import { useContext } from "react";
import TasksContext from "../context/task";

function TodoFromFooter() {
  const { todo, setTodo,setfilter } = useContext(TasksContext);


  const clearcompleted = () => {
    const newformList = todo.filter((item) => item.done === false);
    setTodo(newformList);
  };

  const countAcitve = todo.filter((item) => item.done ===false).length;
  const countComleted = todo.filter((item) => item.done ===true ).length;

  return (
    <div>
      <footer className="footer">
        <span className="todo-count">
          <strong>{countAcitve}</strong>
          &nbsp;&nbsp;items left
        </span>
        <ul className="filters">
          <li>
            <button className="selected" onClick={() => setfilter("all")}>
              &nbsp;All&nbsp;
            </button>
          </li>
          <li>
            <button onClick={() => setfilter("active")}>
              &nbsp;Active&nbsp;
            </button>
          </li>
          <li>
            <button onClick={() => setfilter("completed")}>
              &nbsp;Completed &nbsp;
            </button>
          </li>
        </ul>
        <button
          name="clear"
          value="clear"
          className={` ${countComleted > 0 ? "clear-completed" : "hidden"}`}
          onClick={clearcompleted}
        >
          Clear completed
        </button>
      </footer>
    </div>
  );
}


export default TodoFromFooter;
