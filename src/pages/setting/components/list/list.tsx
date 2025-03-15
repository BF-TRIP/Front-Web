import SettingItem from "../item/item";
import * as styles from "./list.css";

interface SettingListProps {
  title?: string;
  items: {
    title: string;
    subDescription?: string;
    description?: string; // ✅ 최신 버전 표시
    onClick?: () => void;
  }[];
}

const SettingList = ({ title, items }: SettingListProps) => {
  return (
    <div className={styles.container}>
      {title && <h2 className={styles.categoryTitle}>{title}</h2>}
      <div className={styles.list}>
        {items.map((item, index) => (
          <SettingItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default SettingList;
