import { api } from "../config/instance";
import { NearbyPlace } from "@shared/types/tour-response";

export const fetchNearbyPlaces = async (gpsX: number, gpsY: number): Promise<NearbyPlace[]> => {
  const response = await api.get<NearbyPlace[]>(`/api/search/map`, {
    params: { gpsX, gpsY },
  });
  return response.data;
};
