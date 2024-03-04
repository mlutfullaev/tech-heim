import React, {ReactPropTypes} from "react";
import './Button.sass'
import {ButtonColor, ButtonType} from "@/assets/js/types.ts";

interface ButtonT extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonColor?: ButtonColor;
  buttonType?: ButtonType,
  disabled?: boolean;
  classNames?: string;
  props?: ReactPropTypes
  children: React.ReactNode
}

const Button = ({buttonColor, buttonType, children, disabled, classNames, ...props}: ButtonT) => {
  return (
    <button
      disabled={disabled}
      className={`button ${buttonColor ? buttonColor : "blue"} ${buttonType ? buttonType : "solid"} ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
