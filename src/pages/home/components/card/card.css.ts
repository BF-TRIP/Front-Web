import { style } from "@vanilla-extract/css";
import { themeVars } from "@shared/styles";

// 카드 공통 스타일
export const cardBase = style({
  display: "flex",
  flexDirection: "column",
  flexShrink: 0,
  position: "relative",
});

// 추천 관광지 카드 스타일
export const recommendedCard = style([
  cardBase,
  {
    width: "22.6rem",
    height: "29.7rem",
    borderRadius: "2rem",
    overflow: "hidden",
  },
]);

// 가까운 곳 관광지 카드 스타일
export const nearbyCard = style([
  cardBase,
  {
    width: "22.6rem",
    backgroundColor: "white",
    color: themeVars.color.black,
    borderRadius: "1.5rem",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
]);

// 추천 카드 이미지 (꽉 차게 배치)
export const cardImageRecommended = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
});

// 가까운 곳 카드 이미지
export const cardImageNearby = style({
  width: "100%",
  height: "14rem",
  objectFit: "cover",
  borderRadius: "1.5rem",
});

// 스크랩 버튼 스타일 (공통)
export const scrapButton = style({
  position: "absolute",
  top: "1rem",
  right: "0.5rem",
  width: "4.4rem", 
  cursor: "pointer",
  zIndex: 2,
});

// 추천 카드 하단 정보 컨테이너
export const cardContentRecommended = style({
  position: "absolute",
  bottom: 0,
  width: "100%",
  height: "10.184rem",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  gap: "1rem",
  borderRadius: "0px 0px 2rem 2rem",
  background: themeVars.color.black,
});

// 가까운 곳 카드 텍스트 컨테이너 (이미지 아래)
export const cardContentNearby = style({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  gap: "0.5rem",
  marginTop: "1rem",
});

// 추천 카드 타이틀 스타일
export const cardTitleRecommended = style({
  width: "18.758rem",
  color: themeVars.color.white,
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontWeight: 600,
  fontStyle: "normal",
  lineHeight: "130%",
});

// 가까운 곳 카드 타이틀 스타일
export const cardTitleNearby = style({
  width: "100%",
  color: themeVars.color.black,
  fontFamily: "Pretendard",
  fontSize: "18px",
  fontWeight: 600,
  fontStyle: "normal",
  lineHeight: "130%",
});

// 설명 스타일 (추천 관광지)
export const cardDescription = style({
  width: "18.758rem",
  color: themeVars.color.white,
  fontFamily: "Pretendard",
  fontSize: "1.4rem",
  fontWeight: 600,
  fontStyle: "normal",
  lineHeight: "normal",
  whiteSpace: "nowrap",
  overflow: "hidden",   
  textOverflow: "ellipsis",
});


// 위치 스타일 (가까운 곳 관광지)
export const cardLocation = style({
  width: "100%",
  color: themeVars.color.black,
  fontFamily: "Pretendard",
  fontSize: "1.2rem",
  fontWeight: 600,
  fontStyle: "normal",
  lineHeight: "normal",
});
