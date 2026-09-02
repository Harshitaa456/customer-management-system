import React, { useState } from 'react';
import { useUser } from '@clerk/clerk-react';
import { Menu, User, Mail, Briefcase } from 'lucide-react';
import Sidebar from '../components/Sidebar';
import AppHeader from '../components/AppHeader';

const ProfilePage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { user, isLoaded } = useUser();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: "url('/aventra-bg-main.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
      >
        Loading...
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const fullName =
    user.fullName ||
    `${user.firstName || ''} ${user.lastName || ''}`.trim() ||
    'User';

  const email =
    user.primaryEmailAddress?.emailAddress || 'No email';

  const initials =
    `${user.firstName?.[0] || ''}${user.lastName?.[0] || ''}`.toUpperCase() ||
    fullName.charAt(0).toUpperCase();

  return (
    <div
      className="min-h-screen flex min-w-0"
      style={{
        backgroundImage: "url('/aventra-bg-main.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 min-w-0 flex flex-col md:ml-64">

        <AppHeader>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 rounded-lg text-sidebar-foreground hover:bg-sidebar-hover transition-all duration-200 ease-smooth hover:shadow-soft"
              >
                <Menu className="w-6 h-6" />
              </button>

              <h1 className="text-2xl font-bold text-sidebar-foreground">
                Profile
              </h1>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-sidebar-active rounded-full flex items-center justify-center text-sidebar-foreground font-semibold">
                {initials}
              </div>
            </div>
        </AppHeader>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6">
          <div className="max-w-2xl mx-auto">
            <div className="card p-4 sm:p-6 md:p-8">

              {/* Profile Header */}
              <div className="flex flex-col items-center text-center mb-8">

                <div className="w-24 h-24 sm:w-32 sm:h-32 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-3xl sm:text-4xl font-bold mb-4">
                  {initials}
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-foreground break-words">
                  {fullName}
                </h2>

                <p className="text-muted-foreground mt-1 break-all">
                  {email}
                </p>

                <span className="mt-3 px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                  User
                </span>

              </div>

              {/* Profile Details */}
              <div className="space-y-6">

                <div className="flex items-start gap-3 sm:gap-4 p-4 bg-muted rounded-lg">
                  <User className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground mt-1 flex-shrink-0" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Full Name
                    </p>

                    <p className="text-lg font-medium text-foreground">
                      {fullName}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 bg-muted rounded-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground mt-1 flex-shrink-0" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Email Address
                    </p>

                    <p className="text-base sm:text-lg font-medium text-foreground break-all">
                      {email}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 sm:gap-4 p-4 bg-muted rounded-lg">
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground mt-1 flex-shrink-0" />

                  <div>
                    <p className="text-sm text-muted-foreground">
                      Role
                    </p>

                    <p className="text-lg font-medium text-foreground">
                      User
                    </p>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </main>

      </div>
    </div>
  );
};

export default ProfilePage;