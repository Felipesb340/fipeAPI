import Nav from "@/components/nav";
import "../styles/globals.css";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <div class='' >
        <Nav pathName={router.pathname} />
        <Component {...pageProps} />
      </div>
    </>
  );
}
