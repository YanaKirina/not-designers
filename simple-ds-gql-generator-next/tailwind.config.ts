import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages//*.{js,ts,jsx,tsx,mdx}",
    "./src/components//*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#FFFFFF", // Чисто белый
        foreground: "#000000", // Чисто черный
        secondary: "#F3F5F7", // Светло-серый
      },
      fontFamily: {
        montserrat: ["Montserrat", "sans-serif"],
        sans: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'main-gradient': 'linear-gradient(to right, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
} satisfies Config;