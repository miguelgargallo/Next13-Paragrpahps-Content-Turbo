/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { MainMenuApps } from "ui";
import { SubMenuItamaesan } from "ui";
import { Footer } from "ui";

export default function AppsPage() {
  console.log("✅ Index page by Pylar AI, a Miguel Gargallo Startup");
  return (
    <div className="min-w-screen flex min-h-screen flex-col bg-black">
      <Head>
        <title>SuperData App | Itamaesan</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <MainMenuApps />   
      <SubMenuItamaesan />
      <Footer />
    </div>
  );
}

