import { ITeamStatistics } from "../getTeamStatistics";
import { sortTeamByPoints } from "./";
import { mockClubsStatistics } from "@/data/_mockScores";

describe("sortTeamByPoints", () => {
  it("should sort teams by points in descending order", () => {
    const sortedTeams = sortTeamByPoints(mockClubsStatistics);
    expect(sortedTeams[0][0]).toEqual("Liverpool");
    expect(sortedTeams[1][0]).toEqual("Man UTD");
    expect(sortedTeams[2][0]).toEqual("Arsenal");
  });

  it("should return an empty array if teams is empty", () => {
    const teams: Record<string, ITeamStatistics> = {};
    const sortedTeams = sortTeamByPoints(teams);
    expect(sortedTeams).toEqual([]);
  });

  it("should return an array with a single team if teams has only one element", () => {
    const teams: Record<string, ITeamStatistics> = {
      "Man UTD": mockClubsStatistics["Man UTD"],
    };
    const sortedTeams = sortTeamByPoints(teams);
    expect(sortedTeams.length).toEqual(1);
    expect(sortedTeams[0][0]).toEqual("Man UTD");
  });

  it("should handle ties correctly", () => {
    const teams: Record<string, ITeamStatistics> = {
      Liverpool: {
        gamesPlayed: 10,
        wins: 8,
        draws: 2,
        losses: 0,
        goalDifference: 20,
        points: 26,
      },
      ManCity: {
        gamesPlayed: 10,
        wins: 7,
        draws: 5,
        losses: 0,
        goalDifference: 25,
        points: 26,
      },
      Chelsea: {
        gamesPlayed: 10,
        wins: 8,
        draws: 2,
        losses: 0,
        goalDifference: 15,
        points: 26,
      },
    };

    const sortedTeams = sortTeamByPoints(teams);
    expect(sortedTeams[0][0]).toEqual("Liverpool");
    expect(sortedTeams[1][0]).toEqual("ManCity");
    expect(sortedTeams[2][0]).toEqual("Chelsea");
  });
});
