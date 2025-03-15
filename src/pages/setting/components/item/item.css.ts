import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

export const item = style({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 1.5rem",
  cursor: "pointer",
  backgroundColor: themeVars.color.white,
});

export const textContainer = style({
  display: "flex",
  flexDirection: "column",
});

export const title = style({
  fontSize: "1.8rem",
  letterSpacing: "-0.05rem",
  fontWeight: "500",
  color: themeVars.color.black,
});

export const subDescription = style({
  fontSize: "1.6rem",
  fontWeight: "400",
  color: themeVars.color.gray400,
});

export const description = style({
  fontSize: "1.8rem",
  fontWeight: "400",
  color: themeVars.color.gray400,
});

export const arrowIcon = style({
  width: "2rem",
  height: "2rem",
  color: themeVars.color.gray400,
});
