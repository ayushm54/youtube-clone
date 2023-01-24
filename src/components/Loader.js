import React from "react";
import RingLoader from "react-spinners/RingLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
  position: "absolute",
  top: "50%",
  left: "50%",
  marginRight: "-50%",
  transform: "translate(-50%, -50%)",
};

const Loader = () => {
  return (
    <RingLoader
      cssOverride={override}
      color="white"
      size={100}
      aria-label="Loading..."
    />
  );
};

export default Loader;
