import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#f7fafc',
        'surface-low': '#f1f4f6',
        'surface-lowest': '#ffffff',
        'surface-high': '#e5e9eb',
        'on-surface': '#181c1e',
        'on-surface-2': '#4a5568',
        'on-surface-3': '#718096',
        brand: '#0058c3',
        'brand-2': '#0070f3',
        outline: 'rgba(74,85,104,0.15)',
      },
      fontFamily: {
        inter: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        tight: '-0.02em',
        caps: '0.08em',
      },
      borderRadius: {
        sm: '2px',
        DEFAULT: '4px',
        lg: '8px',
      },
      backgroundImage: {
        'brand-grad': 'linear-gradient(135deg, #0058c3 0%, #0070f3 100%)',
      },
      boxShadow: {
        float: '0px 8px 24px rgba(24,28,30,0.06)',
      },
    },
  },
  plugins: [],
}

export default config
