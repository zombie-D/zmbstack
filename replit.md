# ZMB Stack — Portfolio

Portfolio professionnel de Hanis Agnila (ZMB Stack) — développeur web, formateur, étudiant en informatique (SIL) et créateur de contenu tech/cybersécurité.

## Run & Operate

- `pnpm --filter @workspace/portfolio run dev` — frontend portfolio (port dynamique)
- `pnpm --filter @workspace/api-server run dev` — API Express (port 8080)
- `pnpm run typecheck` — typecheck complet
- `pnpm run build` — typecheck + build tous les packages
- `pnpm --filter @workspace/api-spec run codegen` — regénérer les hooks React Query et schémas Zod depuis l'OpenAPI spec
- `pnpm --filter @workspace/db run push` — pousser les changements de schéma DB (dev uniquement)

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Frontend: React + Vite, TailwindCSS, Framer Motion, Wouter (routing)
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (zod/v4), drizzle-zod
- API codegen: Orval (depuis spec OpenAPI)

## Pages

- `/` — Home (présentation, projets featured, présence numérique)
- `/projects` — Catalogue de projets
- `/projects/:slug` — Fiche détaillée d'un projet (sans code)
- `/about` — À propos + écosystème digital
- `/teaching` — Section formateur
- `/blog` — Articles
- `/blog/:slug` — Article complet
- `/contact` — Formulaire de contact

## API Endpoints

- `GET /api/projects` — liste des projets
- `GET /api/projects/:slug` — détail d'un projet
- `GET /api/github/repos` — métadonnées repos GitHub (nécessite GITHUB_TOKEN secret)
- `GET /api/blog` — articles publiés
- `GET /api/blog/:slug` — article
- `POST /api/contact` — envoyer un message

## Secrets requis

- `GITHUB_TOKEN` — Personal Access Token GitHub (Fine-grained, Metadata read-only) pour afficher les métadonnées des repos privés sans exposer le code source

## Where things live

- Frontend: `artifacts/portfolio/src/`
- Pages: `artifacts/portfolio/src/pages/`
- API routes: `artifacts/api-server/src/routes/`
- DB schema: `lib/db/src/schema/`
- OpenAPI spec: `lib/api-spec/openapi.yaml`
- Generated hooks: `lib/api-client-react/src/generated/`

## User preferences

- Design inspiré Linear/Stripe/Vercel/Raycast — sobre, premium, intemporel
- Thème sombre (pas noir pur), accent unique orange rouille
- Pas de glassmorphism, pas de gradients partout, pas de progress bars de compétences
- Aucun code source ne doit apparaître dans le portfolio
- Le portfolio doit ressembler à une app produit, pas à une page de présentation
