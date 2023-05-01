import LeaguePointsTable from "@/components/LeaguePointsTable";
import { Container } from "@/styles/container.styles";
import Head from "next/head";
import React from "react";

const Home = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Premier League Points Table</title>
      </Head>
      <Container>
        <h1
          css={{
            fontWeight: "bold",
            marginTop: "2rem",
            marginBottom: "2rem",
          }}
        >
          Premier League Points Table
        </h1>
        <p
          css={{
            marginBottom: "1rem",
            color: "gray",
          }}
        >
          Click on the club name to view the full details about fixtures and
          results.
        </p>
        <LeaguePointsTable />
      </Container>
    </React.Fragment>
  );
};

export default Home;
