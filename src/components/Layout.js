/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { useRouter } from "next/router";

const Layout = ({ children, loader, toaster }) => {
  const router = useRouter();

  useEffect(() => {
    const start = () => loader(true);
    const end = () => loader(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    loader(false);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
    };
  }, []);

  return (
    <>
      <div className="flex-1 flex-col bg-white relative">
        <div className="z-50 fixed w-full top-0 bg-white shadow-md">
          <Navbar loader={loader} toaster={toaster} />
        </div>

        <div className="z-0 pt-20 max-w-screen">
          <main className="flex-1">{children}</main>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default Layout;
