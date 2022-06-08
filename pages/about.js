import React from "react";

import { Navbar, Header } from "../components";

const about = () => {
  return (
    <div>
      <Navbar />
      <div>
        <div className="h-screen flex items-center justify-center z-10">
          <h1 className="animation_gradient_text text-[5rem] md:text-[10rem]">
            About.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default about;
