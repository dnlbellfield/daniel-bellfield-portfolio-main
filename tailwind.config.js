/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./assets/css/tailwind.css"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#374151",
          soft: "#425066",
          muted: "#758195",
          title: "#1b2a41",
          body: "#334155"
        },
        paper: {
          DEFAULT: "#fbfcff",
          warm: "#eef4fb"
        },
        surface: "#ffffff",
        line: {
          DEFAULT: "#dde5ef",
          strong: "#c7d3e2"
        },
        accent: {
          DEFAULT: "#2f6fed",
          hover: "#2458c4",
          soft: "#e8f0ff",
          light: "#96c5fb"
        },
        portrait: {
          top: "#60a5fa",
          bottom: "#93c5fd"
        }
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"]
      },
      fontSize: {
        eyebrow: ["1rem", { lineHeight: "1.2" }],
        "body-sm": ["0.9rem", { lineHeight: "1.25" }],
        body: ["1.16rem", { lineHeight: "1.64" }],
        "body-lg": ["1.16rem", { lineHeight: "1.72" }],
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
        sm: "0 1px 2px rgba(22, 32, 51, 0.035)",
        md: "0 6px 18px rgba(22, 32, 51, 0.065)",
        lg: "0 18px 42px rgba(22, 32, 51, 0.085)"
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
