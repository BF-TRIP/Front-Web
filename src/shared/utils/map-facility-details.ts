import { PlaceDetail } from "@pages/detail/types/detail-response";

export const mapFacilityDetails = (place: PlaceDetail) => {
  return {
    지체장애: [
      place.publicTransport && "출입구까지 턱이 없어 휠체어 접근 가능",
      place.restroom && "장애인 전용 화장실 있음",
    ].filter(Boolean),

    시각장애: [
      place.braileBlock && "점자 유도 블록 있음",
      place.helpDog && "도우미견 출입 가능",
    ].filter(Boolean),

    청각장애: [
      place.signGuide && "청각 장애인 안내 시스템 있음",
      place.videoGuide && "영상 안내 제공",
      place.hearingHandicapEtc && "보청기 지원 가능",
    ].filter(Boolean),

    임산부_영유아: [
      place.stroller && "유아차 대여 가능",
      place.lactationRoom && "수유실 있음",
    ].filter(Boolean),
  };
};
