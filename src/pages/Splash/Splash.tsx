import logo from "../../assets/images/Splash/logo.png";

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
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Splash;
