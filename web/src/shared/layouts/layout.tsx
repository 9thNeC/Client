import { Outlet } from 'react-router-dom';

import Header from '@/shared/layouts/header';
import ScrollToTop from '@/shared/layouts/scroll-to-top';

const Layout = () => {
  return (
    <div className="flex max-h-dvh flex-col overflow-hidden">
      <Header />

      <main className="scrollbar-hide mx-auto min-h-dvh w-full flex-1 overflow-y-auto">
        <ScrollToTop />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
