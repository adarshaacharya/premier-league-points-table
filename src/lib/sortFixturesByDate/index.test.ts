import { mockFixturesList } from "@/data/_mockScores";
import { sortFixturesByDate } from "./";

describe("sortFixturesByDate", () => {
  it("should sort fixtures array in descending order based on date", () => {
    const expectedOutput = [
      {
        awayTeam: "Liverpool",
        awayTeamScore: 1,
        date: "2021-03-05T17:00:00",
        homeTeam: "Man UTD",
        homeTeamScore: 0,
      },
      {
        awayTeam: "Arsenal",
        awayTeamScore: 1,
        date: "2021-05-04T14:00:00",
        homeTeam: "Man UTD",
        homeTeamScore: 3,
      },
    ];

    const sortedFixtures = sortFixturesByDate(mockFixturesList["Man UTD"]);

    expect(sortedFixtures).toEqual(expectedOutput);
  });

  it("should return empty array if input fixtures array is empty", () => {
    const fixtures: any[] = [];
    const expectedOutput: any[] = [];

    const actualOutput = sortFixturesByDate(fixtures);

    expect(actualOutput).toEqual(expectedOutput);
  });
});
