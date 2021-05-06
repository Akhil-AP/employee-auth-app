import React from "react";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>Something went wrong</h1>
      <Link to="/">Back Home</Link>
    </div>
  );
};

export default Error;
