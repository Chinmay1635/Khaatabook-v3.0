
### 1. Models

**User Model:**✅
- Fields: `username`, `email`, `password`, `budget` (monthly, yearly).

**Expense Model:**✅
- Fields: `userId` (reference to User), `description`, `amount`, `category`, `tags`, `date`.

**Budget Model:**✅
- Fields: `userId` (reference to User), `monthlyBudget`, `yearlyBudget`.

**Alert Model:**
- Fields: `userId` (reference to User), `type` (budget, etc.), `threshold`, `active`.

### 2. Views

**Landing Page:**✅
- Hero section with app overview.
- Features section explaining categorization, tags, budgeting, alerts, graphs, reports, and customization.
- Call to action (CTA) buttons for signup and login.

**Signup and Login Pages:**✅
- Forms for user registration and authentication.

**Dashboard:**✅
- Overview of user’s expenses.
- Budget summary and alerts.
- Quick links to add new expenses, view reports, and customize profile.

**Expense Management:**
- Form to add new expense.
- List of expenses with options to filter by category, tags, and date.

**Reports:**
- Visual representation of expenses using graphs (pie charts, bar charts, line charts).
- Filter options to view reports by month, year, category, and tags.

**User Profile:**
- Form to update user details and customization settings (theme, language).

### 3. Controllers

**Auth Controller:**✅
- Methods for user registration, login, and logout.

**Expense Controller:**✅
- Methods for adding, updating, deleting, and fetching expenses.
- Method for categorization and tagging of expenses.

**Budget Controller:**
- Methods for setting and fetching budgets.✅
- Method to check and trigger alerts when budget thresholds are exceeded.

**Alert Controller:**
- Methods to create, fetch, and manage alerts.

**Report Controller:**
- Methods to generate data for different types of graphs and reports.

**Profile Controller:**
- Methods to update user profile and customization settings.

### 4. Routes

**Auth Routes:**✅
- `GET /signup` – Render signup page.
- `POST /signup` – Handle user registration.
- `GET /login` – Render login page.
- `POST /login` – Handle user login.
- `GET /logout` – Handle user logout.

**Expense Routes:**
- `GET /expenses` – Render expense management page.✅
- `POST /expenses` – Add a new expense.✅
- `PUT /expenses/:id` – Update an expense.
- `DELETE /expenses/:id` – Delete an expense.

**Budget Routes:**✅
- `GET /budget` – Fetch user budget.
- `POST /budget` – Set user budget.

**Alert Routes:**
- `GET /alerts` – Fetch user alerts.
- `POST /alerts` – Create a new alert.
- `PUT /alerts/:id` – Update an alert.
- `DELETE /alerts/:id` – Delete an alert.

**Report Routes:**
- `GET /reports` – Render reports page.
- `GET /reports/data` – Fetch data for reports.

**Profile Routes:**
- `GET /profile` – Render user profile page.
- `POST /profile` – Update user profile.

### 5. Interaction Flow

**User Flow:**
1. **Signup/Login:**
   - User registers or logs in.
   - User data is stored and session is created.

2. **Dashboard:**
   - User views an overview of expenses and budget status.
   - Quick links to various features (add expense, view reports, update profile).

3. **Expense Management:**
   - User adds or updates expenses with categories and tags.
   - User views and filters the list of expenses.

4. **Budgeting and Alerts:**
   - User sets monthly and yearly budgets.
   - System checks expenses against budget and triggers alerts if thresholds are exceeded.

5. **Reports:**
   - User generates and views visual reports (graphs) on expenses.
   - User filters reports by various parameters (date, category, tags).

6. **Profile Customization:**
   - User updates personal information and customization settings (theme, language).

### 6. Visual Design

**Dashboard:**
- Summary cards for total expenses, remaining budget, and alerts.
- Graphical representation of expenses.

**Expense Management:**
- Form with fields for description, amount, category, tags, and date.
- List view with filters and search functionality.

**Reports:**
- Section with different types of graphs (pie, bar, line).
- Filter panel to customize the report view.

**Profile:**
- Form with fields for updating username, email, password, and customization options.

