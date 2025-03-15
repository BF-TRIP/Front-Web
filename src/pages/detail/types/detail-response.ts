export interface PlaceDetail {
    contentId: number;
    contentTitle: string;
    addr: string;
    gpsX: number;
    gpsY: number;
    description: string;
    originalImage: string;
    thumbnailImage: string;
    publicTransport?: string;
    elevator?: string;
    restroom?: string;
    wheelchair?: string;
    helpDog?: string;
    guideHuman?: string;
    braileBlock?: string;
    signGuide?: string;
    videoGuide?: string;
    hearingHandicapEtc?: string;
    stroller?: string;
    lactationRoom?: string;
    babySpareChair?: string;
  }
  