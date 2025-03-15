import { PlaceDetail } from "@pages/detail/types/detail-response";

export const fetchPlaceDetail = async (contentId: number): Promise<PlaceDetail> => {
  const response = await fetch(`http://211.254.215.190:8080/api/location/detail?contentid=${contentId}`);
  if (!response.ok) {
    throw new Error("Failed to fetch place detail");
  }
  return response.json();
};
