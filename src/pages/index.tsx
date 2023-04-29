import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { getTeamsStatistics } from "@/lib/getTeamsStatistics";
import { scores } from "@/data/scores";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  getTeamsStatistics(scores);
  return (
    <>
      <main>
        <h1>League Table</h1>
      </main>
    </>
  );
}

export default Home;
