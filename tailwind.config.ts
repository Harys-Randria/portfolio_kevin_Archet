// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1237D8",
          electric: "#214EEB",
          deep: "#033674",
        },
        gold: {
          premium: "#E3C83D",
          warm: "#C99552",
        },
        surface: {
          main: "#FAFBFD",
          alt: "#F3F7FF",
          card: "#FFFFFF",
          border: "#E6EEFF",
        },
        text: {
          primary: "#263238",
          secondary: "#5B6575",
          title: "#0E1726",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
      },
      boxShadow: {
        card: "0 15px 50px rgba(18,55,216,.08)",
        "gold-button": "0 10px 30px rgba(227,200,61,.35)",
      },
    },
  },
  plugins: [],
};

export default config;