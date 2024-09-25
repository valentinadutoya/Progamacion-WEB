import React from "react";

const Header = () => {
  return (
    <header style={headerStyle}>
      <h1>Mi Blog</h1>
    </header>
  );
};

const headerStyle = {
  background: "#282c34",
  color: "white",
  padding: "10px",
  textAlign: "center",
};

export default Header;
