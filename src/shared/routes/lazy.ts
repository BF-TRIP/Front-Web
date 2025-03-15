import { lazy } from "react";

export const HomePage = lazy(() => import("@pages/home/page/home"));
export const DetailPage = lazy(() => import("@pages/detail/page/detail"));