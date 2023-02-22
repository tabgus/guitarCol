import Head from "next/head";
import React from "react";
import Header from "./header";
import Footer from "./footer";

export default function Layout({ children, title = "", description = "" }) {
  return (
    <>
      <Head>
        <title>{`Guitarras Colombia - ${title}`}</title>
        <meta name="description" content={description} />
      </Head>
      <Header />
      {children}
      <Footer />
    </>
  );
}
