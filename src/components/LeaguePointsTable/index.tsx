import { getTeamsStatistics, sortTeamByPoints } from "@/lib";
import { TeamsType, scores } from "@/data/scores";
import Link from "next/link";
import { TEAM_LOGO_MAPPER } from "@/consts";
import Image from "next/image";
import { Table, Th, Tr, Td, Thead, Tbody } from "@/styles/table.styles";
import { linkStyles } from "./styles";

const TABLE_HEADERS = [
  "Position",
  "Club",
  "Games Played",
  "Won",
  "Drawn",
  "Lost",
  "Goal Difference",
  "Points",
];

const LeaguePointsTable = () => {
  const teamStatistics = getTeamsStatistics(scores);
  const teams = sortTeamByPoints(teamStatistics);

  const TABLE_ROWS = teams.map(([clubName, team], position) => {
    const clubLogo = TEAM_LOGO_MAPPER[clubName as TeamsType];
    return (
      <Tr key={clubName}>
        <Td>{position + 1}</Td>
        <Td>
          <Link href={`/fixtures/${clubName}`} css={linkStyles}>
            <p>{clubName}</p>
            <Image src={clubLogo} width={25} height={25} alt={clubName} />
          </Link>
        </Td>
        <Td>{team.gamesPlayed}</Td>
        <Td>{team.wins}</Td>
        <Td>{team.draws}</Td>
        <Td>{team.losses}</Td>
        <Td>{team.goalDifference}</Td>
        <Td>{team.points}</Td>
      </Tr>
    );
  });

  return (
    <Table>
      <Thead>
        <Tr>
          {TABLE_HEADERS.map((header) => (
            <Th key={header}>{header}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>{TABLE_ROWS}</Tbody>
    </Table>
  );
};

export default LeaguePointsTable;
