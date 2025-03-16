import * as styles from "./skeleton-list.css";

interface SkeletonListProps {
  count: number;
}

const SkeletonList = ({ count }: SkeletonListProps) => {
  return (
    <div className={styles.listContainer}>
      <div className={styles.list}>
        {Array.from({ length: count }).map((_, index) => (
          <div key={index} className={styles.skeletonCard} />
        ))}
      </div>
    </div>
  );
};

export default SkeletonList;
