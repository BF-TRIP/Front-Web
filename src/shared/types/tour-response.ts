export interface RecommendedPlace {
    contentId: number;
    contentTitle: string;
    addr: string;
    originalImage: string;
    thumbnailImage: string;
    publicTransport?: string;
  }
  
  export interface NearbyPlace {
    contentId: number;
    contentTitle: string;
    addr: string;
    gpsX: number;
    gpsY: number;
    originalImage: string;
    thumbnailImage: string;
    publicTransport?: string;
  }
  