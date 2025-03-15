import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

export const divider = style({
  width: "100%",
  height: "1.1rem",
  backgroundColor: themeVars.color.gray200,
  marginBottom: "2.4rem",
  marginTop: "8.5rem",
});
