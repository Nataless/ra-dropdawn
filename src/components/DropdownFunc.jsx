import { useState } from "react";
import DropdownList from "./DropdownListFunc";

export default function Dropdown() {
  const list = [
    "Profile Information",
    "Change Password",
    "Become PRO",
    "Help",
    "Log Out",
  ];

  const [state, setState] = useState("open");

  const handleClickToggle = () => {
    state === "open" ? setState("closed") : setState("open");
  };

  return (
    <div className={"dropdown-wrapper " + state}>
      <button className="btn" onClick={handleClickToggle}>
        <span>Account Settings</span>
        <i className="material-icons">public</i>
      </button>
      {state === "open" ? <DropdownList list={list} /> : null}
    </div>
  );
}