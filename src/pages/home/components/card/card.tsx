import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routePath } from "@shared/constants/path";
import { IcCommonScrap } from "@shared/assets/svg";
import * as styles from "./card.css";
import { saveScrap, deleteScrap } from "@shared/apis/home/scrap";

interface CardProps {
  id: number;
  image: string;
  title: string;
  description?: string;
  location?: string;
  variant: "recommended" | "nearby";
  userNumber: number;
  isScrapped: boolean; 
}

const Card = ({ id, image, title, description, location, variant, userNumber, isScrapped: initialScrap }: CardProps) => {
  const navigate = useNavigate();
  const [isScrapped, setIsScrapped] = useState(initialScrap);

  const handleClick = () => {
    navigate(routePath.DETAIL.replace(":id", String(id)));
  };

  const handleScrapClick = async (e: React.MouseEvent) => {
    e.stopPropagation(); 

    if (!userNumber) {
      console.error("스크랩을 위해 userNumber가 필요합니다.");
      return;
    }

    try {
      if (isScrapped) {
        await deleteScrap({ userNumber, contentId: id });
        setIsScrapped(false);
      } else {
        await saveScrap({ userNumber, contentId: id });
        setIsScrapped(true);
      }
    } catch (error) {
      console.error("스크랩 저장/삭제 실패:", error);
    }
  };

  return (
    <div
      className={variant === "recommended" ? styles.recommendedCard : styles.nearbyCard}
      onClick={handleClick} 
    >
      <IcCommonScrap
        className={styles.scrapButton}
        onClick={handleScrapClick}
        fill={isScrapped ? "white" : "none"}
      />

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
