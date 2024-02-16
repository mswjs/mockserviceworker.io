const defaultTheme = require("tailwindcss/defaultTheme");

const COLOR_ORANGE = "#FF6A33";

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    fontFamily: {
      sans: [
        [
          "Inter",
          "system-ui",
          "-apple-system",
          ...defaultTheme.fontFamily.sans,
        ],
      ],
      mono: [
        ['"Mono Lisa"', ...defaultTheme.fontFamily.mono],
        {
          fontFeatureSettings: '"ss03"',
        },
      ],
    },
    extend: {
      container: {
        center: true,
        padding: "1.25rem",
      },
      colors: {
        orange: COLOR_ORANGE,
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            "--tw-prose-links": theme("colors.orange"),
            color: theme("colors.neutral.200"),
            "h1, h2, h3, h4": {
              color: theme("colors.white"),
            },
            h2: {
              borderTop: `1px solid ${theme("colors.neutral.800")}`,
              paddingTop: "2em",
              fontWeight: theme("font.bold"),
            },
            h4: {
              fontSize: theme("fontSize.lg"),
            },
            a: {
              color: theme("colors.orange"),
            },
            strong: {
              color: null,
            },
            pre: null,
            code: {
              color: theme("colors.neutral.200"),
              background: theme("colors.neutral.800"),
              border: `1px solid ${theme("colors.neutral.700")}`,
              borderRadius: theme("borderRadius.md"),
              padding: `0 ${theme("padding.1")}`,
            },
            "code::before": null,
            "code::after": null,
            blockquote: {
              color: theme("colors.neutral.400"),
              borderColor: theme("colors.neutral.700"),
              borderLeftWidth: 2,
              fontStyle: "normal",
              fontWeight: theme("font.semibold"),
              lineHeight: 1.5,
            },
            "blockquote p:first-of-type::before": null,
            "blockquote p:first-of-type::after": null,
            hr: {
              borderColor: theme("colors.neutral.800"),
            },
            thead: {
              borderColor: theme("colors.neutral.600"),
            },
            th: {
              color: theme("colors.neutral.300"),
            },
            tr: {
              borderColor: theme("colors.neutral.700"),
            },
          },
        },
      }),
      transitionDuration: {
        long: "5000ms",
      },
      keyframes: {
        pingDelay: {
          "0%": { transform: "scale(1)", opacity: 1 },
          "25%,100%": { transform: "scale(2)", opacity: 0 },
        },
      },
      animation: {
        ping: "pingDelay 4s linear infinite",
      },
    },
  },
  variants: {
    animation: ["motion-safe", "motion-reduce"],
  },
  plugins: [require("@tailwindcss/typography")],
};
