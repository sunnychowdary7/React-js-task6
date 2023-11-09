import React from "react";
import MyPhoto from "C:\Users\DELL\Downloads\WhatsApp Image 2023-11-09 at 12.54.48_5e1a9f4f.jpg";
import "../App.css";

const Header = () => {
  return (
    <header>
      <img src={MyPhoto} alt="My Picture" className="rounded-image" />
      <h1>sowmya chowdary</h1>
      <p>Student at Vellore Institute of Technology</p>
    </header>
  );
};

export default Header;
