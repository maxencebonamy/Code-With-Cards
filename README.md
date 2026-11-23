# Code With Cards

A puzzle game that teaches programming logic with cards.

Pick a level, arrange instruction cards (move, turn, conditions, loops) to build a program, and run it to guide a squirrel to its hazelnut. The interface is in French and aimed at beginners. The game is available at <https://code-with-cards.maxencebonamy.fr>.

## Table of contents

- [Code With Cards](#code-with-cards)
	- [Table of contents](#table-of-contents)
	- [How it works](#how-it-works)
	- [Tech stack](#tech-stack)
	- [Repository structure](#repository-structure)
	- [Prerequisites](#prerequisites)
	- [Installation](#installation)
	- [Running locally](#running-locally)
	- [Useful scripts](#useful-scripts)
	- [Tests and quality](#tests-and-quality)
	- [License](#license)

## How it works

1. **Level selection**: the `/level` page lists 9 levels, grouped in three rows by difficulty (1 to 3).
2. **Level loading**: each level is a JSON file in `src/lib/data/levels` with a board and the list of available cards. The board is an array of strings, one per row: `s` is the squirrel, `h` the hazelnut, `o` a walkable tile and a space an empty tile.
3. **Programming**: the player moves cards from the hand to the heap to build a sequence. Available cards are `Forward`, `Right`, `Left`, `If`, `Else`, `IfEnd`, `For`, `While`, `Until` and `LoopEnd`.
4. **Execution**: the sequence runs one card every 500 ms. The squirrel moves or turns according to each card. The game ends in defeat if the squirrel leaves the board or steps on an empty tile.
5. **Result**: the game status goes through `idle`, `running`, `victory` and `defeat`. A victory overlay is shown when the level is solved.

## Tech stack

| Layer | Technologies |
| --- | --- |
| Framework | Next.js 14 (App Router), React 18 |
| Language | TypeScript |
| Styling | Tailwind CSS 3, `clsx`, `tailwind-merge`, Fredoka font (`next/font/google`) |
| State | Zustand |
| Icons | Lucide, custom SVG components |
| Tooling | pnpm, ESLint (`@maxencebonamy/eslint-config`), `ts-node`, `yargs` |

## Repository structure

```
.
├── src/
│   ├── app/                    Next.js routes: home, level list, level page
│   └── lib/
│       ├── components/         atoms, molecules and organisms
│       ├── data/               config.json and level definitions
│       ├── providers/          Level provider
│       ├── stores/             Zustand stores: cards and game
│       ├── styles/             Global CSS
│       └── utils/              Cards, colors, arrays, random, style helpers
├── scripts/                    Code generators (page, layout, component, store, util)
├── public/                     Static assets
```

Source files follow the pattern `name/name.tsx`, `name/name.type.ts`, `name/name.util.ts` and `name/index.ts` for each component, store and util. The `@/*` alias points to `src/*`. Files use tabs for indentation.

## Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- [pnpm](https://pnpm.io/) 8 or later (`npm install -g pnpm`)

## Installation

```bash
git clone git@github.com:maxencebonamy/Code-With-Cards.git
cd Code-With-Cards
pnpm install
```

## Running locally

```bash
pnpm dev
```

The application is served on <http://localhost:3000>.

To build and serve a production bundle:

```bash
pnpm build
pnpm start
```

## Useful scripts

| Command | Effect |
| --- | --- |
| `pnpm dev` | Start the Next.js development server |
| `pnpm build` | Build the application for production |
| `pnpm start` | Serve the production build |
| `pnpm lint` | Run ESLint |
| `pnpm lint:fix` | Run ESLint with auto-fix |
| `pnpm create:page <route>` | Generate a page under `src/app` |
| `pnpm create:layout` | Generate a layout |
| `pnpm create:component` | Generate a component |
| `pnpm create:store` | Generate a Zustand store |
| `pnpm create:util` | Generate a util |

## Tests and quality

```bash
pnpm lint
```

The repository has no automated tests. Code style is enforced by ESLint and types by `tsc` during `pnpm build`.

## License

This project is licensed under the [MIT License](LICENSE).
