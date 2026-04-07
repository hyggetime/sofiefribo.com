/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        /** 순흰 배경 */
        canvas: "#ffffff",
        /** 90% 검정 (흰색 위 검정 90% 불투명도 ≈ #1a1a1a) — 본문·선·테두리 공통 */
        ink: "#1a1a1a",
        muted: "#1a1a1a",
        pencil: "#1a1a1a",
        /** 호버만 아주 옅은 회색 (배경은 흰색 유지) */
        smudge: "#f5f5f5",
      },
      fontFamily: {
        serif: ["'Noto Serif KR'", "'Noto Serif'", "Georgia", "serif"],
        sans: ["'DM Sans'", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
