import React from "react";

const Main = () => {
  return (
    <main style={mainStyle}>
      <h2>Bienvenido a mi blog</h2>
      <p>Este es un post de ejemplo. Aquí puedes compartir tus pensamientos.</p>
    </main>
  );
};

const mainStyle = {
  padding: "20px",
  minHeight: "80vh",
};

export default Main;
