# Khaatabook

## Live Demo (40-50% Completed)

You can view a live demo of the Khaatabook application here:
[Live Demo Link](https://khaatabook-test.vercel.app/)

## Tech Stacks Used

- **Backend**:
  ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
  ![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
- **Database**:
  ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
  ![Mongoose](https://img.shields.io/badge/Mongoose-880000?style=for-the-badge&logo=mongoose&logoColor=white)
- **Frontend**:
  ![EJS](https://img.shields.io/badge/EJS-8BC34A?style=for-the-badge&logo=javascript&logoColor=white)
  ![HTML](https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white)
  ![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
  ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
- **Authentication**:
  ![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)
  ![bcrypt](https://img.shields.io/badge/bcrypt-3B5998?style=for-the-badge&logo=none&logoColor=white)
  ![joi](https://img.shields.io/badge/Joi-3766AB?style=for-the-badge&logo=none&logoColor=white)
  ![dotenv](https://img.shields.io/badge/dotenv-ECD53F?style=for-the-badge&logo=dotenv&logoColor=black)
- **Charts**:
  ![Chart.js](https://img.shields.io/badge/Chart.js-F5788D?style=for-the-badge&logo=chart.js&logoColor=white)

## Introduction

Khaatabook is a comprehensive expense management application designed to help users keep track of their financial transactions effortlessly. This project allows users to add, categorize, and monitor their expenses, set budgets, and receive alerts when budgets are exceeded. The application also provides insightful graphs and reports to help users better understand their spending habits. Built using EJS for templating and MongoDB for data management, Khaatabook aims to make expense tracking easy and intuitive.

## Features

1. **Categorization and Tags**: Users can categorize their expenses into predefined categories and add tags for better organization.
2. **Budgeting and Alerts**: Set budgets for different categories and receive alerts when spending exceeds the set budget.
3. **Graphs and Reports**: Visual representations of expenses through graphs and detailed reports to understand spending patterns.
4. **User Profile and Customization**: Users can customize their profiles and settings according to their preferences.
5. **Expense Tracking**: Easily add, edit, and delete expenses with a user-friendly interface.

## Project Structure

### Models

#### User Model

- **username**: Unique identifier for the user.
- **name**: Full name of the user.
- **email**: Email address of the user, used for login and notifications.
- **password**: Encrypted password for user authentication.
- **expenses**: Array of references to the user's expenses.
- **budget**: Reference to the user's budget settings.

#### Expense Model

- **user**: Reference to the user who created the expense.
- **description**: Description of the expense.
- **amount**: Amount spent.
- **category**: Category of the expense (e.g., Food, Transportation).
- **tags**: Tags for better organization of expenses.
- **date**: Date when the expense was made.

#### Budget Model

- **userId**: Reference to the user.
- **category**: Category for which the budget is set.
- **amount**: Budget amount.
- **alerts**: Array of alert settings related to the budget.

#### Alert Model

- **userId**: Reference to the user.
- **type**: Type of alert (e.g., budget).
- **threshold**: Threshold for triggering the alert.
- **active**: Boolean indicating if the alert is active.

### Views

The project uses EJS for rendering HTML views. The main views include:

1. **Dashboard**: Overview of user’s expenses, budget summary, and alerts. Includes quick links to add new expenses, view reports, and customize profile.
2. **Expense Management**: Form to add new expenses with fields for description, amount, category, and tags.
3. **Graphs and Reports**: Visual representations of expenses using pie charts and other graphical formats.

### Controllers

The controllers manage the application's logic and handle requests and responses:

- **User Controls**: Handle user authentication, profile management, and fetching user-related data.
- **Expense Controls**: Manage expense creation, updating, and deletion.
- **Budget Controls**: Handle budget settings and alert management.

### Middleware

The project includes middleware for user authentication to ensure that only authenticated users can access certain routes.

## Installation and Setup

1. **Clone the Repository**:
    ```bash
    git clone https://github.com/yourusername/khaatabook.git
    ```

2. **Install Dependencies**:
    ```bash
    cd khaatabook
    npm install
    ```

3. **Configure Environment Variables**:
    Create a `.env` file in the root directory and add your MongoDB URI and other necessary environment variables:
    ```env
    MONGODB_URI=your_mongodb_uri
    SECRET_KEY=your_secret_key
    ```

4. **Run the Application**:
    ```bash
    npm start
    ```

5. **Access the Application**:
    Open your browser and navigate to `http://localhost:3000`.

## Usage

1. **Register and Login**: Users can register a new account or log in to an existing account.
2. **Dashboard**: View an overview of expenses, budgets, and alerts.
3. **Add Expense**: Navigate to the expense management page to add new expenses.
4. **Set Budget**: Define budgets for different categories and set up alerts.
5. **View Reports**: Access detailed reports and visualizations of your spending patterns.

---

Thank you for using Khaatabook! If you have any questions or need further assistance, feel free to open an issue or contact us.
