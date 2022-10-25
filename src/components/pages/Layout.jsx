import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import AppNav from './AppNav';
import { useState } from 'react';
import { Menu } from './phonebook/Menu';

const Layout = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(prev => !prev);
  };

  return (
    <div>
      <AppNav toggleMenu={toggleMenu} />
      {menu && <Menu open={menu} toggleMenu={toggleMenu} />}
      <Suspense fallback={<div>...Loading</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;
