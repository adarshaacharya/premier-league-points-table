import { Inter } from "next/font/google";
import { getTeamsStatistics } from "@/lib/getTeamsStatistics";
import { scores } from "@/data/scores";
import { getFixturesList } from "@/lib/getFixturesLists";
import React from "react";
import Link from "next/link";
import { sortTeamByPoints } from "@/lib/sortTeamsByPoints";

const inter = Inter({ subsets: ["latin"] });

function Home() {
  const teamStatistics = getTeamsStatistics(scores);
  const teams = sortTeamByPoints(teamStatistics);

  return (
    <React.Fragment>
      <main>
        <h1>League Table</h1>
        <table border={1}>
          <thead>
            <tr>
              <th>Team</th>
              <th>Games played</th>
              <th>Won</th>
              <th>Drawn</th>
              <th>Lost</th>
              <th>Goal Difference</th>
              <th>Points</th>
            </tr>
          </thead>

          <tbody>
            {teams.map(([teamName, team]) => (
              <tr key={teamName}>
                <th>
                  <Link href={`/fixtures/${teamName}`}>{teamName}</Link>
                </th>
                <th>{team.gamesPlayed}</th>
                <th>{team.wins}</th>
                <th>{team.draws}</th>
                <th>{team.losses}</th>
                <th>{team.goalDifference}</th>
                <th>{team.points}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </React.Fragment>
  );
}

export default Home;
