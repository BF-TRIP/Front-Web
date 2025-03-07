import { api } from "../config/instance";
import { RecommendedPlace } from "@shared/types/tour-response";

export const fetchRecommendedPlaces = async (userNumber: number): Promise<RecommendedPlace[]> => {
  const response = await api.get<RecommendedPlace[]>(`/api/location/recommend?userNumber=${userNumber}`);
  return response.data;
};
