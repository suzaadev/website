import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--suzaa-primary)",
        "dark-navy": "var(--suzaa-dark-navy)",
        teal: "var(--suzaa-teal)",
        "deep-ink": "var(--suzaa-ink)",
        slate: "var(--suzaa-slate)",
        "off-white": "var(--suzaa-off-white)",
        "light-gray": "var(--suzaa-light-gray)",
        green: "var(--suzaa-green)",
        yellow: "var(--suzaa-yellow)",
        red: "var(--suzaa-red)",
        foreground: "var(--suzaa-ink)",
        "foreground-muted": "var(--suzaa-slate)",
        "foreground-light": "var(--suzaa-off-white)",
      },
    },
  },
  plugins: [],
};
export default config;

