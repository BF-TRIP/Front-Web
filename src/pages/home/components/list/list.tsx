import { useEffect, useState } from "react";
import Card from "../card/card";
import * as styles from "./list.css";
import { RecommendedPlace, NearbyPlace } from "@shared/types/tour-response";
import { isRecommendedPlace, isNearbyPlace } from "@shared/utils/type-guards";
import { fetchSavedScraps } from "@shared/apis/home/scrap";

type ListItem = RecommendedPlace | NearbyPlace;

interface ListProps {
  items?: ListItem[];
  variant: "recommended" | "nearby";
  userNumber: number; 
}

const List = ({ items = [], variant, userNumber }: ListProps) => { 
  const [scrappedIds, setScrappedIds] = useState<number[]>([]);

  useEffect(() => {
    if (!userNumber) return;

    const loadScrappedData = async () => {
      try {
        const savedScraps = await fetchSavedScraps(userNumber);
        setScrappedIds(savedScraps);
      } catch (error) {
        console.error("스크랩 목록 가져오기 실패:", error);
      }
    };

    loadScrappedData();
  }, [userNumber]);

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Card
          key={item.contentId}
          id={item.contentId}
          image={item.originalImage}
          title={item.contentTitle}
          description={isRecommendedPlace(item) ? item.publicTransport : undefined}
          location={isNearbyPlace(item) ? item.addr : undefined}
          variant={variant}
          userNumber={userNumber}
          isScrapped={scrappedIds.includes(item.contentId)}
        />
      ))}
    </div>
  );
};

export default List;
