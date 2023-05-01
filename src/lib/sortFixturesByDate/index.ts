import { IFixture } from "../getFixturesList";

export const sortFixturesByDate = (fixtures: IFixture[]) => {
  return fixtures.sort((firstMatch, secondMatch) => {
    return (
      new Date(firstMatch.date).getTime() - new Date(secondMatch.date).getTime()
    );
  });
};
