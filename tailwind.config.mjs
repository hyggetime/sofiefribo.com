/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F9F8F6",
        ink: "#333333",
        muted: "#5a5652",
        line: "rgba(51, 51, 51, 0.12)",
        smudge: "#f0ece6",
      },
      fontFamily: {
        serif: ["'Noto Serif KR'", "'Noto Serif'", "Georgia", "serif"],
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
