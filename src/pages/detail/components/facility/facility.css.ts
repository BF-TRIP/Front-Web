import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

export const container = style({
  width: "100%",
  padding: "1.5rem",
  display: "flex",
  flexDirection: "column",
});

export const facilities = style({
  marginBottom: "1.9rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
});

export const iconActive = style({
  width: "3.3rem",
  height: "3.3rem",
  opacity: 1,
});

export const iconInactive = style([
  iconActive,
  {
    opacity: 0.1,
  },
]);

export const sectionTitle = style({
  fontSize: "2rem",
  fontWeight: "600",
  paddingBottom: "0.5rem",
  letterSpacing: "-0.28px",
  marginBottom: "1.1rem",
});

export const detailContainer = style({
  width: "100%",
  padding: "1.4rem",
  backgroundColor: themeVars.color.gray200,
  borderRadius: "1rem",
  marginBottom: "1rem",
});

export const detailTitle = style({
  fontSize: "1.5rem",
  fontWeight: "600",
  marginBottom: "0.2rem",
});

export const detailList = style({
  display: "flex",
  flexDirection: "column",
  fontSize: "1.4rem",
});
