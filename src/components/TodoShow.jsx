import React, { useContext } from "react";
import PropTypes from "prop-types";
import TasksContext from "../context/task";

export default function TodoShow({ index, item }) {
  const { deleteTaskById, updatedCheckTaskById } = useContext(TasksContext);

  const handleDeleteClick = () => {
    deleteTaskById(index);
  };

  const onChangeCheck = () => {
    updatedCheckTaskById(index);
  };
  return (
    <div>
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
                  defaultChecked={item.done === true ? "checked" : ""}
                  onChange={onChangeCheck}
                />
                <label>{item.text}</label>
                <button
                  onClick={handleDeleteClick}
                  className="destroy"
                ></button>
              </div>
            </li>
          }
        </ul>
      </section>
    </div>
  );
}
TodoShow.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};
