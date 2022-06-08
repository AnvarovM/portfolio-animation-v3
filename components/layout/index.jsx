import React from "react";

import { Navbar, BottomNav } from "..";

const Layout = ({ children }) => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>

      <main>
        {children}
      </main>

      <BottomNav />
    </div>
  );
};

export default Layout;
