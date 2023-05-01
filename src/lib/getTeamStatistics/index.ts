import { POINTS } from "@/consts";

export interface ITeamStatistics {
  wins: number;
  losses: number;
  draws: number;
  goalDifference: number;
  points: number;
  gamesPlayed: number;
}

export interface IScoreCard {
  score: {
    [key: string]: number | null | undefined;
  };
  date: string;
}

/**
 * @description: Calculate following things:
 * a) win, loss and draw counts
 * b) a goal difference count per team (all goals scored - all goals conceded)
 * c) points total
 * d) games played.
 */
export const getTeamsStatistics = (scoresData: IScoreCard[]) => {
  const teamStatistics = scoresData.reduce<Record<string, ITeamStatistics>>(
    (stats, scoreDataWithDate) => {
      const individualMatchScore = scoreDataWithDate.score;
      const teamNames = Object.keys(individualMatchScore);

      if (teamNames.length !== 2) {
        throw Error("There should be 2 teams in the match.");
      }

      const [firstTeam, secondTeam] = Object.keys(individualMatchScore);

      const firstTeamScore = individualMatchScore[firstTeam];
      const secondTeamScore = individualMatchScore[secondTeam];

      // If both teams have not played, then return
      if (firstTeamScore === null && secondTeamScore === null) {
        return stats;
      }

      if (!stats?.[firstTeam]) {
        stats[firstTeam] = {
          wins: 0,
          losses: 0,
          draws: 0,
          goalDifference: 0,
          points: 0,
          gamesPlayed: 0,
        };
      }

      if (firstTeamScore || firstTeamScore === 0) {
        const hasWon = firstTeamScore > Number(secondTeamScore);
        const hasLost = firstTeamScore < Number(secondTeamScore);

        if (hasWon) {
          stats[firstTeam].wins++;
          stats[firstTeam].points += POINTS.WIN;
        } else if (hasLost) {
          stats[firstTeam].losses++;
          stats[firstTeam].points += POINTS.LOSS;
        } else {
          stats[firstTeam].draws++;
          stats[firstTeam].points += POINTS.DRAW;
        }

        stats[firstTeam].goalDifference +=
          firstTeamScore - Number(secondTeamScore);
        stats[firstTeam].gamesPlayed++;
      }

      if (!stats?.[secondTeam]) {
        stats[secondTeam] = {
          wins: 0,
          losses: 0,
          draws: 0,
          goalDifference: 0,
          points: 0,
          gamesPlayed: 0,
        };
      }

      if (secondTeamScore || secondTeamScore === 0) {
        const hasWon = secondTeamScore > Number(firstTeamScore);
        const hasLost = secondTeamScore < Number(firstTeamScore);

        if (hasWon) {
          stats[secondTeam].wins++;
          stats[secondTeam].points += POINTS.WIN;
        } else if (hasLost) {
          stats[secondTeam].losses++;
          stats[secondTeam].points += POINTS.LOSS;
        } else {
          stats[secondTeam].draws++;
          stats[secondTeam].points += POINTS.DRAW;
        }

        stats[secondTeam].goalDifference +=
          secondTeamScore - Number(firstTeamScore);
        stats[secondTeam].gamesPlayed++;
      }

      return stats;
    },
    {}
  );
  return teamStatistics;
};
