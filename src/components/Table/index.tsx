import { getTeamsStatistics , sortTeamByPoints} from "@/lib";
import styles from "./index.module.css";
import { TeamsType, scores } from "@/data/scores";
import Link from "next/link";
import { TEAM_LOGO_MAPPER } from "@/consts";
import Image from "next/image";

const Table = () => {
  const teamStatistics = getTeamsStatistics(scores);
  const teams = sortTeamByPoints(teamStatistics);

  return (
    <div>
      <p
        className="mb-1"
        style={{
          color: "gray",
        }}
      >
        Click on the club name to view the full details about fixtures and
        results.
      </p>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.tr}>
            <th className={styles.th}>Position</th>
            <th className={styles.th}>Club</th>
            <th className={styles.th}>Games played</th>
            <th className={styles.th}>Won</th>
            <th className={styles.th}>Drawn</th>
            <th className={styles.th}>Lost</th>
            <th className={styles.th}>Goal Difference</th>
            <th className={styles.th}>Points</th>
          </tr>
        </thead>

        <tbody className={styles.tbody}>
          {teams.map(([clubName, team], position) => {
            const clubLogo = TEAM_LOGO_MAPPER[clubName as TeamsType];
            return (
              <tr key={clubName} className={styles.tr}>
                <td className={styles.td}>{position + 1}</td>
                <td className={styles.td}>
                  <Link
                    href={`/fixtures/${clubName}`}
                    style={{
                      display: "flex",
                      gap: "0.8rem",
                      alignItems: "center",
                      justifyItems: "center",
                    }}
                  >
                    <p>{clubName}</p>
                    <Image
                      src={clubLogo}
                      width={25}
                      height={25}
                      alt={clubName}
                    />
                  </Link>
                </td>
                <td className={styles.td}>{team.gamesPlayed}</td>
                <td className={styles.td}>{team.wins}</td>
                <td className={styles.td}>{team.draws}</td>
                <td className={styles.td}>{team.losses}</td>
                <td className={styles.td}>{team.goalDifference}</td>
                <td className={styles.td}>{team.points}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
