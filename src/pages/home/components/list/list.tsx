import Card from "../card/card";
import * as styles from "./list.css";
import { RecommendedPlace } from "@shared/types/tour-response";

interface ListProps {
  items: RecommendedPlace[];
  variant: "recommended" | "nearby";
}

const List = ({ items, variant }: ListProps) => {
  return (
    <div className={styles.listContainer}>
      {items.map((item) => (
        <Card
          key={item.contentId}
          image={item.thumbnailImage}
          title={item.contentTitle}
          description={variant === "recommended" ? item.publicTransport : undefined}
          location={variant === "nearby" ? item.addr : undefined}
          variant={variant}
        />
      ))}
    </div>
  );
};

export default List;
