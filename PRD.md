# Product Requirements Document (PRD)
## Aventra CRM — Customer Management System

**Version:** 1.0  
**Status:** In progress  
**Last updated:** August 2026  

---

## 1. Overview

### 1.1 Product name
**Aventra CRM** — a customer relationship management web app for tracking customers, viewing dashboard stats, and (later) organizing customers by company and branch.

### 1.2 Problem
Small teams and learners need a simple CRM to store customer details, browse them in one place, and eventually group people by organization and branch — without starting from a heavy enterprise tool.

### 1.3 Goal
Ship a full-stack CRM where:
- Users can manage customers (create, read, update, delete) with real database data
- A React frontend talks to a Node/Express + PostgreSQL backend
- Authentication is handled with Firebase
- Organizations and branches can group customers by company location (Phase 2)

### 1.4 Non-goals (for now)
- Billing / payments
- Multi-tenant SaaS admin panel
- Mobile native apps
- Advanced analytics / reporting engines
- Email campaigns or marketing automation

---

## 2. Users

| Persona | Needs |
|--------|--------|
| CRM user (sales/ops) | Add customers, search/filter, view details, edit status |
| Future org manager | Browse companies, open a company, see people + branches |
| App owner / learner | Understand stack end-to-end; portfolio-ready product |

---

## 3. Current product state

### 3.1 Frontend (implemented — mostly UI)

**Stack:** React.js, Vite, JavaScript, React Router DOM, Lucide React, Tailwind CSS, Inter font  

**Theme:**
| Token | Value |
|--------|--------|
| Primary | Indigo `#6366F1` |
| Secondary | Purple `#8B5CF6` |
| Accent | Lavender `#C4B5FD` |
| Background | `#F8FAFC` |
| Cards | White |
| Main text | `#0F172A` |

**Pages / routes:**

| Route | Page | Notes |
|--------|------|--------|
| `/` | Landing | Hero, features, reviews CTA |
| `/features` | Features | Implemented |
| `/about` | About | Implemented |
| `/reviews` | Reviews | Implemented |
| `/login` | Login | UI only (no real auth yet) |
| `/signup` | Signup | UI only (no real auth yet) |
| `/dashboard` | Dashboard | Stats cards + recent customers (dummy data) |
| `/customers` | Customers list | CRUD UI with dummy data; search, filter, pagination |
| `/customers/new` | Add customer | Form UI; not wired to API yet |
| `/customers/:id` | Customer details | UI |
| `/customers/:id/edit` | Edit customer | UI |
| `/profile` | Profile | UI |
| `/settings` | Settings | Placeholder |
| `*` | 404 | Implemented |

**Shared components:** Button, Input, Logo, Navbar, Footer, DashboardCard, Sidebar, CustomerTable, SearchBar, Pagination, Modal  

**Frontend gaps:**
- Customer data is dummy / local UI only
- Auth is UI-only (routes marked protected in comments, not enforced)
- No Organizations pages yet
- Add Customer has `company` text field; no `branch` field yet

### 3.2 Backend (in progress)

**Stack:** Node.js, Express, PostgreSQL, Prisma, CORS, dotenv, nodemon  

**Done:**
- Express server running (e.g. port `5001`)
- Prisma connected to PostgreSQL (`aventra_crm`)
- `Customer` model + migration
- `GET /api/customers` — list all customers (tested; empty list returns `[]`)
- `POST /api/customers` — create customer (added; to be verified in Postman/Thunder Client)

**Customer model (current):**
```
id, name, email (unique), phone?, company?, status (default "Lead"), createdAt, updatedAt
```

**Not done yet:**
- `GET /api/customers/:id`
- `PUT /api/customers/:id`
- `DELETE /api/customers/:id`
- Frontend ↔ API integration
- Firebase Authentication
- Organization / Branch models and APIs

---

## 4. Functional requirements

### 4.1 Marketing / public site
| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| F-01 | Landing page with hero, features, reviews, CTA | Must | Done (UI) |
| F-02 | Features, About, Reviews pages | Must | Done (UI) |
| F-03 | Responsive layout (desktop + mobile) | Must | Done (UI) |

### 4.2 Authentication
| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| A-01 | Login / signup screens | Must | Done (UI only) |
| A-02 | Firebase Authentication (email/password or planned provider) | Must | Planned (last) |
| A-03 | Protect dashboard/customer routes for logged-in users only | Must | Planned |
| A-04 | Profile page reflects authenticated user | Should | Planned |

### 4.3 Dashboard
| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| D-01 | Show summary stats cards | Must | Done (UI / dummy) |
| D-02 | Show recent customers | Must | Done (UI / dummy) |
| D-03 | Stats and recent list use live API data | Must | Planned |

### 4.4 Customer management (core)
| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| C-01 | List all customers | Must | Backend GET done; frontend dummy |
| C-02 | Create customer (name, email required; phone, company, status optional) | Must | Backend POST added; frontend not wired |
| C-03 | View customer by id | Must | Planned |
| C-04 | Update customer | Must | Planned |
| C-05 | Delete customer | Must | Planned |
| C-06 | Search customers | Should | Frontend UI done; needs real data |
| C-07 | Filter customers (e.g. by status) | Should | Frontend UI done; needs real data |
| C-08 | Paginate customer list | Should | Frontend UI done; needs real data |

