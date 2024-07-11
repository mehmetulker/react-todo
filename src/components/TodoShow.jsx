import React from "react";
import PropTypes from "prop-types";

export default function TodoShow({ index, item }) {
  return (
    <div>
      <li key={index}>
        {index} {item.text}
      </li>
    </div>
  );
}
TodoShow.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.object.isRequired,
};
