import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { SignIn, SignUp } from '@clerk/clerk-react';
import LandingPage from './pages/LandingPage';
import FeaturesPage from './pages/FeaturesPage';
import ReviewsPage from './pages/ReviewsPage';
import AboutPage from './pages/AboutPage';
import DashboardPage from './pages/DashboardPage';
import CustomersPage from './pages/CustomersPage';
import AddCustomerPage from './pages/AddCustomerPage';
import EditCustomerPage from './pages/EditCustomerPage';
import CustomerDetailsPage from './pages/CustomerDetailsPage';
import ProfilePage from './pages/ProfilePage';
import SettingsPage from './pages/SettingsPage';
import NotFoundPage from './pages/NotFoundPage';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/features" element={<FeaturesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/about" element={<AboutPage />} />
        
        {/* Clerk Auth Routes */}
       <Route 
  path="/login/*" 
  element={
    <div className="flex items-center justify-center min-h-screen">
      <SignIn
        routing="path"
        path="/login"
        forceRedirectUrl="/dashboard"
      />
    </div>
  } 
/>
      <Route 
  path="/signup/*" 
  element={
    <div className="flex items-center justify-center min-h-screen">
      <SignUp
        routing="path"
        path="/signup"
        forceRedirectUrl="/dashboard"
      />
    </div>
  } 
/>

        {/* Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customers" 
          element={
            <ProtectedRoute>
              <CustomersPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customers/new" 
          element={
            <ProtectedRoute>
              <AddCustomerPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customers/:id/edit" 
          element={
            <ProtectedRoute>
              <EditCustomerPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/customers/:id" 
          element={
            <ProtectedRoute>
              <CustomerDetailsPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/settings" 
          element={
            <ProtectedRoute>
              <SettingsPage />
            </ProtectedRoute>
          } 
        />

        {/* 404 Route */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
  );
}

export default App;
