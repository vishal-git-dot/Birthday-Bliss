<p align="center">
  <img src="./banner.svg" alt="Happy Birthday, Beautiful! — banner" width="100%" />
</p>

<h1 align="center">🎀 Birthday Surprise Website 🎀</h1>

<p align="center">
  <em>✨ a soft, sparkly, just-for-her birthday surprise — built with love ✨</em>
</p>

<p align="center">
  <a href="https://tsbirthdaybliss.netlify.app/">
    <img src="https://img.shields.io/badge/✨_Live_Demo-Visit_the_Surprise-ff6fae?style=for-the-badge&logoColor=white" alt="Live Demo" />
  </a>
</p>

<p align="center">🌷 ‹ open it on her phone, hand it over, and watch her face 🌷</p>

---

## 💕 What Is This?

A tiny, mobile-first website made to make someone feel completely loved on their birthday — floating hearts, twinkly sparkles, soft messages, and a candle she actually gets to blow out. 🕯️

Perfect for a girlfriend, best friend, sister, or anyone who deserves the fuss. 🎀

---

## 🌸 A Peek Inside

### 🎀 The Welcome
It all starts with a silly little "do you love your bestie?" question — and the **No** button runs away every time she tries to click it. 😜

<p align="center">
  <img src="https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/b9d2f3fa-cb62-42ff-8928-d33f8c4de2fa/c4172493-ccc3-49cb-b68b-b09b70d28d37.lovableproject.com-1768056554096.png" width="260" />
</p>

---

### 💌 Sweet Little Messages
Four dreamy glass-style cards, each one a little love note.

<div align="center">

| 🎁 Birthday Wishes | 🌟 Appreciation |
|:---:|:---:|
| *"Happy Birthday, Beautiful!"* | *"You're Amazing!"* |
| **💕 Memories** | **🌸 Promise** |
| *"Our Moments Together"* | *"My Promise To You"* |

</div>

---

### 🎵 A Little Song
Lyrics float in line by line, soft and slow, like someone's humming them just for her. 🎶

<p align="center">
  🎶 <em>"Happy Birthday to you..."</em> 🎶<br/>
  <sub>each line fades in gently, with tiny progress dots below</sub>
</p>

---

### 🕯️ Make a Wish
Close your eyes, count down, and blow.

<div align="center">

| ✨ Close Your Eyes... | 🌟 Counting Down | 💫 Wish Sent! |
|:---:|:---:|:---:|
| *a candle flickers softly* | *5 · 4 · 3 · 2 · 1* | *off it goes, into the world* |

</div>

---

### 🎂 The Big Finale
A pink-and-purple birthday cake, three glowing candles, and a burst of confetti to top it all off. 🎉

<div align="center">

| Touch | What's There |
|:---:|:---:|
| 🍰 | a 3-layer cake (yellow, pink, purple) |
| 🕯️ | 3 flickering candles |
| 🎊 | a confetti explosion |
| 💖 | "Happy Birthday!" with hearts drifting up |

</div>

---

## 💗 Everything It Does

<div align="center">

| Feature | What it feels like |
|:---:|:---|
| 🎀 **Playful Welcome** | the "No" button literally runs away from her |
| 💌 **Heartfelt Messages** | 4 soft, personal little notes |
| 🎵 **Floating Lyrics** | a song that fades in, one line at a time |
| 🕯️ **A Real Wish** | a candle she gets to blow out herself |
| 🎂 **Grand Finale** | cake + confetti + all the hearts |
| 💕 **Floating Hearts** | drifting softly in the background, always |
| ✨ **Sparkles Everywhere** | tiny twinkles, just because |
| 📱 **Made for Her Phone** | smooth on mobile, where it'll actually be opened |

</div>

---

## 🎀 How the Surprise Unfolds

```
┌─────────────────┐
│  Welcome Screen │ ──── "Do you love your bestie?"
│   (Yes/No Fun)  │      (No button runs away! 😜)
└────────┬────────┘
         │ taps "YES!"
         ▼
┌─────────────────┐
│ Message Slide 1 │ ──── "Happy Birthday, Beautiful!"
└────────┬────────┘
         │ swipe
         ▼
┌─────────────────┐
│ Message Slide 2 │ ──── "You're Amazing!"
└────────┬────────┘
         │ swipe
         ▼
┌─────────────────┐
│ Message Slide 3 │ ──── "Our Memories Together"
└────────┬────────┘
         │ swipe
         ▼
┌─────────────────┐
│ Message Slide 4 │ ──── "My Promise To You"
└────────┬────────┘
         │ swipe
         ▼
┌─────────────────┐
│  Lyrics Slide   │ ──── a little song, line by line
└────────┬────────┘
         │ finishes on its own
         ▼
┌─────────────────┐
│   Wish Page     │ ──── close your eyes... and blow
└────────┬────────┘
         │ wish sent 💫
         ▼
┌─────────────────┐
│ Final Celebrate │ ──── 🎂 cake + confetti + hearts!
└─────────────────┘
```

