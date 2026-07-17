# Customer Management System (Aventra)

A modern SaaS Customer Management System / CRM built with React, Vite, and Tailwind CSS.

## Tech Stack

- **Frontend Framework**: React.js
- **Build Tool**: Vite
- **Language**: JavaScript
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Styling**: Tailwind CSS
- **Font**: Inter

## Theme Colors

- Primary: Indigo #6366F1
- Secondary: Purple #8B5CF6
- Accent: Lavender #C4B5FD
- Background: #F8FAFC
- Cards: white
- Main text: #0F172A

## Project Structure

```
src/
  components/
    Button.jsx          - Reusable button component
    Input.jsx           - Reusable input component
    Logo.jsx            - Brand logo component
    Navbar.jsx          - Navigation bar
    Footer.jsx          - Footer component
    DashboardCard.jsx   - Dashboard stat card
    Sidebar.jsx         - Dashboard sidebar
    CustomerTable.jsx   - Customer data table
    SearchBar.jsx       - Search input component
    Pagination.jsx      - Pagination component
    Modal.jsx           - Modal component
  pages/
    LandingPage.jsx         - Landing page (/)
    LoginPage.jsx           - Login page (/login)
    SignupPage.jsx          - Signup page (/signup)
    DashboardPage.jsx       - Dashboard (/dashboard)
    CustomersPage.jsx       - Customers list (/customers)
    AddCustomerPage.jsx     - Add customer (/customers/new)
    EditCustomerPage.jsx    - Edit customer (/customers/:id/edit)
    CustomerDetailsPage.jsx - Customer details (/customers/:id)
    ProfilePage.jsx         - User profile (/profile)
    NotFoundPage.jsx        - 404 page (*)
  App.jsx                  - Main app with routes
  main.jsx                 - Entry point
  index.css                - Global styles
```

## Available Routes

- `/` - Landing Page
- `/login` - Login Page
- `/signup` - Signup Page
- `/dashboard` - Dashboard
- `/customers` - Customers List
- `/customers/new` - Add New Customer
- `/customers/:id/edit` - Edit Customer
- `/customers/:id` - Customer Details
- `/profile` - User Profile
- `*` - 404 Page

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Features

### Landing Page
- Hero section with CTA
- Features showcase
- Social proof section
- Responsive design

### Authentication Pages
- Login with email/password
- Signup with full name, email, password
- Social login buttons (Google, Microsoft) - UI only
- Password show/hide toggle
- Remember me checkbox
- Responsive two-panel layout

### Dashboard
- Summary cards (Total, Active, New, Recent customers)
- Customer health analytics
- Recent customers table
- Search functionality
- Add customer button
- Responsive sidebar navigation

### Customers Page
- Full customer table
- Search by name, email, company
- Filter by status (Active, Pending, Inactive)
- Pagination
- View, Edit, Delete actions

### Customer Management
- Add new customer with all fields
- Edit existing customer
- View detailed customer information
- Status badges

### User Profile
- Profile display
- Edit profile button
- Logout functionality

## Current Status

**Frontend Only** - All pages are built with dummy data. No backend integration yet.

## Future Backend Plan

- **Authentication**: Firebase Authentication
- **Backend**: Node.js + Express
- **Database**: PostgreSQL
- **ORM**: Prisma
- **APIs**: REST APIs for customer CRUD operations

## Notes

- Login and Signup are UI-only - no real authentication
- All forms use dummy data - no API calls
- Navigation works through React Router
- Fully responsive design
- Modern SaaS-inspired UI (Linear, Clerk, Framer style)
