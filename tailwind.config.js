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
    },
  },
  plugins: [],
}
