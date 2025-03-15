import { useNavigate } from "react-router-dom";
import { IcSettingBack } from "@shared/assets/svg";
import * as styles from "./header.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      <IcSettingBack className={styles.backButton} onClick={() => navigate(-1)} />
      <h1 className={styles.title}>설정</h1>
    </header>
  );
};

export default Header;
