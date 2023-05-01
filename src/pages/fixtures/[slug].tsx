import FixtureCard from "@/components/FixtureCard";
import Flex from "@/components/Flex";
import ICBack from "@/components/icons/ic-back";
import { TEAM_LOGO_MAPPER } from "@/consts";
import { TeamsType, scores } from "@/data/scores";
import {
  sortFixturesByDate,
  getFixturesList,
} from "@/lib";
import { Container } from "@/styles/container.styles";
import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Fixture = () => {
  const router = useRouter();

  const teamName = String(router.query.slug);
  const teamLogo = TEAM_LOGO_MAPPER[teamName as TeamsType];
  const teamFixturesList = getFixturesList(scores)[teamName];

  if (!teamFixturesList) {
    return <div>No fixtures found for given team {teamName}</div>;
  }

  const fixtures = sortFixturesByDate(teamFixturesList);

  return (
    <Container>
      <div
        css={{
          marginTop: "2rem",
        }}
      >
        <Link href="/" passHref>
          <Flex
            align="center"
            gap="1rem"
            css={css`
              font-size: 1.1rem;
            `}
          >
            <ICBack height="1.5rem" width="1.5rem" />
            View Points Table
          </Flex>
        </Link>
      </div>

      <Flex
        align="center"
        gap="2rem"
        css={css`
          margin: 2rem 0;
        `}
      >
        <Image src={teamLogo} width={100} height={100} alt={teamName} />
        <h2>{teamName}</h2>
      </Flex>

      {fixtures.map((fixture, index) => {
        const { awayTeam, awayTeamScore, homeTeam, homeTeamScore, date } =
          fixture;

        return (
          <FixtureCard
            key={index}
            index={index}
            date={date}
            homeTeam={homeTeam}
            homeTeamScore={homeTeamScore}
            awayTeam={awayTeam}
            awayTeamScore={awayTeamScore}
          />
        );
      })}
    </Container>
  );
};

export default Fixture;
