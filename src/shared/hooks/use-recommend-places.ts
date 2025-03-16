import { useEffect, useState, useRef } from "react";
import { fetchRecommendedPlaces } from "@shared/apis/home/get-recommends";
import { RecommendedPlace } from "@shared/types/tour-response";

export const useRecommendPlaces = (userNumber: number) => {
  const [recommendedData, setRecommendedData] = useState<RecommendedPlace[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchRecommendedPlaces(userNumber);
        setRecommendedData(data);
      } catch (error) {
        console.error("추천 관광지 API 호출 오류:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [userNumber]);

  return { recommendedData, isLoading }; 
};
