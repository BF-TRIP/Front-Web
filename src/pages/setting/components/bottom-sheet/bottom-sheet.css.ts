import { style, keyframes } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { themeVars } from "@shared/styles";

const slideUpAnimation = keyframes({
  from: { transform: "translateY(100%)" },
  to: { transform: "translateY(0)" },
});

const slideDownAnimation = keyframes({
  from: { transform: "translateY(0)" },
  to: { transform: "translateY(100%)" },
});

export const backdrop = style({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(128, 128, 128, 0.55)",
  display: "flex",
  alignItems: "flex-end",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
  zIndex: 1000,
});

export const show = style({
  opacity: 1,
});

export const sheetContainer = style({
  width: "100%",
  height: "29.4rem",
  backgroundColor: themeVars.color.white,
  borderTopLeftRadius: "1.6rem",
  borderTopRightRadius: "1.6rem",
  transform: "translateY(100%)",
});

export const slideUp = style({
  animation: `${slideUpAnimation} 0.3s ease-out forwards`,
});

export const slideDown = style({
  animation: `${slideDownAnimation} 0.3s ease-in forwards`,
});

export const content = style({
  height: "5.2rem",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textAlign: "left",
  marginLeft: "1.4rem",
  marginTop: "5rem",
});

export const title = style({
  fontSize: "2rem",
  fontWeight: "500",
  color: themeVars.color.black,
  letterSpacing: "-0.05rem",
});

export const actions = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "1.5rem",
  marginTop: "3rem",
});

export const button = recipe({
  base: {
    fontSize: "1.8rem",
    fontWeight: "600",
    padding: "1rem",
    border: "none",
    cursor: "pointer",
    width: "93%",
    borderRadius: "1rem",
    letterSpacing: "-0.03rem",
    boxShadow: "0px 2px 20px rgba(0, 0, 0, 0.05)",
  },
  variants: {
    variant: {
      confirm: {
        backgroundColor: themeVars.color.yellow_main,
        color: themeVars.color.black,
      },
      cancel: {
        backgroundColor: themeVars.color.white,
        color: themeVars.color.black,
      },
    },
  },
});
