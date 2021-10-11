import Header from "../../components/header";
import Footer from "../../components/footer";
import styles from "../../styles/Layout.module.css";
import { ReactNode } from "react";
import Head from "next/head";

interface LayoutProps {
  children: ReactNode;
  pageTitle: string;
}
export default function Layout(props: LayoutProps) {
  const { children, pageTitle } = props;
  return (
    <>
      <Head>
        <title>Next JS Basic | {pageTitle}</title>
        <meta name="description" content="Basic Next JS" />
      </Head>

      <div className={styles.container}>
        <Header />
        <div className={styles.content}>{children}</div>
        <Footer />
      </div>
    </>
  );
}
