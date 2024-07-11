import React from "react";
import PropTypes from "prop-types";

export default function TodoShow({ index, item }) {
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
                  checked={`${item.done === true ? "checked" : ""}`}
                />
                <label>{item.text}</label>
                <button className="destroy"></button>
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
