# Portfolio Website Build Prompt — Himani Bisht (Data Analyst)

Build a professional, creative personal portfolio website for a Data Analyst using **Next.js (App Router), React, Tailwind CSS, Framer Motion, and lucide-react** for icons.

## Person & Positioning
- **Name:** Himani Bisht
- **Role:** Data Analyst (Fresher / Entry-Level)
- **Location:** Chandigarh, India
- **Contact:** bishthimani2005@gmail.com | +91 7078807803 | github.com/bishthimani2005-sketch
- **Positioning:** A detail-oriented, analytically minded fresher who turns raw data into clear business insight. The site should feel like a data-analytics dashboard reimagined as a portfolio — clean, numbers-forward, credible — NOT a generic "creative agency" template. Avoid cliché developer-portfolio tropes (terminal windows, code snippets, matrix backgrounds); lean into charts, grids, and data-viz motifs instead since that matches her actual domain.

## Tech Stack (required)
- Next.js 14+ (App Router, TypeScript)
- Tailwind CSS for styling
- Framer Motion for scroll reveals, hover states, and page-load transitions
- lucide-react for all icons (no other icon library)
- Fully responsive (mobile-first), accessible (semantic HTML, proper alt text, keyboard-navigable)
- No backend/CMS needed — all content can be hardcoded in a single `data/profile.ts` (or similar) config file so it's easy to edit later

## Visual Direction
- **Palette:** Deep navy / charcoal as the primary dark tone, with a single confident accent color (electric blue or teal) used sparingly for CTAs, chart accents, and highlights. Off-white/light-gray background for light sections. Support a light theme by default; dark-mode toggle is a nice-to-have, not required.
- **Typography:** A clean modern sans-serif (e.g., Inter or Manrope) for body text, slightly heavier weight for headings. Generous whitespace, confident type scale — this should read as polished and professional, not cramped.
- **Motifs:** Subtle data-visualization elements as decoration — thin line-chart squiggles, dot grids, bar-chart shapes, or a soft animated gradient mesh in the hero. These can be simple inline SVGs animated with Framer Motion, not real charting libraries.
- **Motion:** Sections fade/slide in on scroll (staggered children), buttons and cards have subtle hover lift/scale, hero headline can have a soft entrance animation. Keep motion tasteful and fast (150–400ms) — nothing gimmicky or slow.

## Site Structure & Sections

1. **Navbar** — Sticky, minimal. Logo/name on the left, nav links (About, Skills, Education, Certification, Contact) on the right, mobile hamburger menu with animated slide-in.

2. **Hero**
   - Name, role title ("Data Analyst"), and a one-line value proposition drawn from her career objective.
   - Two CTAs: "Download Resume" (link to a PDF placeholder in /public) and "Get in Touch" (scrolls to contact).
   - Social/contact icons (Mail, Phone, Github) using lucide-react.
   - Subtle animated background (dot grid or gradient blobs).

3. **About / Career Objective**
   - Short narrative paragraph based on her career objective: detail-oriented fresher, B.Sc. + CBITSS Data Analytics certification, proficient in Excel/SQL/Power BI/Python, strong in data cleaning/analysis/visualization, eager to contribute to a data-driven organization.
   - Optionally pair with a simple animated stat row (e.g., "Certified in Data Analytics", "4 Core Tools", "B.Sc. Graduate") — use real facts only, no invented numbers like "X years experience" or "X projects completed" since she's a fresher.

4. **Key Skills**
   - Group into three cards/columns: **Technical**, **Soft Skills**, **Languages** — mirroring her resume.
   - Technical: Microsoft Excel (Pivot Tables, VLOOKUP, Formulas, Dashboards), SQL (Queries, Joins, Data Extraction), Power BI (Data Modeling, DAX, Dashboard Creation), Python (Pandas, Data Analysis Fundamentals).
   - Represent technical skills with a clean animated proficiency bar or tag-cloud style layout with a relevant lucide icon per tool (e.g., Sheet/Table icon for Excel, Database icon for SQL, BarChart icon for Power BI, Code icon for Python) — do not fabricate numeric proficiency percentages; use qualitative grouping (e.g., "Core Tools" vs "Growing Skills") instead.
   - Soft Skills and Languages as simple icon + label pill/badge lists.

5. **Education**
   - Timeline or card layout with: B.Sc. (Bachelor of Science), 2022–2025, 5.9 CGPA; 12th (Uttarakhand Board, Science Stream), 81%; 10th (Uttarakhand Board), 69%.
   - Use a vertical timeline component with animated line-draw on scroll (Framer Motion) for a nice creative touch.

6. **Certification**
   - Feature card for "Data Analytics Certification Course — CBITSS" (Sept 2025 – April 2026) with the two learning outcomes from her resume (hands-on training in Excel/SQL/Power BI/Python; data cleaning, dashboard creation, report generation, business data interpretation).

7. **Areas of Learning / Focus**
   - Grid of small cards, one per item: Data cleaning & prep (Excel/Python), SQL querying & joins, Power BI dashboards, Excel functions & pivot tables, Data analysis workflows & business reporting. Each with a relevant lucide icon.

8. **Strengths**
   - Compact icon + short-text list: quick learner, bilingual communicator, disciplined/positive attitude, works well independently and in teams.

9. **Contact / Footer**
   - Clear "Let's connect" section with mailto and tel links, GitHub link, and a simple contact form UI (front-end only, no backend — just a styled form; note in a code comment that it needs to be wired to a form service like Formspree/EmailJS to actually send).
   - Footer with name, quick nav links, and copyright.

## Content Rules
- Use ONLY the facts provided above — do not invent past jobs, projects, testimonials, GitHub repos, or numeric metrics that aren't in her resume. Since she's a fresher with no formal work history or listed projects, do NOT fabricate a "Projects" or "Experience" section; the structure above is intentionally project/experience-free.
- If a section needs placeholder content (e.g., a profile photo), use a clearly labeled placeholder (initials avatar or icon) rather than a stock photo, and leave a comment showing where to swap in a real image.

## Deliverable Expectations
- Set up a complete, working Next.js project (package.json, tailwind.config, app directory with layout.tsx and page.tsx, component files split logically per section, e.g. `components/Hero.tsx`, `components/Skills.tsx`, etc.).
- Keep all editable content (name, contact info, skills, education rows, etc.) in one central data file so it's easy to update later without touching component code.
- Make sure the project runs with `npm install && npm run dev` with no missing dependencies.
- Prioritize clean, readable, well-commented component code over cleverness.
