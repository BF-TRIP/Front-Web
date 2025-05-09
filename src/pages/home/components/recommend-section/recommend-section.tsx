import List from "../list/list";
import SkeletonList from "../list/skeleton-list";
import { useRecommendPlaces } from "@shared/hooks/use-recommend-places";
import * as styles from "./recommend-section.css";

interface RecommendSectionProps {
  userNumber: number;
  userName: string;
  savedScraps: number[];
}

const RecommendSection = ({ userNumber, userName, savedScraps }: RecommendSectionProps) => {
  const { recommendedData, isLoading } = useRecommendPlaces(userNumber);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{userName} 님만을 위한 관광지 추천</h2>
      {isLoading ? (
        <SkeletonList count={4} />
      ) : (
        <List 
          items={recommendedData} 
          variant="recommended" 
          userNumber={userNumber} 
          savedScraps={savedScraps}
        />
      )}
    </section>
  );
};

export default RecommendSection;