# Dr. Subash Ranjan Kabat — Portfolio Website

🌐 **Live:** [drsrkabat.com](https://drsrkabat.com) | [portfolio-site-rho-eight-55.vercel.app](https://portfolio-site-rho-eight-55.vercel.app)

A modern, visually stunning portfolio website for **Dr. Subash Ranjan Kabat**, Principal & Professor at Radhakrishna Institute of Technology and Engineering (RITE), Bhubaneswar. Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Single-Page Design** | Smooth scroll-based navigation across all sections |
| **Glassmorphism UI** | Frosted-glass cards with dynamic hover effects and animated gradient borders |
| **Particle System** | Floating particle animation in the hero section (desktop only) |
| **Typewriter Effect** | Animated role typing in hero — Principal, Professor, Researcher, Ph.D., Innovator |
| **Animated Counters** | Statistics that count up when scrolled into view |
| **Shimmer Text** | Multi-color gradient text with animated shimmer effect |
| **Aurora Dividers** | Animated gradient lines between sections |
| **Responsive Layout** | Fully responsive — mobile-optimized with performance gating |
| **Scroll Progress Bar** | Top progress indicator showing page scroll position |
| **Cursor Glow** | Custom cursor glow effect (desktop only) |
| **Back to Top** | Floating button to scroll back to top |
| **Custom Scrollbar** | Gradient-styled scrollbar matching the site theme |
| **SEO Optimized** | Full meta tags, semantic HTML, and proper heading hierarchy |
| **Google Fonts** | Inter (body) and Outfit (headings) for premium typography |

---

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.1.6 | React framework with App Router |
| [React](https://react.dev/) | 19.2.3 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first CSS framework |
| [Framer Motion](https://www.framer.com/motion/) | 12.x | Animations and transitions |
| [PostCSS](https://postcss.org/) | — | CSS processing via `@tailwindcss/postcss` |

---

## 📁 Project Structure

```
portfolio-site/
├── public/                     # Static assets
│   ├── profile.png             # Profile photo
│   ├── cv.pdf                  # Downloadable CV
│   └── icon.svg                # Site icon
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, SEO)
│   │   ├── page.tsx            # Main page — assembles all sections
│   │   ├── globals.css         # Global styles, design tokens, animations
│   │   └── icon.svg            # App favicon
│   └── components/
│       ├── Navbar.tsx           # Sticky nav bar with scroll spy & mobile drawer
│       ├── Hero.tsx             # Hero section with particles, typewriter & CTA
│       ├── About.tsx            # Bio section with animated stat counters
│       ├── Education.tsx        # Academic qualifications timeline (Ph.D., M.Tech, B.Tech)
│       ├── Experience.tsx       # Professional experience timeline (6 roles)
│       ├── ResearchHighlights.tsx # Featured research publications (4 highlights)
│       ├── Publications.tsx     # Full publications list (18 papers, expandable)
│       ├── Skills.tsx           # Technical skills in 5 categories + journal reviewer list
│       ├── Awards.tsx           # Awards, certifications, memberships & responsibilities
│       ├── Vision.tsx           # Vision for students (5 pillars) & institution (8 goals)
│       ├── Testimonials.tsx     # Endorsements from peers & institutions
│       ├── Contact.tsx          # Contact info & research profile links
│       ├── Footer.tsx           # Footer with social links & credits
│       ├── ScrollProgress.tsx   # Top scroll progress bar
│       ├── CursorGlow.tsx       # Custom cursor glow effect
│       ├── BackToTop.tsx        # Floating back-to-top button
│       └── BackgroundAnimation.tsx # Background animation effects
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── postcss.config.mjs          # PostCSS configuration (Tailwind CSS)
├── eslint.config.mjs           # ESLint configuration
├── package.json                # Dependencies and scripts
└── README.md                   # This file
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** — v18.18.0 or later
- **npm** — v9 or later (comes with Node.js)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/subashkabat/Portfolio.git
   cd portfolio-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and visit:
   ```
   http://localhost:3000
   ```

### Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server with hot reload |
| `npm run build` | Create an optimized production build |
| `npm run start` | Start the production server |
| `npm run lint` | Run ESLint for code quality checks |

---

## 📄 Sections Overview

### 🏠 Hero
Full-viewport hero with floating particle system, animated profile photo with rotating gradient ring, typewriter role effect (Principal, Professor, Researcher, Ph.D., Innovator), research profile links (LinkedIn, Google Scholar, ORCID, Scopus, ResearchGate, Vidwan, IEEE), and CTA buttons.

### 👤 About
Personal bio with research interests (Renewable Energy, Power Electronics, Smart Grid, EVs, IoT, AI/ML) and animated statistics — 18+ years experience, 32+ publications, 7 journal reviews, 8+ professional memberships.

### 🎓 Education
Timeline of academic qualifications:
- **Ph.D.** — KIIT Deemed to be University (2022) — Fault Ride Through Technique for Grid Connected DFIG
- **M.Tech** — VSSUT, Burla (2011) — Power System, CGPA: 8.30
- **B.Tech** — BIET / BPUT (2006) — Electrical Engineering, 71.56%

### 💼 Experience
Professional timeline with 6 roles from Lecturer (2006) to Principal (2023–Present) at RITE, Bhubaneswar.

### 🔬 Research Highlights
4 featured publications spanning DFIG wind turbines, smart grid cybersecurity, multilevel inverters, and AI for sustainability.

### 📚 Publications
18 research papers in IEEE conferences and international journals (Elsevier, Springer, etc.), with expandable view.

### 🧠 Skills
5 categorized skill groups — Programming (C, C++, Python), Simulation (MATLAB, Simulink, ETAP, PLECS), Research & AI/ML, Power & Energy, Tools & OS. Plus 7 journal reviewer credentials.

### 🏆 Awards & Memberships
- **Awards** — Prime Teachers Award, Best IQAC Coordinator, NxtWave AI Appreciation
- **Professional Certifications** — Palo Alto Cybersecurity, BPUT Future Ready, IEEE/Elsevier Reviewer, AJEPS Editorial Board
- **Professional Bodies** — IEEE, ISTE, SESI, IAENG, IFERP, InSc, SIPH, I2OR
- **Key Responsibilities** — 10 leadership roles including Principal, IQAC Coordinator, Innovation Council President

### 🔭 Vision & Strategy
- **Vision for Students** — 5 pillars: Skill-Oriented Education, Research & Innovation, Industry Readiness, Entrepreneurship, Holistic Development
- **Vision for Institution** — 8 strategic goals covering advanced labs, emerging CS programs, global collaborations, technology-driven campus, and innovation ecosystem

### 💬 Testimonials
Endorsements from research collaborators, academic peers, and institutional reviews.

### 📬 Contact
Contact information (phone, email, address, institution) and 7 research profile links (LinkedIn, Google Scholar, ORCID, Scopus, ResearchGate, Vidwan, IEEE Collabratec).

### 🔻 Footer
Social profile links with animated gradient divider and credits.

---

## 🎨 Design System

### Color Palette

| Token | Value | Usage |
|---|---|---|
| `--color-navy-950` | `#0a0e1a` | Page background |
| `--color-navy-900` | `#0f1629` | Card backgrounds |
| `--color-electric-500` | `#3b82f6` | Primary accent (blue) |
| `--color-electric-400` | `#60a5fa` | Primary accent light |
| `--color-teal-500` | `#14b8a6` | Secondary accent (teal) |
| `--color-teal-400` | `#2dd4bf` | Secondary accent light |
| `--color-gold-500` | `#f59e0b` | Tertiary accent (gold) |
| `--color-gold-400` | `#fbbf24` | Tertiary accent light |

### CSS Utilities

| Class | Effect |
|---|---|
| `.glass-card` | Glassmorphism card with blur backdrop, hover shine, and lift effect |
| `.gradient-text` | Static blue-to-teal gradient text |
| `.shimmer-text` | Animated multi-color gradient text |
| `.gradient-border` | Animated gradient border on hover |
| `.hero-gradient` | Multi-radial gradient background for hero |
| `.glow-border` | Blue glow box shadow |
| `.section-aurora` | Animated gradient border-top divider between sections |
| `.text-glow` | Pulsing text shadow effect |

---

## 🌐 Deployment

### Production (Vercel)

The site is deployed on [Vercel](https://vercel.com/) with automatic deployments on push to `main`:

| Domain | URL |
|---|---|
| **Custom Domain** | [drsrkabat.com](https://drsrkabat.com) |
| **WWW** | [www.drsrkabat.com](https://www.drsrkabat.com) |
| **Vercel URL** | [portfolio-site-rho-eight-55.vercel.app](https://portfolio-site-rho-eight-55.vercel.app) |

### GitHub Repository

```
https://github.com/subashkabat/Portfolio.git
```

### Deploy Updates

```bash
git add -A
git commit -m "your commit message"
git push origin main
```
Vercel auto-deploys from the `main` branch.

### Domain Setup (Hostinger → Vercel)

DNS Nameservers configured on Hostinger:
- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

---

## 🖼️ Customization Guide

### Changing Profile Information

- **Name, title, and bio** — Edit the content directly in the respective component files under `src/components/`.
- **Profile photo** — Replace `public/profile.png` with your own image (recommended: square, 400×400px minimum).
- **CV** — Replace `public/cv.pdf` with your own CV file.
- **Metadata & SEO** — Update the `metadata` export in `src/app/layout.tsx`.

### Modifying Colors

Edit the `@theme inline` block at the top of `src/app/globals.css` to change the color palette.

### Adding/Removing Sections

1. Create or delete the component file in `src/components/`.
2. Add or remove the corresponding import and JSX tag in `src/app/page.tsx`.
3. Update the `navLinks` array in `src/components/Navbar.tsx`.

---

## 📜 License

This project is for personal/academic use. All content and personal information belongs to **Dr. Subash Ranjan Kabat**.

---

## 🙏 Credits

- **Design & Development** — Built with ❤️ by TARUN
- **Framework** — [Next.js](https://nextjs.org/) by Vercel
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/)
- **Fonts** — [Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts
