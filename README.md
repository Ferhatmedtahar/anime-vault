# Anime Explorer

[Anime Vault](https://anime-vault-ten-xi.vercel.app/) is a Next.js application that showcases popular animes, The app features are a dynamic hero section, an infinite scrolling anime list, and smooth animations.

## Features

- **Hero Section & Footer:** A basic and static hero section with a footer to provide a clean layout.
- **Anime List:** Displays a list of animes fetched from the Shikimori API, limited to 8 per page, ordered by popularity.
- **Server Actions:** Server-side data fetching using Next.js server actions, ensuring real-time updates with TypeScript-based data models.
- **Infinite Scroll:** Implemented using `react-intersection-observer` to load more animes as the user scrolls down .
- **Animations:** Added animations using `framer-motion` for a smooth and visually appealing user experience. Client-side rendering is used for the animation components, with a delay trick to stagger animations based on the index.
