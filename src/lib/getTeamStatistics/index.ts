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

      const updateTeamStats = (teamName: string, teamScore?: number | null) => {
        if (!stats?.[teamName]) {
          stats[teamName] = {
            wins: 0,
            losses: 0,
            draws: 0,
            goalDifference: 0,
            points: 0,
            gamesPlayed: 0,
          };
        }

        if (teamScore || teamScore === 0) {
          const opponentName =
            teamNames.find((name) => name !== teamName) || "";
          const opponentScore = Number(individualMatchScore[opponentName]);
          const hasWon = teamScore > opponentScore;
          const hasLost = teamScore < opponentScore;

          if (hasWon) {
            stats[teamName].wins++;
            stats[teamName].points += POINTS.WIN;
          } else if (hasLost) {
            stats[teamName].losses++;
            stats[teamName].points += POINTS.LOSS;
          } else {
            stats[teamName].draws++;
            stats[teamName].points += POINTS.DRAW;
          }

          stats[teamName].goalDifference += teamScore - opponentScore;
          stats[teamName].gamesPlayed++;
        }
      };
      updateTeamStats(firstTeam, firstTeamScore);
      updateTeamStats(secondTeam, secondTeamScore);
      return stats;
    },
    {}
  );
  return teamStatistics;
};
