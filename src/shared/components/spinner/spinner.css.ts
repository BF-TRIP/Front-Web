import { style, keyframes } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

const spin = keyframes({
  from: { transform: "rotate(0deg)" },
  to: { transform: "rotate(360deg)" },
});

export const spinner = style({
  width: "3rem",
  height: "3rem",
  border: `4px solid ${themeVars.color.yellow_main}`, 
  borderTop: "4px solid transparent",
  borderRadius: "50%",
  animation: `${spin} 1s linear infinite`,
  margin: "auto",
});
