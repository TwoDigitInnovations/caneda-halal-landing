import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import { useEffect, useState, createContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Loader from "@/components/loader";
import { useTranslation } from "react-i18next";
import { appWithI18Next } from "ni18n";
import { ni18nConfig } from "../../ni18n.config";

export const languageContext = createContext();

function App({ Component, pageProps }) {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [globallang, setgloballang] = useState("es");
  const { i18n } = useTranslation();
  const { t } = useTranslation();

  useEffect(() => {
    const defaultLanguage = "en";
    localStorage.setItem("LANGUAGE", defaultLanguage);
    i18n.changeLanguage(defaultLanguage);
    setgloballang(defaultLanguage);
  }, []);

  return (
    <SessionProvider session={pageProps.session}>
      <ToastContainer />
      <languageContext.Provider value={[globallang, setgloballang]}>
        <Layout loader={setOpen} toaster={(t) => toast(t.message)}>
          {open && <Loader open={open} />}
          <Component {...pageProps} loader={setOpen} />
        </Layout>
      </languageContext.Provider>
    </SessionProvider>
  );
}
export default appWithI18Next(App, ni18nConfig);
