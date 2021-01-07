import React from "react";
import StarIcon from "@material-ui/icons/Star";
//
import SidebarOption from "./SidebarOption";
import "./Sidebar.css";

function Sidebar({ questions, currentQuestionId, onSelect }) {
  const renderNoData = () => {
    return <h2>No data</h2>;
  };

  if (questions.length === 0) {
    renderNoData();
  }
  return (
    <div className="sidebar">
      {questions.map((q) => {
        return (
          <SidebarOption
            key={q.id}
            questionId={q.id}
            Icon={StarIcon}
            title={q.data.name}
            selected={q.id === currentQuestionId}
            handleClick={onSelect}
          />
        );
      })}
    </div>
  );
}

export default Sidebar;
