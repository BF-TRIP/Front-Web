import List from '../list/list';
import { recommendedData } from '../../mocks/tour-data';
import * as styles from './recommend-section.css';

const RecommendSection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>모행 님만을 위한 관광지 추천</h2>
      <List items={recommendedData} />
    </section>
  );
};

export default RecommendSection;
