import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Loader from "@/components/loader";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);

  return (
    <SessionProvider session={pageProps.session}>
      <ToastContainer />
      <Layout loader={setOpen} toaster={(t) => toast(t.message)}>
        {open && <Loader open={open} />}
        <Component {...pageProps} loader={setOpen} />
      </Layout>
    </SessionProvider>
  );
}
