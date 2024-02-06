import React from "react";
import Header from "./header";

const index = (props) => {
  const { children } = props;
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default index;
