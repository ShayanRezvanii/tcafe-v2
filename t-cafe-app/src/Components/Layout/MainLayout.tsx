/** @format */

import BackgroundSection from "../Mobile/BackgroundSection";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function MainLayout() {
  return (
    <div className=" w-full h-full  overflow-hidden fixed">
      <div className=" block sm:hidden">
        <BackgroundSection></BackgroundSection>
      </div>
    </div>
  );
}

export default MainLayout;
