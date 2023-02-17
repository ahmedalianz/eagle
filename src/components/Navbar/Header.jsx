import Toolbar from "./Toolbar/Toolbar";
import SideDrawer from "./SideDrawer/SideDrawer";
import Backdrop from "./Backdrop/Backdrop";
import React, { useState } from "react";
export default function Header() {
  const [sideDrawerOpen, setSideDrawerOpen] = useState(false);

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen((prevState) => !prevState.sideDrawerOpen);
  };

  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  return (
    <div>
      <Toolbar
        isOpen={sideDrawerOpen}
        drawerClickHandler={drawerToggleClickHandler}
      />
      <SideDrawer show={sideDrawerOpen} />
      {sideDrawerOpen && <Backdrop click={backdropClickHandler} />}
    </div>
  );
}
