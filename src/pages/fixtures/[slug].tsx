import { scores } from "@/data/scores";
import { getFixturesList } from "@/lib/getFixturesLists";
import { sortFixturesByDate } from "@/lib/sortFixturesByDate";
import { useRouter } from "next/router";

const Fixture = () => {
  const router = useRouter();

  const slug = String(router.query.slug);
  const fixturesList = getFixturesList(scores)[slug];

  if (!fixturesList) {
    return <div>No fixtures found for given team {slug}</div>;
  }

  const sortedFixtures = sortFixturesByDate(fixturesList);

  return (
    <pre>
      Team : {slug}
      {JSON.stringify(sortedFixtures, null, 2)}
    </pre>
  );
};

export default Fixture;
