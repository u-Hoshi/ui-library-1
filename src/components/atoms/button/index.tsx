import { Button, ButtonProps } from "@mui/material";
import React from "react";

export interface CustomButtonProps extends ButtonProps {
  text: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const CustomButton = (props: CustomButtonProps) => (
  <Button onClick={props.onClick}>{props.text}</Button>
);

export default CustomButton;
