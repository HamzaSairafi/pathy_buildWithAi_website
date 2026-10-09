<div align="center">

# باثي | Pathy

### لا تبدأ فقط.. استمر

An Arabic-first, fully RTL educational platform showcase built with React and Vite.

[Official Pathy Website](https://pathy.live/) · [Explore the AI Program](https://learn.pathy.live/programs/ai-development) · [Explore Git & GitHub](https://learn.pathy.live/programs/git-github)

</div>

---

## About the project

This project is a polished, responsive landing page introducing Pathy (باثي), an Arabic educational platform focused on clear learning steps, practical application, progress, and consistency.

It was developed as a small academic project demonstrating how modern frontend development and an AI coding agent can be used to create a complete, accessible user experience.

> **Disclaimer:** This is an unofficial educational showcase. It does not replace, reproduce, or represent the official Pathy platform. Current program information and learning activity should always be accessed through Pathy's official websites.

## Highlights

- Fully Arabic interface with native right-to-left layout
- Responsive experience across mobile, tablet, and desktop
- Accessible desktop and mobile navigation
- Custom CSS learning-journey illustration
- Feature, learning journey, and educational program sections
- Interactive, keyboard-accessible FAQ accordion
- Safe links to official Pathy program pages
- Visible focus states and reduced-motion support
- Semantic HTML and accessibility-oriented ARIA attributes
- Automated interaction tests with Vitest and Testing Library
- Production-ready multi-stage Docker image

## Technology stack

| Area | Technology |
| --- | --- |
| UI | React 19 with JavaScript and JSX |
| Tooling | Vite 7 |
| Styling | Plain CSS3 with custom properties |
| Icons | Lucide React |
| Typography | Tajawal with Arial fallback |
| Testing | Vitest, Testing Library, jsdom |
| Code quality | ESLint |
| Container | Node.js build stage and Nginx runtime |

## Quick start

### Prerequisites

- Node.js 20.19 or newer
- npm 10 or newer

### Install and run

```bash
# After cloning the repository:
cd pathy_simple_website
npm install
npm run dev
```

Vite will print the local development address, normally `http://localhost:5173`.

## Run with Docker

Docker builds the Vite application in a Node.js stage and serves the optimized static output from Nginx.

```bash
docker build -t pathy-showcase .
docker run --rm -p 8080:80 --name pathy-showcase pathy-showcase
```

Open `http://localhost:8080` in a browser. Stop the foreground container with `Ctrl+C`.

The container includes a health check. Inspect it with:

```bash
docker inspect --format='{{json .State.Health}}' pathy-showcase
```

## Available commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Create an optimized production build in `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Check the source with ESLint |
| `npm test` | Run the automated test suite once |

## Project structure

```text
.
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── FAQ.jsx
│   │   ├── Features.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── LearningJourney.jsx
│   │   ├── Navbar.jsx
│   │   └── Programs.jsx
│   ├── data/
│   │   └── content.js
│   ├── test/
│   │   └── setup.js
│   ├── App.jsx
│   ├── App.test.jsx
│   ├── main.jsx
│   └── styles.css
├── .dockerignore
├── .gitignore
├── Dockerfile
├── nginx.conf
├── index.html
├── package.json
└── README.md
```

## Design and accessibility

The interface uses a restrained blue-and-teal visual system, Tajawal typography, CSS logical properties, and responsive layouts designed for 375px, 768px, 1024px, and 1440px viewports.

Accessibility provisions include:

- Correct `lang="ar"` and `dir="rtl"` document attributes
- Semantic header, navigation, main, section, and footer landmarks
- One primary page heading and logical heading levels
- A keyboard-accessible skip link
- Visible focus indicators
- Accessible names for icon-only controls
- Synchronized `aria-expanded` and `aria-controls` state
- Motion reduction through `prefers-reduced-motion`

## Quality checks

Run all project checks before publishing changes:

```bash
npm run lint
npm test
npm run build
```

The tests cover the required page structure, mobile navigation behavior, FAQ expansion and collapse, and safe official program links.

## Scope

The project intentionally remains a promotional frontend. It does not include:

- A backend or database
- Authentication or registration
- Payments or enrollment
- Course delivery or progress persistence
- AI API integrations or chatbots
- Invented testimonials, ratings, statistics, or guarantees

The learning card in the hero is clearly marked as illustrative content and does not display real platform data.

## Official references

- [Pathy main platform](https://pathy.live/)
- [AI Development program](https://learn.pathy.live/programs/ai-development)
- [Git & GitHub program](https://learn.pathy.live/programs/git-github)

## Academic context

This repository was created for a course project related to AI-assisted software development. Its purpose is to demonstrate frontend architecture, responsive design, accessibility, documentation, and deployment preparation—not to rebuild Pathy's learning platform.
