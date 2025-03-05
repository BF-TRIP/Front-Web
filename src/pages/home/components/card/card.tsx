import * as styles from "./card.css";
import { IcCommonScrap } from "@shared/assets/svg";

interface CardProps {
  image: string;
  title: string;
  description?: string;
  location?: string;
  variant: "recommended" | "nearby";
}

const Card = ({ image, title, description, location, variant }: CardProps) => {
  return (
    <div className={variant === "recommended" ? styles.recommendedCard : styles.nearbyCard}>
      {/* 스크랩 버튼 추가 */}
      <IcCommonScrap className={styles.scrapButton} />

      {/* 추천 카드와 가까운 곳 카드의 이미지 스타일 분리 */}
      <img
        src={image}
        alt={title}
        className={variant === "recommended" ? styles.cardImageRecommended : styles.cardImageNearby}
      />

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
