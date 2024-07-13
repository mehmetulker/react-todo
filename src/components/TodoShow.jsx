import { useEffect, useContext, useState } from "react";
import PropTypes from "prop-types";
import TasksContext from "../context/task";
import TodoForm from "./TodoForm";
export default function TodoShow({ index, item }) {
  const { deleteTaskById, updatedCheckTaskById, todo } =
    useContext(TasksContext);
  const [isEditing, setIsEditing] = useState(false);
  useEffect(() => {}, [todo]);

  const handleDeleteClick = () => {
    deleteTaskById(index);
  };

  const onChangeCheck = () => {
    updatedCheckTaskById(index);
  };

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div>
      {isEditing ? (
        <div className="view">
          <TodoForm
            taskFromUpdate={isEditing}
            setTaskFromUpdate={setIsEditing}
            item={item}
            index={index}
          />
        </div>
      ) : (
        <section className="main">
          <input className="toggle-all" type="checkbox" />
          {/* <label for="toggle-all"> Mark all as complete </label> */}

          <ul className="todo-list">
            {
              <li className={item.done ? "completed" : ""}>
                <div className="view">
                  <input
                    className="toggle"
                    type="checkbox"
                    name="done"
                    checked={`${item.done === true ? "checked" : ""}`}
                    onChange={onChangeCheck}
                  />
                  <label onClick={handleEditClick}>{item.text}</label>
                  <button
                    onClick={handleDeleteClick}
                    className="destroy"
                  ></button>
                </div>
              </li>
            }
          </ul>
        </section>
      )}
    </div>
  );
}
TodoShow.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};
