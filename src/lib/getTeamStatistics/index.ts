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

const updateTeamStatistics = ({
  statistics,
  teamName,
  teamScore,
  opponentScore,
}: {
  statistics: Record<string, ITeamStatistics>;
  teamName: string;
  teamScore?: number | null;
  opponentScore?: number | null;
}) => {
  const teamStats = statistics[teamName] || {
    wins: 0,
    losses: 0,
    draws: 0,
    goalDifference: 0,
    points: 0,
    gamesPlayed: 0,
  };

  if (teamScore || teamScore === 0) {
    const hasWon = teamScore > Number(opponentScore);
    const hasLost = teamScore < Number(opponentScore);
    const updatedTeamStatistics = hasWon
      ? {
          ...teamStats,
          wins: teamStats.wins + 1,
          points: teamStats.points + POINTS.WIN,
        }
      : hasLost
      ? {
          ...teamStats,
          losses: teamStats.losses + 1,
          points: teamStats.points + POINTS.LOSS,
        }
      : {
          ...teamStats,
          draws: teamStats.draws + 1,
          points: teamStats.points + POINTS.DRAW,
        };

    return {
      ...statistics,
      [teamName]: {
        ...updatedTeamStatistics,
        goalDifference:
          teamStats.goalDifference + (teamScore - Number(opponentScore)),
        gamesPlayed: teamStats.gamesPlayed + 1,
      },
    };
  }

  return statistics;
};

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

      const [firstTeamName, secondTeamName] = teamNames;

      const firstTeamScore = individualMatchScore[firstTeamName];
      const secondTeamScore = individualMatchScore[secondTeamName];

      // If both teams have not played, then return
      if (firstTeamScore === null && secondTeamScore === null) {
        return stats;
      }

      const updatedStats = updateTeamStatistics({
        statistics: stats,
        teamName: firstTeamName,
        teamScore: firstTeamScore,
        opponentScore: secondTeamScore,
      });

      return updateTeamStatistics({
        statistics: updatedStats,
        teamName: secondTeamName,
        teamScore: secondTeamScore,
        opponentScore: firstTeamScore,
      });
    },
    {}
  );
  return teamStatistics;
};
