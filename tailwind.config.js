/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      black: '#000000',
      'blue': '#1fb6ff',
      'indigo': '#6366f1',
      'indigo-dark': '#4f46e5',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'emerald': '#10b981',
      'amber': '#f59e0b',
      'gold': '#F7AB0A',
      'red': '#ef4444',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
      'slate': '#94a3b8',
      'navy': '#0f172a',
      'navy-light': '#1e293b',
      'surface': '#111827',
      'surface-light': '#1f2937',
      'bg': '#0d1117',
    },
    fontFamily: {
      sans: ['Inter', 'Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(99, 102, 241, 0.3)',
        'glow-amber': '0 0 20px rgba(247, 171, 10, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #0d1117 0%, #111827 50%, #0d1117 100%)',
      },
    }
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}

