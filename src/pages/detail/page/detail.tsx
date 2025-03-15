import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlaceDetail } from "@shared/apis/detail/get-place-detail";
import Overview from "../components/overview/overview";
import Facility from "../components/facility/facility";
import { PlaceDetail } from "../types/detail-response";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState<PlaceDetail | null>(null);

  useEffect(() => {
    if (!id) return;
    fetchPlaceDetail(Number(id))
      .then(setPlace)
      .catch((err) => console.error("Failed to fetch place detail:", err));
  }, [id]);

  if (!place) return <p>Loading...</p>;

  return (
    <>
      <Overview place={place} />
      <Facility place={place} />
    </>
  );
};

export default DetailPage;
