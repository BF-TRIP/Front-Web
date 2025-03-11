import { RecommendedPlace, NearbyPlace } from "@shared/types/tour-response";

type ListItem = RecommendedPlace | NearbyPlace;

export const isRecommendedPlace = (item: ListItem): item is RecommendedPlace => {
  return "publicTransport" in item;
};

export const isNearbyPlace = (item: ListItem): item is NearbyPlace => {
  return "addr" in item;
};
