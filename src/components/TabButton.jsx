import React from "react";

function TabButton(props) {
  return (
    <li>
      <button
        className={props.isSelected ? "active" : null}
        onClick={props.onClick}
      >
        {props.children}
      </button>
    </li>
  );
}

export default TabButton;
