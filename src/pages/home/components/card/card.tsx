import { useNavigate } from "react-router-dom";
import { routePath } from "@shared/constants/path";
import * as styles from "./card.css";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description?: string;
  location?: string;
  variant: "recommended" | "nearby";
}

const Card = ({ id, image, title, description, location, variant }: CardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(routePath.DETAIL.replace(":id", String(id)));
  };

  return (
    <div
      className={variant === "recommended" ? styles.recommendedCard : styles.nearbyCard}
      onClick={handleClick}
    >
      <img src={image} alt={title} className={variant === "recommended" ? styles.cardImageRecommended : styles.cardImageNearby} />
      {variant === "recommended" ? (
        <div className={styles.cardContentRecommended}>
          <p className={styles.cardDescription}>{description}</p>
          <h3 className={styles.cardTitleRecommended}>{title}</h3>
        </div>
      ) : (
        <div className={styles.cardContentNearby}>
          <h3 className={styles.cardTitleNearby}>{title}</h3>
          <span className={styles.cardLocation}>{location}</span>
        </div>
      )}
    </div>
  );
};

export default Card;
