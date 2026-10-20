# LearnHub LMS

A single-page Learning Management System built with React 19, Vite and React Router.

The app lives in [`lms-app/`](lms-app/). Feature specs are in [`specs/`](specs/).

## Prerequisites

- **Node.js** 20.19+ or 22.12+ (required by Vite 8)
- **npm** (comes with Node.js)
- An internet connection: the Instructors page loads data from
  `https://jsonplaceholder.typicode.com/users`

Check your versions:

```bash
node -v
npm -v
```

## Getting started

```bash
# 1. Go to the app folder
cd lms-app

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open the URL printed in the terminal (usually http://localhost:5173). The page reloads automatically when you edit files.

## Available scripts

Run these from inside `lms-app/`:

| Command           | What it does                                         |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload         |
| `npm run build`   | Create a production build in `lms-app/dist/`         |
| `npm run preview` | Serve the production build locally to check it       |
| `npm run lint`    | Lint the code with Oxlint                            |

## Pages

| Route            | Page          |
| ---------------- | ------------- |
| `/`              | Home          |
| `/courses`       | Courses       |
| `/registrations` | Registrations |
| `/contact`       | Contact       |
| `/instructors`   | Instructors   |

Any other path shows a Not Found page.

## Project structure

```
lms-app/
├── index.html          # HTML entry point
├── vite.config.js      # Vite configuration
├── public/             # Static files served as-is
└── src/
    ├── main.jsx        # App bootstrap (router setup)
    ├── App.jsx         # Route definitions
    ├── layouts/        # Shared layout (header + footer)
    ├── pages/          # One folder per page
    ├── components/     # Reusable UI components
    ├── hooks/          # Custom hooks (useFetch, useForm)
    ├── services/       # API client and data services
    ├── constants/      # Routes, nav links, static config
    ├── data/           # Local course data
    └── utils/          # Helpers such as form validators
```

## Troubleshooting

- **`npm run dev` fails with a Node version error** — upgrade Node.js to 20.19+ or 22.12+.
- **Port 5173 already in use** — Vite picks the next free port; use the URL it prints, or run `npm run dev -- --port 3000`.
- **Instructors table is empty or shows an error** — check your internet connection; the data comes from JSONPlaceholder.
