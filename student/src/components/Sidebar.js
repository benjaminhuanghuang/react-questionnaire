import React from "react";
import InboxIcon from "@material-ui/icons/Inbox";
import StarIcon from "@material-ui/icons/Star";
//
import SidebarOption from "./SidebarOption";

// Redux
import { useDispatch } from "react-redux";
//
import "./Sidebar.css";

function Sidebar() {
  const dispatch = useDispatch();

  return (
    <div className="sidebar">
      <SidebarOption Icon={InboxIcon} title="Inbox" number={54} selected />
      <SidebarOption Icon={StarIcon} title="Started" number={54} />
     
    </div>
  );
}

export default Sidebar;
