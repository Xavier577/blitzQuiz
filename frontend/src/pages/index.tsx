import type { NextPage } from "next";
import { Fragment } from "react";
import Head from "next/head";
import Image from "next/image";
import NavBar from "../components/nav-bar";

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>blitzQuiz</title>
        <link rel="icon" href="/blitzQuiz-logo.svg" />
      </Head>

      <main>
        <NavBar />
      </main>
    </Fragment>
  );
};

export default Home;
