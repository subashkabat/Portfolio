# Dr. Subash Ranjan Kabat — Portfolio Website

A modern, visually stunning portfolio website for **Dr. Subash Ranjan Kabat**, Principal & Professor at Radhakrishna Institute of Technology and Engineering (RITE), Bhubaneswar. Built with Next.js 16, React 19, Tailwind CSS 4, and Framer Motion.

---

## ✨ Features

| Feature | Description |
|---|---|
| **Single-Page Design** | Smooth scroll-based navigation across all sections |
| **Glassmorphism UI** | Frosted-glass cards with dynamic hover effects and animated gradient borders |
| **Particle System** | Floating particle animation in the hero section |
| **Animated Counters** | Statistics that count up when scrolled into view |
| **Shimmer Text** | Multi-color gradient text with animated shimmer effect |
| **Aurora Dividers** | Animated gradient lines between sections |
| **Responsive Layout** | Fully responsive design optimized for mobile, tablet, and desktop |
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
│   └── *.svg                   # Icons and logos
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout (fonts, metadata, SEO)
│   │   ├── page.tsx            # Main page — assembles all sections
│   │   ├── globals.css         # Global styles, design tokens, animations
│   │   └── favicon.ico         # Favicon
│   └── components/
│       ├── Navbar.tsx           # Sticky navigation bar with scroll spy
│       ├── Hero.tsx             # Hero section with particles & CTA buttons
│       ├── About.tsx            # Bio section with animated stat counters
│       ├── Education.tsx        # Academic qualifications timeline
│       ├── Experience.tsx       # Professional experience timeline
│       ├── Publications.tsx     # Research papers & journal articles
│       ├── Skills.tsx           # Technical skills & competencies
│       ├── Awards.tsx           # Honors, awards & recognitions
│       ├── Contact.tsx          # Contact form & information
│       └── Footer.tsx           # Site footer with copyright
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
   git clone https://github.com/<your-username>/portfolio-site.git
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

## 🎨 Design System

### Color Palette

The site uses a carefully curated dark-mode color palette defined as CSS custom properties in `globals.css`:

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
| `.dots-pattern` | Subtle dot grid background pattern |

### Animations

| Animation | Duration | Description |
|---|---|---|
| `gradient-shift` | 8s | Background gradient position cycling |
| `float` | 6s | Vertical floating motion |
| `glow-pulse` | 3s | Opacity pulsing glow |
| `slide-up` | 0.6s | Entrance from below |
| `shimmer` | 3s | Text gradient position shift |
| `sparkle` | 2s | Scale-in/out sparkle |
| `border-flow` | 4s | Gradient border animation |
| `particle-float` | — | Full-viewport vertical particle drift |
| `aurora` | — | Rotating/scaling aurora light effect |
| `text-glow` | 3s | Pulsing text shadow |
| `card-shine` | — | Horizontal shine sweep on cards |

---

## 📄 Sections Overview

### 🏠 Hero
Full-viewport hero section with floating particle system, animated profile image with glow ring, gradient title text, and call-to-action buttons.

### 👤 About
Bio section with a personal introduction and an animated statistics grid showing years of experience, publications count, journal reviews, and professional memberships — each with a count-up animation.

### 🎓 Education
Academic qualifications displayed in a timeline format, including Ph.D., M.Tech, and B.Tech degrees with institution details and specialization info.

### 💼 Experience
Professional experience timeline showcasing roles from Principal to Lecturer across different institutions, with key responsibilities highlighted.

### 📚 Publications
Research publications section listing journal articles and IEEE conference papers, organized by type with hover-interactive cards.

### 🧠 Skills
Technical skills and competencies displayed in categorized groups — including Renewable Energy, Power Systems, AI/ML, IoT, and more.

### 🏆 Awards
Honors, awards, and recognitions received throughout the academic and professional career.

### 📬 Contact
Contact information section with a form for inquiries and direct contact details.

### 🔻 Footer
Minimal footer with copyright information.

---

## 🖼️ Customization Guide

### Changing Profile Information

- **Name, title, and bio** — Edit the content directly in the respective component files under `src/components/`.
- **Profile photo** — Replace `public/profile.png` with your own image (recommended: square, 400×400px minimum).
- **Metadata & SEO** — Update the `metadata` export in `src/app/layout.tsx`.

### Modifying Colors

Edit the `@theme inline` block at the top of `src/app/globals.css` to change the color palette.

### Adding/Removing Sections

1. Create or delete the component file in `src/components/`.
2. Add or remove the corresponding import and JSX tag in `src/app/page.tsx`.

---

## 🌐 Deployment

This project is ready to deploy on [Vercel](https://vercel.com/) (recommended for Next.js):

1. Push your code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com/) and import the repository.
3. Vercel will auto-detect Next.js and deploy.

Other hosting options:

| Platform | Guide |
|---|---|
| **Vercel** | [Deploy Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs) |
| **Netlify** | [Deploy Next.js on Netlify](https://docs.netlify.com/frameworks/next-js/overview/) |
| **AWS Amplify** | [Deploy Next.js on Amplify](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html) |
| **Docker** | Use `next build` + `next start` in a Node.js container |

---

## 📜 License

This project is for personal/academic use. All content and personal information belongs to **Dr. Subash Ranjan Kabat**.

---

## 🙏 Credits

- **Design & Development** — Built with ❤️TARUN
- **Framework** — [Next.js](https://nextjs.org/) by Vercel
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Styling** — [Tailwind CSS](https://tailwindcss.com/)
- **Fonts** — [Inter](https://fonts.google.com/specimen/Inter) & [Outfit](https://fonts.google.com/specimen/Outfit) via Google Fonts
