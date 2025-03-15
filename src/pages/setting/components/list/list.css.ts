import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

export const container = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: themeVars.color.white,
});

export const categoryTitle = style({
  fontSize: "1.6rem",
  fontWeight: "500",
  color: themeVars.color.gray600,
  padding: "2.4rem 1.5rem",
});

export const list = style({
  display: "flex",
  flexDirection: "column",
  backgroundColor: themeVars.color.white,
});
