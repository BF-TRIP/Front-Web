import { useEffect, useState } from "react";
import { getUserFromURL } from "@shared/utils/get-user-from-url";
import HeaderSection from "../components/header-section/header-section";
import RecommendSection from "../components/recommend-section/recommend-section";
import NearbySection from "../components/nearby-section/nearby-section";
import { fetchSavedScraps } from "@shared/apis/home/scrap";

const Home = () => {
  const [user, setUser] = useState(() => getUserFromURL());
  const [savedScraps, setSavedScraps] = useState<number[]>([]);

  useEffect(() => {
    const userData = getUserFromURL();
    if (userData) {
      setUser(userData);
      fetchSavedScraps(userData.userNumber).then(setSavedScraps);
    }
  }, []);

  const userNumber = user?.userNumber || 32;
  const userName = user?.userName || "모행";
  const gpsX = user?.gpsX || 128.1;
  const gpsY = user?.gpsY || 36.1;

  return (
    <>
      <HeaderSection />
      <RecommendSection
        userNumber={userNumber}
        userName={userName}
        savedScraps={savedScraps}
      />
      <NearbySection
        gpsX={gpsX}
        gpsY={gpsY}
        userNumber={userNumber}
        savedScraps={savedScraps}
      />
    </>
  );
};

export default Home;
