import React, {ReactPropTypes} from "react";
import './Button.sass'
import {ButtonColor, ButtonType} from "@/assets/js/types.ts";

type ButtonT = {
  color?: ButtonColor;
  type?: ButtonType,
  disabled?: boolean;
  classNames?: string;
  props?: ReactPropTypes
  children: React.ReactNode
}

const Button = ({color, type, children, disabled, classNames, props}: ButtonT) => {
  return (
    <button
      disabled={disabled}
      className={`cls.button ${color ? color : "blue"} ${type ? type : "solid"} ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
