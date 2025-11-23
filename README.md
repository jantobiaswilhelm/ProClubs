# ⚽ Scawwy Lads FC - ProClubs Roster Website

An interactive EA FC 26 Pro Clubs team roster website showcasing the **Scawwy Lads FC** squad with hilarious player profiles, stats, and personalities.

## 🎮 Features

- **Interactive Formation Display**: 4-2-3-1 formation with clickable player cards
- **Detailed Player Profiles**: Click any player to see their full profile including:
  - Funny stats (totally accurate, we promise)
  - Signature moves
  - Personality descriptions
  - Known-for moments
- **Dynamic Player Avatars**: Custom images for each squad member
- **Responsive Design**: Looks great on desktop and mobile
- **Hover Effects**: Smooth animations and hover states for that premium feel

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
│   │   └── avatars/          # Player images
│   ├── components/
│   │   ├── PlayerCard.jsx    # Individual player card component
│   │   └── PlayerModal.jsx   # Player profile modal
│   ├── App.jsx               # Main application
│   ├── players.json          # Player data and formation
│   └── main.jsx              # Entry point
├── public/                   # Static assets
└── package.json
```

## 🎨 Customization

### Adding/Updating Player Images

1. Add images to `src/assets/avatars/` with player-specific names
2. Update imports in `src/assets/avatars/avatars.js`
3. Images are automatically optimized by Vite

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

## 🏃 Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## 🌐 Deployment

The site can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

## 📝 License

This is a personal project for the Scawwy Lads FC Pro Clubs team.

## 🎯 Future Enhancements

- [ ] Match history tracking
- [ ] Live stats integration
- [ ] Team achievements/trophies section
- [ ] Player comparison tool
- [ ] Mobile app version

---

**Built with 💚 by the Scawwy Lads FC**
