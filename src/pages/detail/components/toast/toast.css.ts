import { style, keyframes } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

const fadeInUp = keyframes({
  "0%": { transform: "translate(-50%, 20px)", opacity: 0 },
  "100%": { transform: "translate(-50%, 0)", opacity: 1 },
});

const fadeOutDown = keyframes({
  "0%": { transform: "translate(-50%, 0)", opacity: 1 },
  "100%": { transform: "translate(-50%, 20px)", opacity: 0 },
});

export const toastContainer = style({
  display: "flex",
  width: "93%",
  padding: "1rem",
  alignItems: "center",
  gap: "1rem",
  borderRadius: "0.6rem",
  background: themeVars.color.yellow_main,
  boxShadow: "0px 0px 20px 0px rgba(0, 0, 0, 0.10)",
  position: "fixed",
  bottom: "8rem",
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 10,
  animation: `${fadeInUp} 0.3s ease-out, ${fadeOutDown} 0.3s ease-in 2.4s forwards`,
});

export const toastContent = style({
  display: "flex",
  alignItems: "center",
  gap: "0.8rem",
});

export const toastMessage = style({
  fontSize: "1.8rem",
  fontWeight: "600",
  letterSpacing: "-0.299px",
  color: themeVars.color.black,
});

export const toastIcon = style({
  width: "2.4rem",
  height: "2.4rem",
});
