import * as styles from "./toast.css";
import { IcDetailToastCheck, IcDetailToastX } from "@shared/assets/svg";

interface ToastProps {
  message: string;
  type: "success" | "cancel";
}

const iconMap = {
  success: <IcDetailToastCheck className={styles.toastIcon} />,
  cancel: <IcDetailToastX className={styles.toastIcon} />,
};

const Toast = ({ message, type }: ToastProps) => {
  return (
    <div className={styles.toastContainer}>
      <div className={styles.toastContent}>
        {iconMap[type]}
        <span className={styles.toastMessage}>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
