import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";
import { globalKeyframes } from "@vanilla-extract/css";
import { recommendedCard, cardContentRecommended } from "../card/card.css";

export const list = style({
  display: "flex",
  gap: "1.2rem",
});

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

export const skeletonCard = style([
  recommendedCard,
  {
    backgroundColor: themeVars.color.gray200,
    animation: "pulse 1s infinite ease-in-out",
  },
]);

export const skeletonContent = style([
  cardContentRecommended,
  {
    backgroundColor: themeVars.color.gray100,
  },
]);

export const pulse = globalKeyframes("pulse", {
  "0%": { opacity: 0.6 },
  "50%": { opacity: 1 },
  "100%": { opacity: 0.6 },
});
