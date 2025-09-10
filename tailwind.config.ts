import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'h1': ['var(--text-h1)', { lineHeight: 'var(--leading-h1)', fontWeight: '700' }],
        'h2': ['var(--text-h2)', { lineHeight: 'var(--leading-h2)', fontWeight: '600' }],
        'h3': ['var(--text-h3)', { lineHeight: 'var(--leading-h3)', fontWeight: '600' }],
        'body': ['var(--text-body)', { lineHeight: 'var(--leading-body)', fontWeight: '400' }],
        'small': ['var(--text-small)', { lineHeight: 'var(--leading-small)', fontWeight: '400' }],
      },
      colors: {
        // WKEEL Brand Colors
        'wkeel-bg': 'hsl(var(--bg))',
        'wkeel-text': 'hsl(var(--text))',
        'wkeel-muted': 'hsl(var(--muted))',
        'wkeel-dim': 'hsl(var(--dim))',
        'wkeel-surface': 'hsl(var(--surface))',
        'wkeel-line': 'hsl(var(--line))',
        'wkeel-primary-bg': 'hsl(var(--primary-bg))',
        'wkeel-primary-text': 'hsl(var(--primary-text))',
        'wkeel-primary-hover': 'hsl(var(--primary-hover))',
        'wkeel-secondary-border': 'hsl(var(--secondary-border))',
        'wkeel-secondary-hover': 'hsl(var(--secondary-hover))',
        
        // Shadcn compatibility
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
        muted: {
          DEFAULT: "hsl(var(--muted-bg))",
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
      },
      backgroundImage: {
        'hero-gradient': 'var(--hero-gradient)',
        'grid-pattern': 'var(--grid-pattern)',
        'hero-combined': 'var(--hero-gradient), var(--grid-pattern)',
      },
      boxShadow: {
        'lift': 'var(--shadow-lift)',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      transitionProperty: {
        'fast': 'var(--transition-fast)',
        'smooth': 'var(--transition-smooth)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "fade-in": {
          from: {
            opacity: "0",
            transform: "translateY(10px)",
          },
          to: {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
