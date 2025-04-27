import { Outlet } from '@tanstack/react-router';
import Menubar from '../components/Menubar/Menubar';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { menus } from '../data/menu';
import Footer from '../components/Footer/Footer';

export default function Main() {
  return (
    <>
      <Menubar menus={menus} />
      <Outlet />
      <Footer />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
