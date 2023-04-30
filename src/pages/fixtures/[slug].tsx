import ICBack from "@/components/icons/ic-back";
import { TEAM_LOGO_MAPPER } from "@/consts";
import { TeamsType, scores } from "@/data/scores";
import {
  formatDate,
  formatTime,
  sortFixturesByDate,
  getFixturesList,
} from "@/lib";
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
    <div className="container">
      <div className="mt-2">
        <Link href="/" passHref>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              fontSize: "1.1rem",
            }}
          >
            <ICBack height="1.5rem" width="1.5rem" />
            View Points Table
          </div>
        </Link>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "2rem",
          marginBottom: "2rem",
          gap: "2rem",
        }}
      >
        <Image src={teamLogo} width={100} height={100} alt={teamName} />
        <h2> {teamName}</h2>
      </div>

      {fixtures.map((fixture, index) => {
        const { awayTeam, awayTeamScore, homeTeam, homeTeamScore, date } =
          fixture;

        const homeTeamLogo = TEAM_LOGO_MAPPER[homeTeam as TeamsType];
        const awayTeamLogo = TEAM_LOGO_MAPPER[awayTeam as TeamsType];

        const isFutureFixture =
          homeTeamScore === null || awayTeamScore === null;

        return (
          <div
            key={index}
            style={{
              padding: "1.5rem 1rem",
              boxShadow:
                "0 3px 7px 0 rgba(0, 0, 0, .13), 0 1px 2px 0 rgba(0, 0, 0, .11)",
              marginBottom: "2rem",
              borderRadius: "0.8rem",
              background: isFutureFixture ? "white" : "#F8F8F8",
            }}
          >
            <p
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                marginBottom: "1rem",
              }}
            >
              {formatDate(date)}
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "3rem",
                padding: "1rem 0",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  flex: 1,
                }}
              >
                <p>{homeTeam}</p>
                <Image
                  src={homeTeamLogo}
                  width={30}
                  height={30}
                  alt={homeTeam}
                />
              </div>

              <div
                style={{
                  fontWeight: 600,
                  fontSize: "1.1rem",
                  flex: 1,
                }}
              >
                {isFutureFixture
                  ? formatTime(date)
                  : `${homeTeamScore} - ${awayTeamScore}`}
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                }}
              >
                <Image
                  src={awayTeamLogo}
                  width={30}
                  height={30}
                  alt={homeTeam}
                />
                {awayTeam}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Fixture;
