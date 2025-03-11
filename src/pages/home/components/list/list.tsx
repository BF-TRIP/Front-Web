import Card from "../card/card";
import * as styles from "./list.css";
import { RecommendedPlace, NearbyPlace } from "@shared/types/tour-response";
import { isRecommendedPlace, isNearbyPlace } from "@shared/utils/type-guards";

type ListItem = RecommendedPlace | NearbyPlace;

interface ListProps {
  items?: ListItem[];
  variant: "recommended" | "nearby";
}

const List = ({ items = [], variant }: ListProps) => {
  if (!Array.isArray(items)) {
    console.warn("items가 배열이 아닙니다. 기본 빈 배열을 사용합니다:", items);
    items = [];
  }

  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Card
          key={item.contentId}
          image={item.originalImage}
          title={item.contentTitle}
          description={isRecommendedPlace(item) ? item.publicTransport : undefined}
          location={isNearbyPlace(item) ? item.addr : undefined}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default List;
