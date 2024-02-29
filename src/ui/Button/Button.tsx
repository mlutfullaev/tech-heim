import React, {ReactPropTypes} from "react";
import cls from './Button.module.sass'
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
      className={`${cls.button} ${color ? cls[color] : cls.blue} ${type ? cls[type] : cls.solid} ${classNames}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
