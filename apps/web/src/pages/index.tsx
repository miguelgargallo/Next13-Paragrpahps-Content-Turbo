/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { MainMenu } from "ui";
import { SubMenu } from "ui";
import { Footer } from "ui";

export default function Home() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>Super Menu | Sushi JS</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <MainMenu />   
      <SubMenu />
      <Footer />
    </div>
  );
}

