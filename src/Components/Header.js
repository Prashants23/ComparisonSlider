import React from "react";
import "./header.css";

class Header extends React.Component {
  componentDidMount() {
    const i2 = document.querySelector(".image2");
    window.addEventListener("mousemove", (e) => {
      i2.style.left = e.clientX + "px";
    });
  }

  render() {
    return (
      <div className="container">
        <div className="image1">{/* <p>It is what it is</p> */}</div>
        <div className="image2"></div>
      </div>
    );
  }
}

export default Header;
