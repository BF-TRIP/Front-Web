import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchPlaceDetail } from "@shared/apis/detail/get-place-detail";
import Overview from "../components/overview/overview";
import Facility from "../components/facility/facility";
import { PlaceDetail } from "../types/detail-response";
import Spinner from "@shared/components/spinner/spinner";

const DetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [place, setPlace] = useState<PlaceDetail | undefined>(undefined);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    setLoading(true);
    fetchPlaceDetail(Number(id))
      .then((data) => {
        setPlace(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch place detail:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading || !place) return <Spinner />; 

  return (
    <>
      <Overview place={place} />
      <Facility place={place} />
    </>
  );
};

export default DetailPage;
