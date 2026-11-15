# FinGuard

**Financial Resilience & Decision-Support Platform**

FinGuard is a financial resilience platform designed to help individuals understand their financial position, identify potential financial pressure, and make better-informed financial decisions.

Rather than functioning as a traditional budgeting application, FinGuard focuses on helping users understand their financial health, monitor debt obligations, assess their cashflow position, anticipate potential shortfalls, and explore practical ways to improve their financial resilience.

The platform is being developed with an initial focus on debt burden and limited cashflow buffers, particularly within the Nigerian financial context.

**Status:** MVP in Development

---

## Project Overview

FinGuard aims to help users answer important financial questions:

- How much of my income goes towards debt repayment?
- Can my current income comfortably cover my recurring expenses and obligations?
- How much financial buffer do I have?
- Am I likely to experience a cashflow shortfall?
- What factors are contributing to my current financial position?
- What practical actions can I take to improve my financial resilience?

The platform uses financial data, deterministic calculations, risk assessment, and decision-support capabilities to provide users with a clearer understanding of their financial situation.

## Core Features

The platform is being developed around the following capabilities:

- **User Authentication:** Secure user registration, login, and account management.
- **Financial Assessment:** Collect and assess relevant financial information.
- **Debt Management:** Track outstanding debts, repayment amounts, and obligations.
- **Cashflow Monitoring:** Understand income, recurring expenses, and available financial buffers.
- **Financial Analysis:** Calculate relevant financial metrics and assess financial pressure.
- **Shortfall Forecasting:** Identify potential future cashflow challenges.
- **Risk Explanation:** Help users understand the factors affecting their financial position.
- **Decision Support:** Provide practical recommendations based on financial assessments.
- **Loan Impact Simulation:** Explore how potential borrowing could affect financial capacity.
- **Intervention Tracking:** Monitor actions taken to improve financial resilience.

Features will be introduced incrementally as development progresses.

---

## Technology Stack

### Backend

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | Database |
| Mongoose | MongoDB object modelling |
| JWT | Authentication |
| Joi | Request validation |
| OpenAI API | AI integration |
| Cloudinary | File and media storage |
| Nodemailer | Email delivery |

### Frontend

| Technology | Purpose |
|---|---|
| React | User interface development |
| JavaScript | Application logic |

Additional frontend tools and libraries will be documented as the frontend is developed.

---

## Project Structure

FinGuard uses a monorepo structure, meaning the frontend and backend applications are maintained within one Git repository.

```text
finguard/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   ├── services/
│   │   └── app.js
│   │
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend/
│   └── React application
│
├── .github/
│   └── CODEOWNERS
│
├── .gitignore
└── README.md
```

### Backend

The backend is responsible for application logic, authentication, financial calculations, database operations, and communication with external services.

It follows a layered architecture:

```text
Client
  |
  v
Routes
  |
  v
Middlewares
  |
  v
Controllers
  |
  v
Services
  |
  v
Models
  |
  v
MongoDB
```

- **Routes:** Define API endpoints.
- **Middlewares:** Handle authentication, validation, logging, and request processing.
- **Controllers:** Handle incoming requests and outgoing responses.
- **Services:** Contain reusable business logic.
- **Models:** Define database structures and interact with MongoDB.
- **Configuration:** Manages database connections and external integrations.
- **Schemas:** Define validation rules for incoming data.

### Frontend

The frontend will be developed from scratch using React.

It will provide the user-facing experience for onboarding, financial assessment, dashboard interactions, and other platform features.

Frontend development is currently being set up.

---

## Getting Started

### Prerequisites

Before working on the project, ensure you have:

- Node.js installed.
- npm installed.
- Git installed.
- A MongoDB database.
- Access to the FinGuard repository.

### 1. Clone the Repository

```bash
git clone https://github.com/AhamefulaChibundu/FinGuard.git
```

Navigate into the project:

```bash
cd FinGuard
```

### 2. Set Up the Backend

Navigate into the backend directory:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a local environment file using the provided example:

```bash
cp .env.example .env
```

