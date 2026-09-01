import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  UserPlus,
  Pencil,
  Activity,
  Search,
  Plus,
  LayoutDashboard,
  Users,
  Settings,
  LogOut,
  Eye,
  Trash2,
  Clock,
  UserCheck,
  UserX,
} from "lucide-react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Button from "../components/Button";

const LandingPage = () => {
  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden bg-[#f7f7f4]"
    style={{
      backgroundImage: "url('/aventra-bg.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundAttachment: "fixed",
    }}>
      <Navbar />

      {/* HERO */}
      <main className="flex-1">
        <section className="relative overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(99,102,241,0.12),_transparent_30%),radial-gradient(circle_at_left,_rgba(16,185,129,0.08),_transparent_28%)]" />

          <div className="relative max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 pt-20 pb-16 lg:pt-28 lg:pb-24">
            <div className="max-w-3xl mx-auto text-center">

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0F172A] leading-[1.1]">
                Customer management,
                <span className="block text-primary mt-2">
                  without the mess.
                </span>
              </h1>

              <p className="mt-7 text-lg sm:text-xl leading-relaxed text-gray-600 max-w-2xl mx-auto">
                Keep your customer information organised in one place. Add
                customers, update their details, and easily keep track of their
                current status.
              </p>

              <div className="mt-9 flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/signup">
                  <Button
                    variant="primary"
                    className="w-full flex sm:w-auto px-7 py-3.5 text-base"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>

                <Link to="/login" className="w-full sm:w-auto">
                  <Button
                    variant="secondary"
                    className="w-full sm:w-auto px-7 py-3.5 text-base"
                  >
                    Sign In
                  </Button>
                </Link>
              </div>
            </div>

            {/* APP PREVIEW */}
            {/* APP PREVIEW */}
<div className="mt-16 lg:mt-20 max-w-6xl mx-auto">
  <div className="rounded-2xl border border-gray-200 bg-[#f8f9fc] shadow-2xl overflow-hidden">

    {/* Top Bar */}
    <div className="h-14 bg-white border-b border-gray-200 flex items-center justify-between px-5 sm:px-7">

      <div className="flex items-center gap-3 border border-gray-200 rounded-lg px-3 py-2 w-48 sm:w-64">
        <Search className="w-4 h-4 text-gray-400" />
        <span className="text-xs sm:text-sm text-gray-400 truncate">
          Search customers...
        </span>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-semibold">
          H
        </div>

        <div className="hidden sm:block">
          <p className="text-sm font-semibold text-[#0F172A]">
            Your Account
          </p>
        </div>
      </div>
    </div>

    <div className="flex">

      {/* Sidebar */}
      <aside className="hidden md:flex w-48 lg:w-56 bg-white border-r border-gray-200 min-h-[500px] flex-col">

        <div className="px-6 py-6">
          <h3 className="text-xl font-bold text-[#0F172A]">
            Aventra
          </h3>
        </div>

        <nav className="px-3 space-y-1">

          <PreviewNavItem
            icon={LayoutDashboard}
            label="Dashboard"
            active
          />

          <PreviewNavItem
            icon={Users}
            label="Customers"
          />

          <PreviewNavItem
            icon={UserCheck}
            label="Profile"
          />

          <PreviewNavItem
            icon={Settings}
            label="Settings"
          />
        </nav>

        <div className="mt-auto p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 text-red-500 text-sm font-medium">
            <LogOut className="w-4 h-4" />
            Logout
          </div>
        </div>
      </aside>

      {/* Dashboard */}
      <div className="flex-1 p-5 sm:p-7 lg:p-8 min-w-0">

        {/* Dashboard Header */}
        <div className="flex items-start justify-between gap-4 mb-7">

          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-[#0F172A]">
              Dashboard
            </h3>

            <p className="text-xs sm:text-sm text-gray-500 mt-1">
              Here's what's happening with your customers.
            </p>
          </div>

          <div className="hidden sm:flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium">
            <Plus className="w-4 h-4" />
            Add Customer
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">

          <PreviewStat
            title="Total Customers"
            value="24"
            icon={Users}
          />

          <PreviewStat
            title="Active Customers"
            value="16"
            icon={UserCheck}
          />

          <PreviewStat
            title="Pending"
            value="5"
            icon={Clock}
          />

          <PreviewStat
            title="Inactive"
            value="3"
            icon={UserX}
          />

        </div>

        {/* Recent Customers */}
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">

          <div className="flex items-center justify-between px-5 py-5 border-b border-gray-100">

            <h4 className="font-semibold text-[#0F172A]">
              Recent Customers
            </h4>

            <span className="text-sm text-primary font-medium">
              View All
            </span>
          </div>

          {/* Table Header */}
          <div className="hidden sm:grid grid-cols-[1.4fr_1.5fr_1fr_1fr_auto] gap-4 px-5 py-3 text-xs font-medium text-gray-400 border-b border-gray-100">
            <span>Customer</span>
            <span>Email</span>
            <span>Status</span>
            <span>Company</span>
            <span>Actions</span>
          </div>

          <PreviewCustomer
            initials="KK"
            name="Kritika Ahuja"
            email="kritika@gmail.com"
            company="HCL"
            status="Active"
          />

          <PreviewCustomer
            initials="R"
            name="Rohini"
            email="rohini@gmail.com"
            company="Acer"
            status="Inactive"
          />

          <PreviewCustomer
            initials="S"
            name="Shweta"
            email="shweta@gmail.com"
            company="Havells"
            status="Active"
          />

          <PreviewCustomer
            initials="SA"
            name="Ankur Saxena"
            email="ankur@gmail.com"
            company="Wipro"
            status="Inactive"
          />

        </div>

      </div>
    </div>
  </div>

  <p className="text-center text-sm text-gray-500 mt-5">
    A simple place to keep your customer records organised.
  </p>
</div>
          </div>
        </section>

        {/* WHAT YOU CAN DO */}
        <section className=" py-20 lg:py-28"
        style={{
          backgroundImage: "url('/aventra-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}>
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10">
            <div className="max-w-xl mb-12 lg:mb-16">
              <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                Keep it simple
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-[#0F172A] tracking-tight">
                Everything you need to manage your customer records.
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard
                icon={UserPlus}
                number="01"
                title="Add customers"
                description="Store customer information in one organised place instead of keeping track of multiple spreadsheets."
              />

              <FeatureCard
                icon={Activity}
                number="02"
                title="Track their status"
                description="Quickly see whether a customer is active, inactive, or pending and update their status whenever needed."
              />

              <FeatureCard
                icon={Pencil}
                number="03"
                title="Keep records updated"
                description="View, edit, or remove customer information easily whenever details change."
              />
            </div>
          </div>
        </section>

        {/* SIMPLE CTA */}
        <section className="py-20 lg:py-28">
          <div className="max-w-5xl mx-auto px-6 sm:px-8">
            <div className="rounded-3xl bg-[#0F172A] px-7 py-14 sm:px-12 sm:py-16 text-center">
              <p className="text-primary font-medium mb-4">
                Aventra
              </p>

              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Keep your customer information in one place.
              </h2>

              <p className="text-gray-300 mt-5 max-w-xl mx-auto text-lg leading-relaxed">
                A straightforward way to add, organise, and manage your customer
                records without unnecessary complexity.
              </p>

              <div className="mt-8">
                <Link to="/signup">
                  <Button
                    variant="secondary"
                    className="px-7 py-3.5 flex text-base"
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};


/* COMPONENTS */

const FeatureCard = ({ icon: Icon, number, title, description }) => (
  <div className="group rounded-2xl border border-gray-200 bg-[#fafaf8] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
    <div className="flex items-start justify-between mb-10">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>

      <span className="text-sm text-gray-400 font-medium">
        {number}
      </span>
    </div>

    <h3 className="text-xl font-semibold text-[#0F172A] mb-3">
      {title}
    </h3>

    <p className="text-gray-600 leading-relaxed">
      {description}
    </p>
  </div>
);


const PreviewCard = ({ label, value }) => (
  <div className="rounded-xl border border-gray-100 p-5">
    <p className="text-sm text-gray-500">
      {label}
    </p>

    <p className="text-3xl font-semibold text-[#0F172A] mt-2">
      {value}
    </p>
  </div>
);


const PreviewRow = ({ name, status, statusStyle }) => (
  <div className="grid grid-cols-3 items-center px-5 py-4 border-t border-gray-100 text-sm">
    <span className="text-gray-700 font-medium">
      {name}
    </span>

    <span>
      <span
        className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${statusStyle}`}
      >
        {status}
      </span>
    </span>

    <span className="text-right text-gray-400">
      Recently
    </span>
  </div>
);
const PreviewNavItem = ({ icon: Icon, label, active }) => (
  <div
    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm ${
      active
        ? "bg-primary text-white shadow-sm"
        : "text-gray-500"
    }`}
  >
    <Icon className="w-4 h-4" />
    <span>{label}</span>
  </div>
);
const PreviewCustomer = ({
  initials,
  name,
  email,
  company,
  status,
}) => {
  const isActive = status === "Active";

  return (
    <div className="grid grid-cols-[1fr_auto] sm:grid-cols-[1.4fr_1.5fr_1fr_1fr_auto] gap-4 items-center px-5 py-4 border-b border-gray-100 last:border-b-0">

      {/* Customer */}
      <div className="flex items-center gap-3 min-w-0">

        <div className="w-9 h-9 shrink-0 rounded-full bg-primary flex items-center justify-center text-white text-[10px] font-semibold">
          {initials}
        </div>

        <div className="min-w-0">
          <p className="text-sm font-medium text-[#0F172A] truncate">
            {name}
          </p>

          <p className="sm:hidden text-xs text-gray-400 truncate mt-0.5">
            {email}
          </p>
        </div>

      </div>

      {/* Email */}
      <p className="hidden sm:block text-xs text-gray-500 truncate">
        {email}
      </p>

      {/* Status */}
      <div className="hidden sm:block">
        <span
          className={`inline-flex px-2.5 py-1 rounded-full text-xs font-medium ${
            isActive
              ? "bg-green-50 text-green-700"
              : "bg-gray-100 text-gray-500"
          }`}
        >
          {status}
        </span>
      </div>

      {/* Company */}
      <p className="hidden sm:block text-xs text-gray-500">
        {company}
      </p>

      {/* Actions */}
      <div className="flex items-center gap-3 text-gray-400">

        <Eye className="w-3.5 h-3.5" />

        <Pencil className="w-3.5 h-3.5" />

        <Trash2 className="w-3.5 h-3.5 text-red-400" />

      </div>

    </div>
  );
};
const PreviewStat = ({ title, value, icon: Icon }) => (
  <div className="bg-white border border-gray-200 rounded-xl p-4">

    <div className="flex items-center justify-between gap-2">

      <div>
        <p className="text-[10px] sm:text-xs text-gray-500">
          {title}
        </p>

        <p className="text-xl sm:text-2xl font-semibold text-[#0F172A] mt-2">
          {value}
        </p>
      </div>

      <div className="hidden sm:flex w-9 h-9 rounded-lg bg-primary/10 items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>

    </div>
  </div>
);


export default LandingPage;