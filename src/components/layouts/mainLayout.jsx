import React from "react";

const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <header className="sticky top-0 bg-white z-50 ">
        <div className=" w-[60%] mx-auto py-2 flex justify-between items-center ">
          {/* logo */}
          <div className="w-[80px]  relative aspect-video">
            <img src="./eko_logo_dark.svg" alt="logo" layout="fill" />
          </div>

          {/* user */}
          <div className="flex items-center gap-2 ">
            <button className="bg-gray-600 text-white aspect-square w-[40px] tracking-widest flex justify-center items-center rounded-full">
              VK
            </button>
          </div>
        </div>
      </header>

      <main className="min-h-[90vh]">{children}</main>

      {/* footer */}
      {/* <footer>This is footer</footer> */}
    </div>
  );
};

export default MainLayout;
