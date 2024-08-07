/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1400px" },
      xl: { max: "1279px" },
      lg: { max: "1000px" },
      md: { max: "750px" },
      xmd: { max: "600px" },
      sm: { max: "450px" },
      xsm: { max: "360px" },
    },
    extend: {
      colors: {
        primary: "#1E232C",
        background: "#001E30;",
        backgroundLight: "#F4F4F4",
        textPrimary: "#1E232C",
        textSecundary: "#272C30",
        subText: "#526068;",
      },
      boxShadow: {
        "shadow-button-cta": "0px 17px 69.6px 0px rgba(0, 0, 0, 0.25);",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        UniteaSans: ["UniteaSans"],
      },
    },
  },
  plugins: [],
};
