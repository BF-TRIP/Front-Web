import Card from "../card/card";
import * as styles from "./list.css";
import { RecommendedPlace, NearbyPlace } from "@shared/types/tour-response";
import { isRecommendedPlace, isNearbyPlace } from "@shared/utils/type-guards";

type ListItem = RecommendedPlace | NearbyPlace;

interface ListProps {
  items?: ListItem[];
  variant: "recommended" | "nearby";
  userNumber: number;
  savedScraps: number[];
}

const List = ({ items = [], variant, userNumber, savedScraps }: ListProps) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Card
          key={item.contentId}
          id={item.contentId}
          image={item.originalImage}
          title={item.contentTitle}
          description={
            isRecommendedPlace(item) ? item.publicTransport : undefined
          }
          location={isNearbyPlace(item) ? item.addr : undefined}
          variant={variant}
          userNumber={userNumber}
          isScrapped={savedScraps.includes(item.contentId)}
        />
      ))}
    </div>
  );
};

export default List;
