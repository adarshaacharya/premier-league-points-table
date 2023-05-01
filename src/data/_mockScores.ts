import { IScoreCard } from "@/lib";

export const mockThreeTeamScore: IScoreCard[] = [
  {
    date: "2021-05-04T14:00:00",
    score: {
      "Man UTD": 2,
      Liverpool: 1,
      Chelsea: 3,
    },
  },
];

export const mockFullScoreData: IScoreCard[] = [
  {
    date: "2021-05-04T14:00:00",
    score: {
      "Man UTD": 3,
      Arsenal: 1,
    },
  },
  {
    date: "2021-05-05T11:00:00",
    score: {
      Arsenal: 2,
      Liverpool: 2,
    },
  },
  {
    date: "2021-03-05T17:00:00",
    score: {
      "Man UTD": 0,
      Liverpool: 1,
    },
  },
];

export const mockSingleTeam: IScoreCard[] = [
  {
    date: "2021-05-04T14:00:00",
    score: {
      "Man UTD": null,
    },
  },
];

export const mockFixturesList = {
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
};


export const mockClubsStatistics  = {
  "Man UTD": {
    wins: 1,
    losses: 1,
    draws: 0,
    goalDifference: 1,
    points: 3,
    gamesPlayed: 2,
  },
  Liverpool: {
    wins: 1,
    losses: 0,
    draws: 1,
    goalDifference: 1,
    points: 4,
    gamesPlayed: 2,
  },
  Arsenal: {
    wins: 0,
    losses: 1,
    draws: 1,
    goalDifference: -2,
    points: 1,
    gamesPlayed: 2,
  },
};
