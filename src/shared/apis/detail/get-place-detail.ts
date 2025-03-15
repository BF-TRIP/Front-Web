import { api } from "../config/instance";
import { PlaceDetail } from "@pages/detail/types/detail-response";

export const fetchPlaceDetail = async (contentId: number): Promise<PlaceDetail> => {
  const response = await api.get<PlaceDetail>(`/api/location/detail`, {
    params: { contentid: contentId },
  });
  return response.data;
};
