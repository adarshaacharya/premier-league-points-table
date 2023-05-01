# Premier League Points Table

[View Live](https://premier-league-green.vercel.app/)

## Tech Stack

- Next.js
- Typescript
- Emotion for styling
- jest for unit tests
- date-fns as date library

## Local Development

Make sure you have `Node.js >=18.x` and `pnpm >=8.x` installed on your machine.

First, run the development server:

```bash
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Majorily two routes are important :

- [http://localhost:3000](http://localhost:3000) to view table sorted based on points
- http://localhost:3000/clubName, example : [http://localhost:3000/Arsenal](http://localhost:3000/Arsenal) to view particular team fixtures and results. You can click on team name on table to view particular team results and upcoming matches.

To run unit tests

```bash
pnpm run test
```

## Folder structure:

- pages : routes for all pages
- lib : contains all utilities to format the data with respective unit tests for each utilities
- styles : global styles and other resuable styles
- data : mock and real data
- components: reusable components, ui components, icons


 Thank you ! 