import { useRef } from "react";
import { useToast } from "@shared/hooks/use-toast";
import Header from "../header/header";
import { useClipboard } from "@shared/hooks/use-clipboard";
import { useTTS } from "@shared/hooks/use-tts";
import Toast from "../toast/toast";
import * as styles from "./overview.css";
import { PlaceDetail } from "@pages/detail/types/detail-response";
import Description from "../description/description";

interface OverviewProps {
  place: PlaceDetail;
}

const Overview = ({ place }: OverviewProps) => {
  const contentRef = useRef<HTMLDivElement>(null); 
  const { toast, showToast } = useToast();
  const { copyToClipboard } = useClipboard(place.addr, () => showToast("복사 완료", "success"));
  const { ttsLoading, isPlaying, handleTtsToggle } = useTTS(); 

  return (
    <div className={styles.container} ref={contentRef}>
      <img src={place.originalImage} alt={place.contentTitle} className={styles.image} />

      {/* 헤더 */}
      <Header
        onBack={() => window.history.back()}
        onTtsToggle={() => contentRef.current && handleTtsToggle(contentRef.current)}
        isPlaying={isPlaying}
      />

      {/* 장소 기본 정보 */}
      <div className={styles.content}>
        <h1 className={styles.title}>{place.contentTitle}</h1>
        <Description text={place.description} />

        {/* 주소 */}
        <div className={styles.addressContainer}>
          <span className={styles.addressLabel}>주소</span>
          <span className={styles.addressText}>{place.addr}</span>
          <button className={styles.copyButton} onClick={copyToClipboard}>
            복사
          </button>
        </div>
      </div>

      <div className={styles.divider} />

      {toast && <Toast message={toast.message} type={toast.type} />}

      {ttsLoading && <p className={styles.ttsLoading}>음성 변환 중...</p>}
    </div>
  );
};

export default Overview;
