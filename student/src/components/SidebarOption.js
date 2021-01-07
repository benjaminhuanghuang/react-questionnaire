import React from "react";
//
import "./SidebarOption.css";

function SidebarOption({ questionId, Icon, title, selected, handleClick }) {
  return (
    <div
      className={`sidebarOption ${selected && "sidebarOption--active"}`}
      onClick={() => {
        handleClick(questionId);
      }}
    >
      <Icon />
      <h3>{title}</h3>
      {/* <p>{number}</p> */}
    </div>
  );
}

export default SidebarOption;
