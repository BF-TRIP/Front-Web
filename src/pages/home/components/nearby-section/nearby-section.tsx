import List from '../list/list';
import { nearbyData } from '../../mocks/tour-data';
import * as styles from './nearby-section.css';

const NearbySection = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        가까운 곳에서 <br /> 즐길 수 있는 관광지
      </h2>
      <List items={nearbyData} />
    </section>
  );
};

export default NearbySection;
