import { useState } from "react";
import * as styles from "./description.css";

interface DescriptionProps {
  text: string;
}

const MAX_LENGTH = 140;

const Description = ({ text }: DescriptionProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const shouldShowMoreButton = text.length > MAX_LENGTH;

  return (
    <p className={isExpanded ? styles.descriptionExpanded : styles.description}>
      {isExpanded ? text : text.slice(0, MAX_LENGTH)}
      {shouldShowMoreButton && !isExpanded && (
        <span className={styles.moreButton} onClick={() => setIsExpanded(true)}>
          더보기
        </span>
      )}
      {shouldShowMoreButton && isExpanded && (
        <span className={styles.moreButton} onClick={() => setIsExpanded(false)}>
          간략히
        </span>
      )}
    </p>
  );
};

export default Description;
