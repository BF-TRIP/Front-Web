import { useEffect, useState } from "react";
import { IcDetailSave, IcDetailBack, IcDetailTts, IcDetailPause } from "@shared/assets/svg";
import * as styles from "./header.css";
import { saveScrap, deleteScrap, fetchSavedScraps } from "@shared/apis/home/scrap"; // ✅ 스크랩 조회 API 추가

interface HeaderProps {
  onBack: () => void;
  onTtsToggle: () => void;
  isPlaying: boolean;
  userNumber?: number;
  contentId: number; 
}

const Header = ({ onBack, onTtsToggle, isPlaying, userNumber, contentId }: HeaderProps) => {
  const [isScrapped, setIsScrapped] = useState(false); 

  // ✅ 1️⃣ 처음 렌더링될 때, 해당 관광지가 스크랩된 상태인지 조회
  useEffect(() => {
    if (!userNumber) return;

    const checkScrapStatus = async () => {
      try {
        const savedScraps = await fetchSavedScraps(userNumber);
        setIsScrapped(savedScraps.includes(contentId)); // ✅ 현재 관광지가 스크랩된 상태인지 확인
      } catch (error) {
        console.error("스크랩 상태 조회 실패:", error);
      }
    };

    checkScrapStatus();
  }, [userNumber, contentId]); // ✅ userNumber 또는 contentId 변경 시 다시 체크

  // ✅ 2️⃣ 스크랩 버튼 클릭 핸들러 (저장 & 취소 기능)
  const handleScrapClick = async () => {
    if (!userNumber) {
      console.error("❌ 스크랩을 위해 userNumber가 필요합니다.");
      return;
    }

    try {
      if (isScrapped) {
        await deleteScrap({ userNumber, contentId }); // ✅ 스크랩 취소 API 호출
        setIsScrapped(false);
      } else {
        await saveScrap({ userNumber, contentId }); // ✅ 스크랩 저장 API 호출
        setIsScrapped(true);
      }
    } catch (error) {
      console.error("❌ 스크랩 처리 실패:", error);
    }
  };

  return (
    <div className={styles.header}>
      <IcDetailBack className={styles.backButton} onClick={onBack} />
      <div className={styles.rightIcons}>
        <IcDetailSave
          className={styles.scrapIcon}
          onClick={handleScrapClick}
          fill={isScrapped ? "#fff" : "none"}
        />
        {isPlaying ? (
          <IcDetailPause className={styles.ttsIcon} onClick={onTtsToggle} />
        ) : (
          <IcDetailTts className={styles.ttsIcon} onClick={onTtsToggle} />
        )}
      </div>
    </div>
  );
};

export default Header;
