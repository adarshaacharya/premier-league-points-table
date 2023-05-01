import { IScoreCard } from "../getTeamStatistics";

export interface IFixture {
  homeTeam: string;
  awayTeam: string;
  homeTeamScore: number | null | undefined;
  awayTeamScore: number | null | undefined;
  date: string;
}

export const getFixturesList = (scoresData: IScoreCard[]) => {
  const fixturesList = scoresData.reduce<Record<string, IFixture[]>>(
    (acc, currentMatch) => {
      const teamNames = Object.keys(currentMatch.score);

      if (teamNames.length !== 2) {
        throw new Error("Only 2 teams are allowed.");
      }

      const [homeTeam, awayTeam] = teamNames;

      if (!acc[homeTeam]) {
        acc[homeTeam] = [];
      }

      if (!acc[awayTeam]) {
        acc[awayTeam] = [];
      }

      const matchResult = {
        homeTeam,
        awayTeam,
        homeTeamScore: currentMatch.score[homeTeam],
        awayTeamScore: currentMatch.score[awayTeam],
        date: currentMatch.date,
      };

      acc[homeTeam].push(matchResult);
      acc[awayTeam].push(matchResult);

      return acc;
    },
    {}
  );

  return fixturesList;
};
