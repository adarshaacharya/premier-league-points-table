import {
  mockFullScoreData,
  mockSingleTeam,
  mockThreeTeamScore,
} from "@/data/_mockScores";
import { getFixturesList } from ".";

describe("getFixturesList", () => {
  it("returns an empty object if empty fixture list is provided", () => {
    const fixturesList = getFixturesList([]);
    expect(fixturesList).toEqual({});
  });

  it("should return fixtures list grouped by teams", () => {
    const fixturesList = getFixturesList(mockFullScoreData);

    expect(fixturesList).toEqual({
      "Man UTD": [
        {
          homeTeam: "Man UTD",
          awayTeam: "Arsenal",
          homeTeamScore: 3,
          awayTeamScore: 1,
          date: "2021-05-04T14:00:00",
        },
        {
          homeTeam: "Man UTD",
          awayTeam: "Liverpool",
          homeTeamScore: 0,
          awayTeamScore: 1,
          date: "2021-03-05T17:00:00",
        },
      ],
      Arsenal: [
        {
          homeTeam: "Man UTD",
          awayTeam: "Arsenal",
          homeTeamScore: 3,
          awayTeamScore: 1,
          date: "2021-05-04T14:00:00",
        },
        {
          homeTeam: "Arsenal",
          awayTeam: "Liverpool",
          homeTeamScore: 2,
          awayTeamScore: 2,
          date: "2021-05-05T11:00:00",
        },
      ],
      Liverpool: [
        {
          homeTeam: "Arsenal",
          awayTeam: "Liverpool",
          homeTeamScore: 2,
          awayTeamScore: 2,
          date: "2021-05-05T11:00:00",
        },
        {
          homeTeam: "Man UTD",
          awayTeam: "Liverpool",
          homeTeamScore: 0,
          awayTeamScore: 1,
          date: "2021-03-05T17:00:00",
        },
      ],
    });
  });

  it("should throw error if exactly two teams are not found", () => {
    expect(() => getFixturesList(mockSingleTeam)).toThrow(
      "Only 2 teams are allowed."
    );

    expect(() => getFixturesList(mockThreeTeamScore)).toThrow(
      "Only 2 teams are allowed."
    );
  });
});
