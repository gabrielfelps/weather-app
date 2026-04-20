# ⛅ Weather Now — High-Performance Weather Dashboard

<img src="src/assets/images/logo.svg" width="100%" alt="Weather Now Logo">

> A modern weather dashboard focused on extreme performance and flawless User Experience (UX), built with the latest technologies in the Frontend ecosystem.

🔗 **[Live Demo on Vercel](https://weather-app-nine-psi-95.vercel.app)**

---

## About the Project

![Preview](./src/assets/images/preview.png)

**Weather Now** goes beyond the traditional weather application format to deliver a masterclass in modern frontend performance and User Experience (UX). Engineered from the ground up with **React 19** and **Tailwind CSS v4**, the application tackles common web bottlenecks head-on through a strict separation of data fetching and presentation logic via a dual Context API architecture.

Every feature was meticulously crafted to ensure a buttery-smooth, production-ready experience. It features a **debounced predictive search** to optimize geocoding API consumption, an intelligent **array-slicing algorithm** to seamlessly navigate a massive 168-hour forecast dataset, and **Skeleton screens** to eliminate Cumulative Layout Shift (CLS). Coupled with **localStorage persistence** for user preferences and a custom **client-side mathematical engine** for zero-latency unit toggling, Weather Now stands as a highly optimized, resilient, and instantaneous dashboard.

## Key Features

- **Debounced Predictive Search:** A smart city search system that waits for the user to stop typing before calling the Geocoding API, saving resources and enhancing UX.
- **Persistent User Preferences:** Unit choices (Metric vs. Imperial) are saved in `localStorage`, ensuring the app remembers your settings on return visits.
- **Dynamic Hourly Forecast:** Interactive daily navigation that instantly updates a 24-hour list by intelligently slicing a 168-hour dataset.
- **Robust Error Handling:** Dedicated UI for API failures and "no results found" states.
- **Synchronous Visual Feedback:** Extensive use of **Skeleton Screens** that match the final layout to prevent Cumulative Layout Shift (CLS).

## Technical Architecture

The project follows strict **Separation of Concerns (SoC)** and utilizes advanced React patterns:

- **Dual Context API:**
  - `WeatherDataContext`: Manages the global state of meteorological data and search logic.
  - `PreferencesContext`: Manages UI display settings (Unit systems).
- **Custom Hooks:**
  - `useWeather`: Encapsulates complex data fetching and formatting logic.
  - `useDebounce`: Optimizes search bar performance.
  - `useClickOutside`: Handles interactivity for dropdowns and menus.
- **Pure Utilities:** Mathematical conversion logic (`unitConverter`) and date formatting (`formatDate`) are isolated for easy testing and maintenance.

### Folder Structure

```text
src/
├── assets/          # Fonts and dynamic SVG imagery
├── components/
│   ├── header/      # Logo and Units Selection Menu
│   └── main/
│       ├── search/  # Search bar, Dropdowns, and Skeletons
│       └── weather/ # Boards, Details, Daily, and Hourly Forecasts
├── context/         # Global state providers
├── hooks/           # Reusable logic (useWeather, useDebounce, etc.)
├── utils/           # Pure functions (Conversion and Formatting)
├── App.jsx          # Main orchestrator
└── main.css         # Tailwind v4 directives
```

## Tech Stack

- **React 19:** Leveraging the latest performance improvements and stability.
- **Tailwind CSS v4:** The next-generation CSS engine, based on native variables and superior build speed.
- **Headless UI:** For accessible interface components (Listbox/Dropdown).
- **Lucide React:** A set of lightweight and consistent icons.
- **Open-Meteo API:** Real-time meteorological and geocoding data consumption.

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/gabrielfelps/weather-app.git](https://github.com/gabrielfelps/weather-app.git)
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**

   ```bash
   npm run dev
   ```

## 🎓 Lessons Learned & Reflections

Building this application was a massive leap in my frontend development journey. It allowed me to consolidate my knowledge of **React 19** and the new **Tailwind v4** configuration, while also reflecting on my personal growth as a developer:

- **What I am most proud of:** I am extremely proud of how I internalized state management concepts in practice. Utilizing the **Context API** (`WeatherDataContext` and `PreferencesContext`) to avoid prop drilling made the codebase much cleaner. Additionally, heavily working with array manipulation methods like `.map()` and `.slice()` to render the daily and hourly forecasts felt like a great technical achievement.

- **Challenges encountered and overcome:** The biggest hurdles involved API consumption. Managing complex data fetching, intercepting errors gracefully, and keeping the UI stable with loading states (Skeletons) was challenging. However, extracting all this complex asynchronous logic into custom hooks (like `useWeather` and `useDebounce`) was a huge learning experience and ultimately the best solution to keep the components clean.

- **Looking forward (Continuous Improvement):** While I'm proud of the current architecture, I am always looking for ways to refactor and improve. My next goals involve discovering new best practices to make my code even more readable for other developers and finding ways to elevate this project to an even higher professional standard. Feedback is always welcome!
