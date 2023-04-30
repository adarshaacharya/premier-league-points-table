import { ITeamStatistics } from "./getTeamsStatistics";

/**
 * @description Sorts a given object of team statistics by their points in ascending order.
 * @param {Record<string, ITeamStatistics>} teams - The object of team statistics to be sorted.
 * @returns {Array<[string, ITeamStatistics]>} - The sorted array of team statistics, where each entry is a tuple containing the team name and its statistics.
 */
export const sortTeamByPoints = (teams: Record<string, ITeamStatistics>) => {
  return Object.entries(teams).sort(
    ([, firstTeam], [, nextTeam]) => nextTeam.points - firstTeam.points
  );
};
