/* eslint-disable react/jsx-no-comment-textnodes */
import Head from "next/head";
import { MainMenuApps } from "ui";
import { MainMenuMobileApps } from "ui";
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
      <div className="flex flex-col m-2 items-center justify-center bg-black">
      </div>
      <div className="flex flex-col items-center justify-center bg-white text-black">
        <p
          className="text-2xl font-bold text-center py-4"
        >
          What is Itamaesan
        </p>
        <p
          className="text-md text-center py-4"
        >
          Itamaesan is a SuperData Framework made by Pylar AI, a Miguel Gargallo Startup,
        </p>
      </div>
      <div className="py-4">
        <MainMenuMobileApps />
      </div>
      <Footer />
    </div>
  );
}

