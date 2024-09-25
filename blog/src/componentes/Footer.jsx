import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2024 Mi Blog. Todos los derechos reservados.</p>
    </footer>
  );
};

const footerStyle = {
  background: "#282c34",
  color: "white",
  padding: "10px",
  textAlign: "center",
  position: "absolute",
  bottom: 0,
  width: "100%",
};

export default Footer;
