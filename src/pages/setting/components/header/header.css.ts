import { style } from "@vanilla-extract/css";

export const header = style({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative", 
  width: "100%",
  padding: "1.6rem 1.4rem",
});

export const backButton = style({
  cursor: "pointer",
  width: "2.4rem",
  height: "2.4rem",
  position: "absolute",
  left: "1.5rem",
});

export const title = style({
  fontSize: "2rem",
  letterSpacing: "-0.05rem",
  fontWeight: "600",
});
