import { style } from "@vanilla-extract/css";

export const listContainer = style({
  display: "flex",
  paddingLeft: "2rem",
  paddingRight: "2rem",
  gap: "1rem",
  overflowX: "auto",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "::-webkit-scrollbar": {
    display: "none",
  },
});
