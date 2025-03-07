import { useEffect, useState, useRef } from "react";
import { fetchNearbyPlaces } from "@shared/apis/home/get-nearby";
import { NearbyPlace } from "@shared/types/tour-response";

export const useNearbyPlaces = (gpsX: number, gpsY: number) => {
  const [nearbyData, setNearbyData] = useState<NearbyPlace[]>([]);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchData = async () => {
      try {
        const data = await fetchNearbyPlaces(gpsX, gpsY);
        setNearbyData(data);
      } catch (error) {
        console.error("가까운 곳 관광지 API 호출 오류:", error);
      }
    };

    fetchData();
  }, [gpsX, gpsY]);

  return nearbyData;
};
