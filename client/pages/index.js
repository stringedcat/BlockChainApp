import Head from "next/head";
import Image from "next/image";

import { Navbar, Welcome, Footer, Services, Transactions } from "../components";
export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="gradient-bg-welcome">
        <Navbar />
        <Welcome />
      </div>
      <Services />
      <Transactions />
      <Footer />
      {/*    <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
    </div>
  );
}
