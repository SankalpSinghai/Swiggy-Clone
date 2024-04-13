import React from "react";
import ReactDOM from "react-dom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYqw4VsjJFU9zf_-Bl8WgbJhaV6weshtpKyQAoijr6LA&s" />
      </div>
      <div className="header-list-items">
        <ul className="items">
          <li>Home</li>
          <li>About us</li>
          <li>Help</li>
        </ul>
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

ReactDOM.render(<AppLayout />, document.getElementById("root"));
