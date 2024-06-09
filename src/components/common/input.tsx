import React from "react";

const Input = ({ type = "text", placeholder = "", ...rest }) => {
  return (
    <div className="m-2">
      <input className=" border p-2 rounded w-full" type={type} placeholder={placeholder} {...rest} />
    </div>
  );
};

export default Input;
