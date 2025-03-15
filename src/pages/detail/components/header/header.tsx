import { IcDetailSave, IcDetailBack, IcDetailTts, IcDetailPause } from "@shared/assets/svg";
import * as styles from "./header.css";

interface HeaderProps {
  onBack: () => void;
  onTtsToggle: () => void;
  isPlaying: boolean;
}

const Header = ({ onBack, onTtsToggle, isPlaying }: HeaderProps) => {
  return (
    <div className={styles.header}>
      <IcDetailBack className={styles.backButton} onClick={onBack} />
      <div className={styles.rightIcons}>
        <IcDetailSave className={styles.scrapIcon} />
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
