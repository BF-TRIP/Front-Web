import * as styles from "./facility.css";
import { PlaceDetail } from "@pages/detail/types/detail-response";
import { facilityCategories } from "@shared/constants/facility";
import { mapFacilityDetails } from "@shared/utils/map-facility-details";

interface FacilityProps {
  place: PlaceDetail;
}

const Facility = ({ place }: FacilityProps) => {
  const facilityIcons = facilityCategories.map(
    ({ category, fields, icon: IconComponent }) => {
      const isActive = fields.some(
        (field) => place[field as keyof PlaceDetail]
      );
      return (
        <IconComponent
          key={category}
          className={isActive ? styles.iconActive : styles.iconInactive}
        />
      );
    }
  );

  const details = mapFacilityDetails(place);

  return (
    <div className={styles.container}>
      <h2 className={styles.sectionTitle}>시설물 정보</h2>
      <div className={styles.facilities}>{facilityIcons}</div>

      <h2 className={styles.sectionTitle}>세부 시설물 정보</h2>
      {Object.entries(details)
        .filter(([, items]) => items.length > 0)
        .map(([category, items]) => (
          <div key={category} className={styles.detailContainer}>
            <p className={styles.detailTitle}>{category.replace(/_/g, " ")}</p> 
            <ul className={styles.detailList}>
              {items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

export default Facility;
