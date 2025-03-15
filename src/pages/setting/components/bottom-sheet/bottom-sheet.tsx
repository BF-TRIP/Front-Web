import { useEffect, useState } from "react";
import * as styles from "./bottom-sheet.css";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  title: string | string[]; 
  confirmText: string;
  cancelText?: string;
  onConfirm: () => void;
}

const BottomSheet = ({
    isOpen,
    onClose,
    title,
    confirmText,
    cancelText = "취소",
    onConfirm,
  }: BottomSheetProps) => {
    const [isVisible, setIsVisible] = useState(isOpen);
  
    useEffect(() => {
      if (isOpen) {
        setIsVisible(true);
      } else {
        setTimeout(() => setIsVisible(false), 300);
      }
    }, [isOpen]);
  
    if (!isVisible) return null;
  
    return (
      <div className={`${styles.backdrop} ${isOpen ? styles.show : ""}`} onClick={onClose}>
        <div className={`${styles.sheetContainer} ${isOpen ? styles.slideUp : styles.slideDown}`} onClick={(e) => e.stopPropagation()}>
          <div className={styles.content}>
            {/* title이 배열이면 여러 줄로 렌더링 */}
            {Array.isArray(title) ? (
              title.map((line, index) => <p key={index} className={styles.title}>{line}</p>)
            ) : (
              <p className={styles.title}>{title}</p>
            )}
          </div>
          <div className={styles.actions}>
            <button className={styles.button({ variant: "confirm" })} onClick={onConfirm}>
              {confirmText}
            </button>
            <button className={styles.button({ variant: "cancel" })} onClick={onClose}>
              {cancelText}
            </button>
          </div>
        </div>
      </div>
    );
  };
  

export default BottomSheet;
