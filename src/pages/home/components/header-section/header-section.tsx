import {
  BtnHomeVoice,
  IcCommonLogo,
  IcHomeBubble,
  IcHomeVoiceBg,
  IcHomeSetting,
} from "@shared/assets/svg";
import { useNavigate } from "react-router-dom";
import * as styles from "./header-section.css";

const HeaderSection = () => {
  const navigate = useNavigate(); 

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
      
      <IcHomeSetting className={styles.settingIcon} onClick={() => navigate("/setting")} />

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
