import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Base & Neutrals
        'base-white': '#FFFFFF',
        'warm-cream': '#F8F7F4',
        'soft-gray': '#F5F4F1',
        'divider-gray': '#E5E3DF',
        
        // Primary Brand Colors - Deep Navy & Emerald
        'navy-primary': '#1B3A57', // Deep professional navy
        'navy-dark': '#0F2537', // Darker navy for depth
        'navy-light': '#2A4D6B', // Lighter navy for accents
        
        'emerald-primary': '#10B981', // Vibrant emerald green
        'emerald-dark': '#059669', // Deeper emerald
        'emerald-light': '#34D399', // Lighter emerald
        
        // Accent Colors - Coral & Purple
        'coral-accent': '#F87171', // Warm coral for CTAs
        'coral-dark': '#EF4444', // Deeper coral
        'coral-light': '#FCA5A5', // Lighter coral
        
        'purple-accent': '#8B5CF6', // Rich purple for premium
        'purple-dark': '#7C3AED', // Deeper purple
        'purple-light': '#A78BFA', // Lighter purple
        
        // Success & Status
        'success-green': '#10B981',
        'warning-amber': '#F59E0B',
        'info-blue': '#3B82F6',
        
        // Text Colors
        'primary-text': '#0F172A', // Deep charcoal
        'secondary-text': '#475569', // Medium gray
        'tertiary-text': '#94A3B8', // Light gray
      },
      fontFamily: {
        serif: ['LandSerif', 'Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['LandSans', 'Space Grotesk', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.06)',
        'hover': '0 8px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
}
export default config

