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
  whiteSpace: "nowrap",
});

export const addressText = style({
  fontSize: "1.4rem",
  color: themeVars.color.gray650,
  fontWeight: "500",
  flex: 1,
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap", 
});

export const copyButton = style({
  fontSize: "1.4rem",
  fontWeight: "500",
  color: themeVars.color.blue,
  background: "none",
  border: "none",
  cursor: "pointer",
  whiteSpace: "nowrap", 
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

export const ttsLoading = style({
  position: "absolute",
  bottom: "3rem",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: themeVars.color.black,
  color: themeVars.color.white,
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  fontSize: "1.4rem",
  fontWeight: "500",
  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
  opacity: 0.9,
});