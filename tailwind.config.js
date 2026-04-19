/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        // Desert Sunset Custom Colors
        desert: {
          sand: '#F5E9DA',
          cream: '#FAF5EE',
          peach: '#F0D5C0',
          coral: '#E8C4A8',
          orange: '#D97A3A',
          burnt: '#A14E2C',
          brown: '#6B351C',
          dark: '#4A3728',
        },
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        warm: "0 4px 6px -1px rgba(161, 78, 44, 0.1), 0 2px 4px -2px rgba(161, 78, 44, 0.1)",
        "warm-lg": "0 10px 15px -3px rgba(161, 78, 44, 0.15), 0 4px 6px -4px rgba(161, 78, 44, 0.15)",
      },
      backgroundImage: {
        'desert-sunset': 'linear-gradient(180deg, #F5E9DA 0%, #F5E9DA 15%, #F0D5C0 35%, #E8C4A8 50%, #D97A3A 75%, #A14E2C 100%)',
        'desert-hero': 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(217, 122, 58, 0.15) 0%, transparent 60%), linear-gradient(180deg, #F5E9DA 0%, #F5E9DA 20%, #F0D5C0 45%, #E8C4A8 65%, #D97A3A 85%, #A14E2C 100%)',
        'desert-light': 'linear-gradient(180deg, #FAF5EE 0%, #F5E9DA 30%, #F0D5C0 70%, #E8C4A8 100%)',
        'desert-alt': 'linear-gradient(180deg, #F8F0E5 0%, #F2E2D0 50%, #EBD0B8 100%)',
        'desert-footer': 'linear-gradient(180deg, #A14E2C 0%, #8B4224 50%, #6B351C 100%)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
