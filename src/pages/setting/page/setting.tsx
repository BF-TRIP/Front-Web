import { useState } from "react";
import Header from "../components/header/header";
import SettingList from "../components/list/list";
import BottomSheet from "../components/bottom-sheet/bottom-sheet";
import * as styles from "./setting.css";
import { SETTINGS } from "@shared/constants/settings";
import { BOTTOM_SHEET_MESSAGES } from "@shared/constants/bottom-sheet-messages";

const SettingPage = () => {
  const [isLogoutOpen, setIsLogoutOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);

  const handleWithdraw = () => {
    if (window.webkit?.messageHandlers?.serverEvent) {
      window.webkit.messageHandlers.serverEvent.postMessage("quit");
    } else {
      console.error("iOS랑 연결 실패,,,");
    }
    setIsWithdrawOpen(false);
  };

  return (
    <>
      <Header />
      <SettingList
        title={SETTINGS.APP_INFO.TITLE}
        items={[
          {
            title: SETTINGS.APP_INFO.TERMS_PRIVACY,
            onClick: () => console.log("약관 페이지 이동"),
          },
          {
            title: SETTINGS.APP_INFO.VERSION_INFO,
            subDescription: SETTINGS.APP_INFO.CURRENT_VERSION,
            description: SETTINGS.APP_INFO.LATEST_VERSION,
          },
        ]}
      />

      <div className={styles.divider} />

      <SettingList
        items={[
          // {
          //   title: SETTINGS.ACCOUNT_MANAGEMENT.LOGOUT,
          //   onClick: () => setIsLogoutOpen(true),
          // },
          {
            title: SETTINGS.ACCOUNT_MANAGEMENT.WITHDRAW,
            onClick: () => setIsWithdrawOpen(true),
          },
        ]}
      />

      <BottomSheet
        isOpen={isLogoutOpen}
        onClose={() => setIsLogoutOpen(false)}
        title={BOTTOM_SHEET_MESSAGES.LOGOUT.TITLE}
        confirmText={BOTTOM_SHEET_MESSAGES.LOGOUT.CONFIRM}
        cancelText={BOTTOM_SHEET_MESSAGES.LOGOUT.CANCEL}
        onConfirm={() => {
          //TODO: 로그아웃 기능 구현
          console.log("로그아웃 실행");
          setIsLogoutOpen(false);
        }}
      />

      <BottomSheet
        isOpen={isWithdrawOpen}
        onClose={() => setIsWithdrawOpen(false)}
        title={BOTTOM_SHEET_MESSAGES.WITHDRAW.TITLE}
        confirmText={BOTTOM_SHEET_MESSAGES.WITHDRAW.CONFIRM}
        cancelText={BOTTOM_SHEET_MESSAGES.WITHDRAW.CANCEL}
        onConfirm={handleWithdraw}
      />
    </>
  );
};

export default SettingPage;
