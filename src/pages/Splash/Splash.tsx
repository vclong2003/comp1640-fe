import React from "react";

const Splash = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <img src={require("../../assets/images/Splash/logo.png")} alt="logo" />
    </div>
  );
};

export default Splash;
