import { style } from "@vanilla-extract/css";

export const header = style({
    position: "absolute",
    top: "2rem",
    left: "2rem",
    right: "2rem",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  });
  
  export const backButton = style({
    width: "3rem",
    height: "3rem",
    background: "none",
    cursor: "pointer",
  });
  
  export const scrapIcon = style({
    width: "3rem",
    height: "3rem",
    cursor: "pointer",
  });
  
  export const rightIcons = style({
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  });
  
  export const ttsIcon = style({
    width: "3rem",
    height: "3rem",
    cursor: "pointer",
  });