# ⚽ Scawwy Lads FC - ProClubs Roster Website

An interactive EA FC 26 Pro Clubs team roster website showcasing the **Scawwy Lads FC** squad with hilarious player profiles, stats, and personalities.

## 🎮 Features

- **Interactive Formation Display**: 4-2-3-1 formation with clickable full player cards
- **Custom Player Cards**: Professional-looking card designs displayed on the field
- **Detailed Player Profiles**: Click any player to see their full profile including:
  - Funny stats (totally accurate, we promise)
  - Signature moves
  - Personality descriptions
  - Known-for moments
- **Dynamic Player Avatars**: Dual-image system - full cards on field, portraits in modals
- **Custom Soccer Ball Cursor**: ⚽ themed cursor for the entire site
- **Responsive Design**: Looks great on desktop and mobile
- **Hover Effects**: Smooth animations and hover states for that premium feel
- **News Ticker**: Scrolling news banner with team updates

## 🏆 The Squad

**Main Team:**
- **Jan Lehmann Wilhelm** (CAM) - The Swiss Miss 🇨🇭
- **Hank The Tank** (ST) - The Rager 🔥
- **Patty Skjæveland** (LB) - The Whip King ⚡
- **Obamna** (CB) - The Rodri of Wish 🧊
- **Tekky Mafioso** (LW) - The Tekky Mafioso 🇮🇪
- **Irish IGL** (CDM) - The Irish IGL 🎤
- **Spidey** (CDM) - The Wing Wonder 🕸️
- **Six** (RW) - The Offside Prophet 🚩

**Reserves:**
- **Tuva** (GK)
- **Ratty** (CB)
- **p1ksel** (RB)

## 🚀 Tech Stack

- **React 18** - UI framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **JavaScript** - Logic and interactions

## 📦 Installation

```bash
# Clone the repository
git clone https://github.com/jantobiaswilhelm/ProClubs.git
cd ProClubs/ProjectFiles

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 🏗️ Project Structure

```
ProjectFiles/
├── src/
│   ├── assets/
│   │   ├── avatars/              # Player portrait images (for modals)
│   │   │   ├── avatars.js        # Avatar imports
│   │   │   ├── playerCards.js    # Full card imports
│   │   │   └── Scawwy_Lads.png   # Team logo
│   │   └── pictures/             # Full player card images (for field display)
│   ├── components/
│   │   ├── PlayerCard.jsx        # Individual player card component
│   │   ├── PlayerModal.jsx       # Player profile modal
│   │   └── NewsTicker.jsx        # Scrolling news ticker
│   ├── App.jsx                   # Main application
│   ├── players.json              # Player data and formation
│   ├── index.css                 # Global styles (including custom cursor)
│   └── main.jsx                  # Entry point
├── public/                       # Static assets
└── package.json
```

## 🎨 Customization

### Dual-Image System

The project uses two sets of images for each player:
- **Full Player Cards** (`src/assets/pictures/`) - Displayed on the field formation
- **Portrait Avatars** (`src/assets/avatars/`) - Used in modal picture frames

### Adding/Updating Player Images

**For field display (full cards):**
1. Add card images to `src/assets/pictures/` with player-specific names
2. Update imports in `src/assets/avatars/playerCards.js`

**For modal portraits:**
1. Add portrait images to `src/assets/avatars/` with player-specific names
2. Update imports in `src/assets/avatars/avatars.js`

All images are automatically optimized by Vite's asset pipeline.

### Editing Player Profiles

Edit `src/players.json` to update:
- Player stats
- Personalities
- Signature moves
- Known-for moments
- Jersey numbers
- Positions

### Changing Formation

Modify the `formation.positions` array in `players.json` to adjust:
- Player positions on the field (x/y coordinates)
- Formation layout

### Custom Cursor

The soccer ball cursor is defined in `src/index.css` using the Iconify API. To change it:
```css
cursor: url('YOUR_CUSTOM_CURSOR_URL') 16 16, auto;
```

## 🏃 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌐 Deployment

The site can be deployed to any static hosting service:
- Vercel (recommended for Vite projects)
- Netlify
- GitHub Pages
- Cloudflare Pages

### Build for deployment:
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 📝 License

This is a personal project for the Scawwy Lads FC Pro Clubs team.

## 🎯 Future Enhancements

- [ ] Match history tracking
- [ ] Live stats integration
- [ ] Team achievements/trophies section
- [ ] Player comparison tool
- [ ] Mobile app version
- [ ] Dark/Light mode toggle

---

**Built with 💚 by the Scawwy Lads FC** ⚽
