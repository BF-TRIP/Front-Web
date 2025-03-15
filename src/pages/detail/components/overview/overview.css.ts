import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

export const container = style({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

export const image = style({
  width: "100%",
  height: "31.9rem",
  objectFit: "cover",
});

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

export const content = style({
  width: "100%",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
});

export const title = style({
  fontSize: "2.4rem",
  fontWeight: "600",
  lineHeight: "150%",
  letterSpacing: "-0.28px",
  color: themeVars.color.black,
  marginBottom: "1.1rem",
});

export const addressContainer = style({
  display: "flex",
  alignItems: "center",
  width: "100%",
  padding: "1.1rem",
  backgroundColor: themeVars.color.gray200,
  borderRadius: "0.6rem",
});

export const addressLabel = style({
  fontSize: "1.4rem",
  fontWeight: "500",
  color: themeVars.color.gray700,
  marginRight: "1rem",
});

export const addressText = style({
  fontSize: "1.4rem",
  color: themeVars.color.gray650,
  fontWeight: "500",
  marginRight: "0.5rem",
});

export const copyButton = style({
  fontSize: "1.4rem",
  fontWeight: "500",
  color: themeVars.color.blue,
  background: "none",
  border: "none",
  cursor: "pointer",
});

export const copySuccess = style({
  fontSize: "1.2rem",
  color: themeVars.color.blue,
  marginTop: "0.5rem",
});

export const divider = style({
  width: "93%",
  height: "1px",
  background: themeVars.color.gray200,
  marginTop: "1.5rem",
});
