import React from "react";
import StarIcon from "@material-ui/icons/Star";
//
import SidebarOption from "./SidebarOption";
import useFireStore from "../hooks/useFirestore";
import "./Sidebar.css";

function Sidebar() {
  const {docs} = useFireStore('questions', "name")
  
  return (
    <div className="sidebar">
      {
        docs.map((questionset)=>{
          return (
            <SidebarOption key={questionset.id} Icon={StarIcon} title={questionset.name} number={54} />
          )
        })
      }
   </div>
  );
}

export default Sidebar;
