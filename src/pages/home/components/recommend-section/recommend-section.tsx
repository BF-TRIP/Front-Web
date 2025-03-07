import List from "../list/list";
import { useRecommendPlaces } from "@shared/hooks/use-recommend-places";
import * as styles from "./recommend-section.css";

interface RecommendSectionProps {
  userNumber: number;
  userName: string;
}

const RecommendSection = ({ userNumber, userName }: RecommendSectionProps) => {
  const recommendedData = useRecommendPlaces(userNumber);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{userName} 님만을 위한 관광지 추천</h2>
      <List items={recommendedData} variant="recommended" />
    </section>
  );
};

export default RecommendSection;