---

## 💖 What's Under the Hood

### 1. 🎀 WelcomeScreen.tsx
The very first hello — ribbons, hearts, sparkles, and a "No" button with a mind of its own.

### 2. 💌 MessageSlide.tsx
The love-note cards — soft glass look, gentle fade-ins, one emoji header each.

### 3. 🎵 LyricsSlide.tsx
Lyrics that drift in every 2.5 seconds, with little dots tracking how far along she is. (Swap in any song you like!)

### 4. 🕯️ WishPage.tsx
A flickering candle, a 5-second countdown, and a flame that actually blows out.

### 5. 🎂 FinalCelebration.tsx
The cake, the candles, the confetti (via `canvas-confetti`), and one last "Happy Birthday!" in hearts.

### 6. 💕 FloatingHearts.tsx
The quiet little hearts drifting up in the background, the whole time.

### 7. ✨ Sparkles.tsx
Tiny twinkling stars, scattered everywhere, for no reason other than it's pretty.

---

## 🌈 Color Palette

<div align="center">

| Color | HSL Value | Used For |
|:---:|:---:|:---:|
| 💗 Rose Pink | `346 77% 85%` | main background |
| 💖 Deep Rose | `346 77% 65%` | buttons & accents |
| 🤍 Soft White | `346 30% 98%` | cards & text |
| 💜 Muted Rose | `346 20% 60%` | secondary text |
| 🎀 Accent Pink | `346 90% 70%` | highlights |

</div>

---

## 🛠️ Built With

<div align="center">

| Technology | Purpose |
|:---:|:---:|
| ⚛️ **React 18** | UI framework |
| 📘 **TypeScript** | type safety |
| 🎨 **Tailwind CSS** | styling |
| 🎬 **Framer Motion** | animations |
| 🎊 **Canvas Confetti** | the celebration burst |
| ⚡ **Vite** | build tool |
| 🧩 **shadcn/ui** | UI components |

</div>

---

## 📱 Made for Her Phone

- ✅ tap-to-advance, no fiddly buttons
- ✅ swipe gestures
- ✅ text that scales nicely on small screens
- ✅ full-screen, no distractions
- ✅ smooth 60fps animations
- ✅ built portrait-first

---

## 🎨 Make It Yours

### Change the messages
In `src/pages/Index.tsx`, edit the `messages` array:

```tsx
const messages = [
  {
    emoji: "🎁",
    title: "Your Custom Title",
    message: <p>Your custom message here!</p>
  },
  // ... add as many as you'd like
];
```

### Change the lyrics
In `src/components/LyricsSlide.tsx`, edit the `lyrics` array:

```tsx
const lyrics = [
  "Your first line ♪",
  "Your second line ♪",
  // ... your song, your words
];
```

### Change the colors
In `src/index.css`, tweak the CSS variables:

```css
:root {
  --primary: 346 77% 65%;      /* main pink */
  --background: 346 77% 85%;   /* background */
  --accent: 346 90% 70%;       /* highlights */
}
```

---

## 🚀 Running It Locally

```bash
# 1. clone the repo
git clone https://github.com/vishal-git-dot/Birthday-Bliss.git

# 2. hop into the folder
cd Birthday-Bliss

# 3. install everything
npm install

# 4. start it up
npm run dev

# 5. open it up
# visit http://localhost:5173
```

---

## 📂 Project Structure

```
src/
├── components/
│   ├── 💕 FloatingHearts.tsx    # floating heart animations
│   ├── ✨ Sparkles.tsx          # sparkle particle effects
│   ├── 🎀 WelcomeScreen.tsx     # interactive welcome page
│   ├── 💌 MessageSlide.tsx      # message card component
│   ├── 🎵 LyricsSlide.tsx       # animated lyrics display
│   ├── 🕯️ WishPage.tsx          # candle wish experience
│   ├── 🎂 FinalCelebration.tsx  # birthday cake finale
│   ├── 🔘 SlideIndicator.tsx    # navigation dots
│   └── ui/                      # shadcn/ui components
├── pages/
│   └── 📄 Index.tsx             # main page controller
├── hooks/
│   └── 📱 use-mobile.tsx        # mobile detection hook
├── 🎨 index.css                 # global styles & theme
└── ⚙️ App.tsx                   # app entry point
```

---

## 💝 A Little Note

Made with way too much love, for someone who deserves every bit of it. 💖

<p align="center">
  <img src="https://em-content.zobj.net/source/apple/391/sparkling-heart_1f496.png" width="36" />
  <img src="https://em-content.zobj.net/source/apple/391/birthday-cake_1f382.png" width="36" />
  <img src="https://em-content.zobj.net/source/apple/391/sparkling-heart_1f496.png" width="36" />
</p>

<p align="center">
  <strong>Happy Birthday, Beautiful! 🎂💖</strong>
</p>
