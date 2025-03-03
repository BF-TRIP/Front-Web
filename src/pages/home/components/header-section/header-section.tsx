import { BtnHomeVoice, IcCommonLogo, IcHomeBubble, IcHomeVoiceBg } from '@shared/assets/svg';
import * as styles from './header-section.css';

const HeaderSection= () => {
  return (
    <header className={styles.header}>
        <IcCommonLogo className={styles.logo}/>
      <div className={styles.voiceSearchContainer}>
        <IcHomeVoiceBg className={styles.voiceBg} />
        <BtnHomeVoice type='button' className={styles.voiceButton} />
        <IcHomeBubble className={styles.voiceBubble} />
      </div>
    </header>
  );
};

export default HeaderSection;
