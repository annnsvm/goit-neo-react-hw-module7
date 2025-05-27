import Header from 'components/Header/Header';
import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <div>
      <Header />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
