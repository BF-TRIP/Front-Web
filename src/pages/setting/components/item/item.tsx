import { IcSettingChecron } from "@shared/assets/svg";
import * as styles from "./item.css";

interface SettingItemProps {
  title: string;
  subDescription?: string;
  description?: string;
  onClick?: () => void;
}

const SettingItem = ({ title, subDescription, description, onClick }: SettingItemProps) => {
  return (
    <div className={styles.item} onClick={onClick}>
      <div className={styles.textContainer}>
        <span className={styles.title}>{title}</span>
        {subDescription && <span className={styles.subDescription}>{subDescription}</span>}
      </div>
      {description ? (
        <span className={styles.description}>{description}</span>
      ) : (
        <IcSettingChecron className={styles.arrowIcon} />
      )}
    </div>
  );
};

export default SettingItem;
