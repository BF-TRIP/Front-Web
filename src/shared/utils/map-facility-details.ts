import { PlaceDetail } from "@pages/detail/types/detail-response";

export const mapFacilityDetails = (place: PlaceDetail) => {
  return {
    휠체어_사용자_및_고령자_지원: [
      place.publicTransport && "출입구까지 턱이 없어 휠체어 접근 가능",
      place.restroom && "장애인 전용 화장실 있음",
      place.elevator && "엘리베이터 있음",
      place.wheelchair && "휠체어 제공 가능",
    ].filter(Boolean),

    시각적_지원: [
      place.braileBlock && "점자 유도 블록 있음",
      place.helpDog && "도우미견 출입 가능",
      place.guideHuman && "안내 요원 있음",
    ].filter(Boolean),

    청각적_지원: [
      place.signGuide && "수화 안내 동영상 이용 가능",
      place.videoGuide && "영상 안내 제공",
      place.hearingHandicapEtc && "보청기 지원 가능",
    ].filter(Boolean),

    임산부_및_영유아_동반자_지원: [
      place.stroller && "유아차 대여 가능",
      place.lactationRoom && "수유실 있음",
      place.babySpareChair && "유아용 의자 제공 가능"
    ].filter(Boolean),
  };
};
