
import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import GlobalLayout from './global-layout';
import { HomePage, DetailPage, SettingPage } from './lazy';
import { routePath } from '@shared/constants/path';

export default function Router() {
  return (
    <Suspense>
      <Routes>
        <Route element={<GlobalLayout />}>
          <Route path={routePath.ROOT} element={<HomePage />} />
          <Route path={routePath.DETAIL} element={<DetailPage />} />
          <Route path={routePath.SETTING} element={<SettingPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}