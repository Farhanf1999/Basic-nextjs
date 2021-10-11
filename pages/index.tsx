import type { NextPage } from "next";
import Image from "next/image";
import Layout from "../components/layout";

const Home: NextPage = () => {
  return (
    //return hanya boleh 1 / solusi <></> bungkus(fragmen)
    <>
      {/* <Head>
        <title>Next JS Basic | Home Page</title>
        <meta name="description" content="Basic Next JS" />
      </Head> */}
      <Layout pageTitle="Home Page">
        {/* Lazy-load */}
        <Image src="/nuclear.png" width={200} height={200} alt="nuclear" />
        <img
          src="/nuclear.png"
          style={{ width: 200, height: 200 }}
          alt="nuclear"
        />
        <h1 className={"title-homepage"}>Welcome Farhan</h1>
      </Layout>
    </>
  );
};

export default Home;
