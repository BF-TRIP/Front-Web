import List from "../list/list";
import { useNearbyPlaces } from "@shared/hooks/use-nearby-places";
import * as styles from "./nearby-section.css";

const NearbySection = ({ gpsX, gpsY }: { gpsX: number; gpsY: number }) => {
  const nearbyData = useNearbyPlaces(gpsX, gpsY);

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>
        가까운 곳에서<br />즐길 수 있는 관광지
      </h2>
      <List items={nearbyData} variant="nearby" />
    </section>
  );
};

export default NearbySection;
