# Harisanth P B: Portfolio

A one-page portfolio for a Sales, HR & Administrative professional based in Dubai. It presents the CV as a scannable page: a hero with the headline and key numbers, About, Experience, Skills, Education and certifications, and Contact.

Suggested repository name: `harisanth-pb-portfolio`

## Tech stack

- Next.js 14 (App Router)
- React 18
- Tailwind CSS 3
- No API keys, no environment variables, no external fonts

## Run locally

Requires Node.js 18.17 or later.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

To check a production build:

```bash
npm run build
npm start
```

## Customize

- **Content:** edit `data/profile.js`. Every section reads from it (name, headline, experience, skills, education, contact links).
- **Photo:** replace `public/photo.jpg` (portrait, roughly 4:5).
- **CV download:** replace `public/Harisanth_PB_CV.pdf`, keeping the file name, or change `cv` in `data/profile.js`.
- **Colours:** edit the RGB values at the top of `app/globals.css`. Light and dark themes are defined separately and follow the visitor's system setting.
- **Sections:** each section is a component in `components/`. Remove or reorder them in `app/page.jsx`.

## Project structure

```
app/          layout, page, global styles
components/   Hero, About, Experience, Skills, Education, Contact, Footer, Section
data/         profile.js (all content)
public/       photo.jpg, CV PDF
```

## Deploy

The simplest option is Vercel: push the repository to GitHub, import it, and deploy with the default settings.
