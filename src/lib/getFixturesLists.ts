import { IScoreCard } from "./getTeamsStatistics";

export interface IFixture {
  [key: string]: number | null | string | undefined;
  date : string
}

export const getFixturesList = (scoresData: IScoreCard[]) => {
  const fixturesList = scoresData.reduce<Record<string, IFixture[]>>(
    (acc, currentMatch) => {
      const teamNames = Object.keys(currentMatch.score);

      const [homeTeam, awayTeam] = teamNames;

      if (!acc[homeTeam]) {
        acc[homeTeam] = [];
      }

      if (!acc[awayTeam]) {
        acc[awayTeam] = [];
      }

      const matchResult = {
        [homeTeam]: currentMatch.score[homeTeam],
        [awayTeam]: currentMatch.score[awayTeam],
        date: currentMatch.date,
      };

      acc[homeTeam].push(matchResult);
      acc[awayTeam].push(matchResult);

      return acc;
    },
    {}
  );

  console.log({ fixturesList });
  return fixturesList;
};
