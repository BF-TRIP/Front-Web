import { useState } from "react";
import { IcDetailSave, IcDetailBack, IcDetailTts } from "@shared/assets/svg";
import * as styles from "./overview.css";
import { PlaceDetail } from "@pages/detail/types/detail-response";
import Description from "../description/description";

interface OverviewProps {
  place: PlaceDetail;
}

const Overview = ({ place }: OverviewProps) => {
  const [copySuccess, setCopySuccess] = useState(false);

  const copyAddressToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(place.addr);
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    } catch (err) {
      console.error("주소 복사 실패:", err);
    }
  };

  return (
    <div className={styles.container}>
      <img
        src={place.originalImage}
        alt={place.contentTitle}
        className={styles.image}
      />

      {/* 🔹 헤더 */}
      <div className={styles.header}>
        <IcDetailBack
          className={styles.backButton}
          onClick={() => window.history.back()}
        />

        <div className={styles.rightIcons}>
          <IcDetailSave className={styles.scrapIcon} />
          <IcDetailTts className={styles.ttsIcon} />
        </div>
      </div>

      {/* 🔹 장소 기본 정보 */}
      <div className={styles.content}>
        <h1 className={styles.title}>{place.contentTitle}</h1>
        <Description text={place.description} />

        {/* 🔹 주소 */}
        <div className={styles.addressContainer}>
          <span className={styles.addressLabel}>주소</span>
          <span className={styles.addressText}>{place.addr}</span>
          <button
            className={styles.copyButton}
            onClick={copyAddressToClipboard}
          >
            복사
          </button>
        </div>

        {copySuccess && (
          <p className={styles.copySuccess}>📋 주소가 복사되었습니다!</p>
        )}
      </div>

      <div className={styles.divider} />
    </div>
  );
};

export default Overview;