Update the `.env` file with your local configuration.

The backend currently expects the following environment variables:

```env
PORT=3050

MONGODB_URI=your_mongodb_connection_string

JWT_SECRET=your_long_random_secret

CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

OPENAI_API_KEY=your_openai_api_key


```

Only configure external service credentials when they are required by the feature you are working on.

**Important:** Never commit your `.env` file or expose credentials in source code.

### 4. Start the Backend

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

The backend currently uses port `3050` by default through its environment configuration.

The server establishes its MongoDB connection before starting the Express application.

### 5. Set Up the Frontend

Frontend setup instructions will be added once the React application has been initialized.

---

## Development Workflow

FinGuard is developed collaboratively by backend and frontend engineers.

The team uses Git branches and Pull Requests to organize development and integrate changes.

### Branch Structure

```text
main
  |
  └── develop
        |
        ├── feature/backend-...
        ├── feature/frontend-...
        └── fix/...
```

| Branch | Purpose |
|---|---|
| `main` | Stable application version |
| `develop` | Shared integration branch |
| `feature/*` | New feature development |
| `fix/*` | Branches for fixing independent bugs that are not part of an ongoing feature. |

### Contribution Process

1. Make sure your local repository is up to date.
2. Switch to the `develop` branch.
3. Create a branch for your assigned task.
4. Implement the feature or fix.
5. Test your changes locally.
6. Commit and push your changes.
7. Open a Pull Request targeting `develop`.
8. Request the appropriate review.
9. Address review comments.
10. Merge after approval.

Example:

```bash
git switch develop

git pull origin develop

git switch -c feature/backend-onboarding
```

Use clear and descriptive commit messages.

Suggested commit prefixes:

- `feat:` New functionality.
- `fix:` Bug fixes.
- `refactor:` Code restructuring without changing behaviour.
- `test:` Test-related changes.
- `docs:` Documentation updates.
- `chore:` Maintenance and configuration changes.

### Collaboration Guidelines

**Communicate before making significant changes to another developer's implementation.**

Before modifying existing functionality:

- Understand the existing implementation.
- Discuss significant changes with the responsible developer.
- Consider how the changes affect other parts of the application.
- Avoid duplicated work.

**Test before opening Pull Requests.**

Verify that:

- The application starts successfully.
- The affected functionality works as expected.
- Related functionality has not been broken.
- Authentication and authorization work where applicable.
- Validation and error handling behave correctly.

**Keep your branches synchronized.**

Regularly pull the latest changes from `develop` and resolve conflicts before submitting your work for review.

---

## Security and Data Privacy

FinGuard handles sensitive financial information. Protecting user data is an important part of the platform's development.

The product is designed around the following principles:

- Obtain explicit user consent before collecting financial information.
- Collect only the information required for the platform's functionality.
- Do not request users' BVN or full banking credentials.
- Protect authentication credentials and sensitive information.
- Allow users to request deletion of their financial data.
- Do not sell or share users' financial data with lenders or advertisers.
- Ensure financial recommendations are transparent and appropriately explained.

Security and privacy requirements will be incorporated throughout development.

---

## API Documentation

Backend API documentation and endpoint references will be maintained as the API evolves.

API testing and documentation will be managed using Postman.

---

## Development Status

FinGuard is currently in active MVP development.

The team is taking an incremental approach, beginning with the onboarding experience and progressively implementing the platform's core capabilities.

Initial development priorities include:

- Project architecture and repository setup.
- User onboarding.
- Consent and financial data collection.
- Financial assessment.
- Debt and cashflow analysis.
- Financial resilience monitoring.

Additional capabilities will be introduced as the MVP progresses.

---

## Contributing

Contributions are managed through the team's GitHub repository.

Developers should work on assigned feature branches and submit Pull Requests for review before changes are integrated into the shared development branch.

Please follow the established coding conventions, communicate significant changes, and test your work before submitting Pull Requests.

---

**FinGuard — Helping people understand their financial position, anticipate financial pressure, and build financial resilience.**