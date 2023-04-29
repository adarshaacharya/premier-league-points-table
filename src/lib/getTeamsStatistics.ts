import { POINTS } from "@/consts/POINTS";
import { TeamsType } from "@/data/scores";

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
      Object.entries(individualMatchScore).forEach(
        ([currentTeam, ownScore]) => {
          if (!ownScore) {
            return;
          }

          if (!stats?.[currentTeam]) {
            stats[currentTeam] = {
              wins: 0,
              losses: 0,
              draws: 0,
              goalDifference: 0,
              points: 0,
              gamesPlayed: 0,
            };
          }

          const opponentTeam = Object.keys(individualMatchScore).find(
            (opponent) => opponent !== currentTeam
          );

          const opponentScore = Number(
            individualMatchScore[opponentTeam || ""]
          );

          const hasWon = ownScore > opponentScore;
          const hasLost = ownScore < opponentScore;

          if (hasWon) {
            stats[currentTeam].wins++;
            stats[currentTeam].points += POINTS.WIN;
          } else if (hasLost) {
            stats[currentTeam].losses++;
            stats[currentTeam].points += POINTS.LOSS;
          } else {
            stats[currentTeam].draws++;
            stats[currentTeam].points += POINTS.DRAW;
          }

          stats[currentTeam].goalDifference += ownScore - opponentScore;
          stats[currentTeam].gamesPlayed++;
        }
      );

      return stats;
    },
    {}
  );

  return teamStatistics;
};

