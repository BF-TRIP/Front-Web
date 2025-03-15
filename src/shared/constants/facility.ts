import {
  IcDetailWheelchair,
  IcDetailCane,
  IcDetailBlind,
  IcDetailPregnant,
  IcDetailDeaf,
} from "@shared/assets/svg";

export const facilityCategories = [
  {
    category: "지체장애",
    fields: ["wheelchair", "elevator", "restroom", "publicTransport"],
    icon: IcDetailWheelchair,
  },

  {
    category: "노령자",
    fields: [],
    icon: IcDetailCane,
  },
  {
    category: "시각장애",
    fields: ["braileBlock", "helpDog", "guideHuman"],
    icon: IcDetailBlind,
  },
  {
    category: "임산부_영유아",
    fields: ["stroller", "lactationRoom", "babySpareChair"],
    icon: IcDetailPregnant,
  },

  {
    category: "청각장애",
    fields: ["signGuide", "videoGuide", "hearingHandicapEtc"],
    icon: IcDetailDeaf,
  },
];
