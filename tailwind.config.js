/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        background: '#F8F1E7',
        surface: '#FBF6EE',
        card: '#FFFDF9',
        
        // Foregrounds
        foreground: '#283320',
        'muted-foreground': '#6B6F5B',
        
        // Brand / Primary
        primary: '#3A452E',
        'primary-hover': '#2E3926',
        'primary-foreground': '#FFFFFF',
        
        // Sidebar
        sidebar: '#3A452E',
        'sidebar-foreground': '#F8F1E7',
        'sidebar-active': '#283320',
        'sidebar-hover': '#4B583E',
        
        // Accent
        accent: '#E6DCCC',
        'accent-foreground': '#3A452E',
        
        // Borders & Inputs
        border: '#E6DCCC',
        input: '#FBF6EE',
        ring: '#6B6F5B',
        
        // Muted
        muted: '#F3ECE1',
        
        // Status
        success: '#6B7A5C',
        'success-foreground': '#FFFFFF',
        destructive: '#B85C4A',
        'destructive-foreground': '#FFFFFF',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgba(40, 51, 32, 0.08)',
        card: '0 4px 16px -4px rgba(40, 51, 32, 0.12)',
        'card-hover': '0 12px 32px -8px rgba(40, 51, 32, 0.18)',
        elevated: '0 8px 24px -6px rgba(40, 51, 32, 0.15)',
        header: '0 4px 12px -2px rgba(40, 51, 32, 0.14)',
        button: '0 2px 6px -1px rgba(40, 51, 32, 0.2)',
        'button-hover': '0 6px 16px -4px rgba(40, 51, 32, 0.28)',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
