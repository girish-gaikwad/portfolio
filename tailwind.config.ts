import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // dark_bg: '#1E2336',
        // dark_border: '#1B1E2E',
        // about_me_green: '#7ee787',
        // work_experience_orange: '#ffa28b',
        // skills_purple: '#939aff',
        // my_work_yellow: '#ffdc8b',
        dark_bg: "rgb(var(--dark-bg) / <alpha-value>)",
        dark_border: "rgb(var(--dark-border) / <alpha-value>)",
        about_me_green: "rgb(var(--about-green) / <alpha-value>)",
        work_experience_orange: "rgb(var(--work-orange) / <alpha-value>)",
        skills_purple: "rgb(var(--skills-purple) / <alpha-value>)",
        my_work_yellow: "rgb(var(--work-yellow) / <alpha-value>)",
        menu_bg: "rgb(var(--menu-bg) / <alpha-value>)",
        menu_border: "rgb(var(--menu-border) / <alpha-value>)",
        input_bg: "rgb(var(--input-bg) / <alpha-value>)",
        active_item_bg: "rgb(var(--active-item-bg) / <alpha-value>)",
        hover_item_bg: "rgb(var(--hover-item-bg) / <alpha-value>)",
        white: "#FFF",
        "red-500": "#E51400",
        "gray-200": "#292E42",
        "gray-300": "#36394A",
        "gray-500": "#A9B1D6",
        "blue-100": "#3DB9C9",
        "blue-300": "#3D59A1",
        "blue-800": "#282E44",
      },
    },
  },
  plugins: [require("@tailwindcss/container-queries")],
};
export default config;
