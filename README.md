# SageNest – French Summer Camp Landing Page

Built with **Next.js 15**, **TypeScript**, **Tailwind CSS**, and **shadcn/ui**.

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
sagenest/
├── app/
│   ├── layout.tsx          # Root layout with Google Fonts
│   ├── page.tsx            # Main page (assembles all sections)
│   └── globals.css         # Tailwind directives + custom CSS
├── components/
│   ├── ui/
│   │   ├── button.tsx      # shadcn Button
│   │   └── separator.tsx   # shadcn Separator
│   └── sections/
│       ├── Navbar.tsx          # Sticky top nav
│       ├── HeroSection.tsx     # Yellow hero with CTA
│       ├── ProblemSection.tsx  # Green problem awareness
│       ├── ProgramSection.tsx  # Red program details
│       ├── WhyDifferentSection.tsx  # Blue differentiators
│       ├── PricingSection.tsx  # Pricing + bonuses
│       └── Footer.tsx          # Dark footer
├── lib/
│   └── utils.ts            # shadcn cn() utility
├── components.json         # shadcn config
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
└── postcss.config.js
```

---

## 🎨 Design System

| Color | Hex | Usage |
|-------|-----|-------|
| Navy | `#00153D` | Navbar, footer |
| Yellow | `#FFDD6E` | Hero background |
| Green | `#3E8108` | Problem section |
| Red | `#A51717` | Program section |
| Blue Mid | `#1A66D1` | Why Different |
| Blue Light | `#297BED` | Pricing section |
| Blue CTA | `#0649C6` | Primary buttons |
| Dark Red | `#A90000` | Secondary buttons |

### Fonts (Google Fonts)
- **Finger Paint** – Display headings
- **Montserrat Alternates ExtraBold** – Hero headline
- **DM Sans** – Body, UI text

---

## 📝 Notes

- Image assets are hosted on Figma's CDN — they expire after **7 days** from the Figma export.  
  Replace the `figma.com/api/mcp/asset/...` URLs with your own hosted images before deploying.
- To add more shadcn components: `npx shadcn@latest add <component-name>`
