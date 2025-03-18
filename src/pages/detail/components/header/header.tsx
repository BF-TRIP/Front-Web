import { useEffect, useState } from "react";
import { IcDetailSave, IcDetailBack, IcDetailTts, IcDetailPause } from "@shared/assets/svg";
import * as styles from "./header.css";
import { saveScrap, deleteScrap, fetchSavedScraps } from "@shared/apis/home/scrap";

interface HeaderProps {
  onBack: () => void;
  onTtsToggle: () => void;
  isPlaying: boolean;
  userNumber?: number;
  contentId: number; 
}

const Header = ({ onBack, onTtsToggle, isPlaying, userNumber, contentId }: HeaderProps) => {
  const [isScrapped, setIsScrapped] = useState(false); 

  useEffect(() => {
    if (!userNumber) return;

    const checkScrapStatus = async () => {
      try {
        const savedScraps = await fetchSavedScraps(userNumber);
        setIsScrapped(savedScraps.includes(contentId)); 
      } catch (error) {
        console.error("스크랩 상태 조회 실패:", error);
      }
    };

    checkScrapStatus();
  }, [userNumber, contentId]);

  const handleScrapClick = async () => {
    if (!userNumber) {
      console.error("스크랩을 위해 userNumber가 필요합니다.");
      return;
    }

    try {
      if (isScrapped) {
        await deleteScrap({ userNumber, contentId });
        setIsScrapped(false);
      } else {
        await saveScrap({ userNumber, contentId });
        setIsScrapped(true);
      }
    } catch (error) {
      console.error("스크랩 처리 실패:", error);
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
