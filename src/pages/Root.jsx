import { useLayoutEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ClockLoader } from "react-spinners";
import Footer from "../components/Footer";
import GlobalNavigation from "../components/GlobalNavigation";
import ScrollToTop from "../utils/toTop";

const Root = () => {
  const [loadingPage, setLoadingPage] = useState(false);
  const { pathname } = useLocation();

  // useLayoutEffect(() => {
  //   setLoadingPage(true);
  //   setTimeout(() => {
  //     setLoadingPage(false);
  //   }, 2000);
  // }, [pathname]);

  if (loadingPage) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-blue-50">
        <ClockLoader color="#36d7b7" />
      </div>
    );
  }

  return (
    <>
      {/* move the page to top */}
      <ScrollToTop />
      <GlobalNavigation />

      <Outlet />

      <Footer />
    </>
  );
};

export default Root;
