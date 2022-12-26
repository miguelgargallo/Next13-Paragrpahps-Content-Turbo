/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { MainMenuDev } from "ui";
import { SubMenu } from "ui";
import { Footer } from "ui";

export default function DevPage() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>SuperData Dev | Pylar AI</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <MainMenuDev />   
      <SubMenu />
      <Footer />
    </div>
  );
}

