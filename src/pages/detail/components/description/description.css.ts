
import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

export const description = style({
  fontSize: "1.4rem",
  color: themeVars.color.gray900,
  fontWeight: 400,
  lineHeight: "150%",
  letterSpacing: "-0.28px",
  marginBottom: "1.4rem",
});

export const descriptionExpanded = style({
  fontSize: "1.4rem",
  color: themeVars.color.gray900,
  fontWeight: 400,
  lineHeight: "150%",
  letterSpacing: "-0.28px",
  marginBottom: "1.4rem",
});

export const moreButton = style({
  color: "#949494",
  fontSize: "1.4rem",
  fontWeight: 500,
  cursor: "pointer",
  marginLeft: "0.4rem",
});
