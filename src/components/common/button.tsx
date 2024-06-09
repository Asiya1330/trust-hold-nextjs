import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  type?: "button" | "submit" | "reset";
}

const Button = ({ text = "Submit", type = "button", ...rest}: ButtonProps) => {
  return (
    <div className="m-2">
      <button type={type} className={`p-2 bg-red-500 text-gray-200 rounded`} {...rest}>
        {text}
      </button>
    </div>
  );
};

export default Button;
