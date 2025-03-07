import Card from "../card/card";
import * as styles from "./list.css";
import { RecommendedPlace, NearbyPlace } from "@shared/types/tour-response";

type ListItem = RecommendedPlace | NearbyPlace;

interface ListProps {
  items: ListItem[]; 
  variant: "recommended" | "nearby";
}

const List = ({ items, variant }: ListProps) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Card
          key={item.contentId}
          image={item.originalImage}
          title={item.contentTitle}
          description={variant === "recommended" ? (item as RecommendedPlace).publicTransport : undefined}
          location={variant === "nearby" ? (item as NearbyPlace).addr : undefined}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default List;
