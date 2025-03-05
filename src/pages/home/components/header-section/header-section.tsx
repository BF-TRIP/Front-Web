import {
  BtnHomeVoice,
  IcCommonLogo,
  IcHomeBubble,
  IcHomeVoiceBg,
} from "@shared/assets/svg";
import * as styles from "./header-section.css";

const HeaderSection = () => {
  const handleVoiceSearch = () => {
    if (window.webkit?.messageHandlers?.serverEvent) {
      window.webkit.messageHandlers.serverEvent.postMessage("Voice");
    } else {
      console.error("iOS랑 연결 실패...");
    }
  };

  return (
    <header className={styles.header}>
      <IcCommonLogo className={styles.logo} />
      <div className={styles.voiceSearchContainer}>
        <IcHomeVoiceBg className={styles.voiceBg} />
        <BtnHomeVoice
          type="button"
          className={styles.voiceButton}
          onClick={handleVoiceSearch}
        />
        <IcHomeBubble className={styles.voiceBubble} />
      </div>
    </header>
  );
};

export default HeaderSection;
