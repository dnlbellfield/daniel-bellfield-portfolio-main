/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/css/tailwind.css"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111d13",
          soft: "#3f5143",
          muted: "#718075",
          title: "#2f4934",
          body: "#34483a"
        },
        paper: {
          DEFAULT: "#fbfcf8",
          warm: "#f3f6ef"
        },
        surface: "#ffffff",
        line: {
          DEFAULT: "#e2e7df",
          strong: "#cfd8cc"
        },
        accent: {
          DEFAULT: "#415d43",
          hover: "#304833",
          soft: "#e9f1e7",
          light: "#b9d7bd"
        },
        portrait: {
          top: "#8fb996",
          bottom: "#a1cca5"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      },
      fontSize: {
        eyebrow: ["0.84rem", { lineHeight: "1.2" }],
        "body-sm": ["0.9rem", { lineHeight: "1.25" }],
        body: ["0.98rem", { lineHeight: "1.64" }],
        "body-lg": ["1.06rem", { lineHeight: "1.72" }],
        "card-title": ["1rem", { lineHeight: "1.28" }],
        "hero-title": ["clamp(2.45rem,4.6vw,3.85rem)", { lineHeight: "1.08" }],
        "section-title": ["clamp(1.9rem,2.8vw,2.45rem)", { lineHeight: "1.14" }],
        "panel-title": ["clamp(1.45rem,2.15vw,1.95rem)", { lineHeight: "1.14" }]
      },
      borderRadius: {
        sm: "0.5rem",
        md: "0.75rem",
        lg: "1rem"
      },
      boxShadow: {
        sm: "0 1px 2px rgba(17, 29, 19, 0.035)",
        md: "0 6px 18px rgba(17, 29, 19, 0.065)",
        lg: "0 18px 42px rgba(17, 29, 19, 0.085)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out both"
      }
    }
  },
  plugins: []
};
