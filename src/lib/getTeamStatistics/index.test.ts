import {
  mockClubsStatistics,
  mockFullScoreData,
  mockSingleTeam,
} from "@/data/_mockScores";
import { IScoreCard, getTeamsStatistics } from ".";

describe("getTeamsStatistics", () => {
  it("should return empty object for empty scores data", () => {
    const result = getTeamsStatistics([]);
    expect(result).toEqual({});
  });

  it("should throw error for scores data with more or less than 2 teams", () => {
    expect(() => getTeamsStatistics(mockSingleTeam)).toThrow(
      "There should be 2 teams in the match."
    );
    expect(() => getTeamsStatistics(mockSingleTeam)).toThrow(
      "There should be 2 teams in the match."
    );
  });

  it("should calculate team each statistics correctly", () => {
    const result = getTeamsStatistics(mockFullScoreData);
    expect(result).toEqual(mockClubsStatistics);
  });
});