**API contract (target):**
| Method | Endpoint | Purpose |
|--------|----------|---------|
| `GET` | `/api/customers` | List customers |
| `POST` | `/api/customers` | Create customer |
| `GET` | `/api/customers/:id` | Get one customer |
| `PUT` | `/api/customers/:id` | Update customer |
| `DELETE` | `/api/customers/:id` | Delete customer |

### 4.5 Organizations & branches (Phase 2)
**Decision:** Use a proper relational model (Organization → Branch → Customer), not free-text company only.

**User story:**  
As a CRM user, I open **Organizations**, see company names (e.g. Google). I click Google and see customers in that organization, including which **branch** each person belongs to (e.g. Noida, Guwahati). Multiple people can share the same org + branch.

| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| O-01 | Organizations list page | Should | Planned (Phase 2) |
| O-02 | Organization detail: customers + branch per customer | Should | Planned |
| O-03 | Create/manage organizations | Should | Planned |
| O-04 | Create/manage branches under an organization | Should | Planned |
| O-05 | Add/Edit Customer: choose Organization + Branch (not only free-text company) | Should | Planned |
| O-06 | APIs for organizations (and nested customers/branches) | Should | Planned |

**Note:** Today’s `company` string on Customer is a temporary stand-in for Organization. Phase 2 replaces/extends this with `organizationId` + `branchId`.

### 4.6 Profile & settings
| ID | Requirement | Priority | Status |
|----|-------------|----------|--------|
| P-01 | User profile page | Could | UI done |
| S-01 | Settings page | Could | Placeholder |

---

## 5. Non-functional requirements

| ID | Requirement |
|----|-------------|
| N-01 | Frontend and backend run locally for development |
| N-02 | API returns JSON; CORS enabled for local React origin |
| N-03 | Database credentials stay in `.env` (never committed) |
| N-04 | Server errors must not crash the process; use try/catch on routes |
| N-05 | UI should remain usable on mobile (existing responsive patterns) |
| N-06 | Keep stack approachable for a beginner full-stack portfolio project |

---

## 6. Technical architecture

```
[ React (Vite) ]  --HTTP JSON-->  [ Express API ]
                                       |
                                   [ Prisma ]
                                       |
                                 [ PostgreSQL ]

Auth (later): Firebase Auth → protect routes / attach user identity
```

**Repo layout (relevant):**
```
customer-management-system/
├── src/                          # Frontend
├── backend/
│   ├── .env
│   ├── prisma/
│   │   ├── schema.prisma
│   │   └── migrations/
│   └── src/
│       ├── prisma.js
│       ├── server.js
│       └── Routes/customer.js
├── package.json
└── PRD.md
```

---

## 7. Delivery phases

### Phase 0 — Frontend shell *(done)*
- Landing, auth UI, dashboard UI, customer CRUD UI (dummy), profile/settings placeholders

### Phase 1 — Backend customer CRUD *(in progress)*
1. ~~Node/Express/Prisma/Postgres setup~~
2. ~~Customer model + migration~~
3. ~~`GET /api/customers`~~
4. ~~`POST /api/customers`~~ (verify with Postman/Thunder Client)
5. `GET /api/customers/:id`
6. `PUT /api/customers/:id`
7. `DELETE /api/customers/:id`
8. Connect React pages to these APIs (replace dummy data)
9. Firebase Authentication last

### Phase 2 — Organizations & branches *(planned)*
1. Prisma models: `Organization`, `Branch`; update `Customer` relations
2. Organization/branch APIs
3. Frontend: Organizations list + detail pages; sidebar link
4. Update Add/Edit Customer with org + branch selectors
5. Optional: dashboard card linking to organizations

### Phase 3 — Polish *(optional)*
- Real profile from Firebase user
- Settings that persist preferences
- Empty states, loading states, better error messages
- README + deploy

---

## 8. Success criteria

The product is “MVP complete” when:
1. A user can sign in with Firebase (or agreed auth approach)
2. A user can create, list, view, edit, and delete customers against PostgreSQL
3. Dashboard and customers pages show live data (not dummy arrays)
4. Basic search/filter works on real data

“Phase 2 complete” when:
1. Organizations are listed in the app
2. Opening an organization shows its customers and each customer’s branch
3. Add/Edit Customer assigns organization + branch correctly

---

## 9. Open decisions

| Topic | Current lean |
|--------|----------------|
| Auth timing | After customer API + React wiring |
| Company field | Keep until Phase 2; then move to Organization relation |
| Branch on Add Customer | Add in Phase 2 with Organization feature |
| Org data model | Option B: Organization → Branch → Customer |

---

## 10. Immediate next steps (resume here)

1. Verify `POST /api/customers` with Thunder Client / Postman  
2. Confirm `GET /api/customers` returns the new record  
3. Implement `GET /api/customers/:id`  
4. Implement `PUT` and `DELETE`  
5. Wire frontend customer pages to the API  
6. Add Firebase auth last  
7. Build Organizations + Branch (Phase 2) after core CRM works  

---

*This PRD reflects what exists in the repo today plus agreed planned work (including Organizations Option B).*
