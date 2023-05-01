import { TEAM_LOGO_MAPPER } from "@/consts";
import { TeamsType } from "@/data/scores";
import { formatDate, formatTime } from "@/lib";
import Image from "next/image";
import { FixtureCardContainer, dateStyles, timeStyles } from "./styles";
import Flex from "../Flex";
import { css } from "@emotion/react";

interface IFixtureCardProps {
  index: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeTeamScore?: number | null;
  awayTeamScore?: number | null;
}

const FixtureCard = ({
  awayTeam,
  awayTeamScore,
  date,
  homeTeam,
  homeTeamScore,
  index,
}: IFixtureCardProps) => {
  const homeTeamLogo = TEAM_LOGO_MAPPER[homeTeam as TeamsType];
  const awayTeamLogo = TEAM_LOGO_MAPPER[awayTeam as TeamsType];

  const isFutureFixture = homeTeamScore === null || awayTeamScore === null;

  return (
    <FixtureCardContainer key={index} isFutureFixture={isFutureFixture}>
      <p css={dateStyles}>{formatDate(date)}</p>

      <Flex
        align="center"
        justify="space-between"
        gap="3rem"
        css={css`
          padding: 1rem 0;
        `}
      >
        <Flex
          align="center"
          gap="1rem"
          justify="flex-end"
          css={css`
            flex: 1;
          `}
        >
          <p>{homeTeam}</p>
          <Image src={homeTeamLogo} width={30} height={30} alt={homeTeam} />
        </Flex>

        <div
          css={timeStyles}
        
        >
          {isFutureFixture
            ? formatTime(date)
            : `${homeTeamScore} - ${awayTeamScore}`}
        </div>

        <Flex
          align="center"
          justify="flex-start"
          gap="1rem"
          css={css`
            flex: 1;
          `}
        >
          <Image src={awayTeamLogo} width={30} height={30} alt={homeTeam} />
          {awayTeam}
        </Flex>
      </Flex>
    </FixtureCardContainer>
  );
};

export default FixtureCard;
