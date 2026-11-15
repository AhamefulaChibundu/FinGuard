# FinGuard

**Financial Resilience & Decision-Support Platform**

FinGuard is a financial resilience platform designed to help individuals understand their financial position, identify potential financial pressure, and make better-informed financial decisions.

Rather than functioning as a traditional budgeting application, FinGuard focuses on helping users understand their debt obligations, assess their cashflow position, anticipate potential shortfalls, and take informed action before financial pressure escalates.

Built with the Nigerian financial context in mind, FinGuard aims to make financial insights more accessible, practical, and useful.

**Project Status:** MVP in Development

---

## Table of Contents

- [Project Overview](#project-overview)
- [Core Features](#core-features)
- [Technology Stack](#technology-stack)
- [Project Structure](#project-structure)
- [System Architecture](#system-architecture)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Collaboration Guidelines](#collaboration-guidelines)
- [Security and Privacy](#security-and-privacy)
- [Documentation and Resources](#documentation-and-resources)
- [Development Priorities](#development-priorities)

---

## Project Overview

FinGuard is being developed to help users answer important financial questions:

- How much of my income is already committed to debt repayments?
- Are my recurring expenses putting pressure on my available income?
- Do I have enough financial buffer to handle upcoming obligations?
- Am I likely to experience a cashflow shortfall?
- What financial decisions could help improve my current position?
- How might taking on another loan affect my financial situation?

The goal is not simply to track how users spend money. It is to help them understand their financial capacity, recognize potential risks, and make better-informed decisions.

### Target Market

Nigeria.

### MVP Focus

The initial development focuses on two major areas:

1. **Debt Burden:** Understanding how existing debt obligations affect a user's financial position.
2. **Thin Cashflow Buffer:** Identifying situations where a user's available income may not be sufficient to comfortably cover recurring expenses and upcoming obligations.

---

## Core Features

The following capabilities form the planned FinGuard product. They are being developed incrementally as part of the MVP.

| Feature | Description |
|---|---|
| User Authentication | Secure account creation, login, and account management. |
| Financial Assessment | Collecting relevant financial information to understand a user's financial position. |
| Debt Management | Recording and monitoring existing debt obligations. |
| Cashflow Monitoring | Understanding income, recurring expenses, and available financial buffer. |
| Financial Analysis | Evaluating a user's financial position using relevant financial indicators. |
| Shortfall Forecasting | Identifying potential future cashflow gaps. |
| Risk Explanation | Explaining financial pressure and the factors contributing to it. |
| Decision Support | Providing practical, context-aware financial insights and recommendations. |
| Loan Impact Simulation | Exploring how a potential loan could affect a user's financial position. |
| Intervention Tracking | Monitoring actions taken by users to improve their financial situation. |

---

## Technology Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Tokens (JWT)
- Joi
- OpenAI API integration
- Cloudinary
- Brevo (Transactional Email)

### Frontend

- React
- JavaScript
- CSS

The frontend is being developed separately from the backend within the same repository.

---

## Project Structure

FinGuard uses a monorepo structure to keep the frontend and backend in one repository while allowing both teams to work independently.

```text
FinGuard/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── controllers/
│   │   ├── middlewares/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── schemas/
│   │   └── services/
│   │
│   ├── .env.example
│   ├── package.json
│   ├── package-lock.json
│   ├── server.js
│   └── README.md
│
├── frontend/
│   └── README.md
│
├── .github/
│   └── CODEOWNERS
│
├── .gitignore
└── README.md
```

### Directory Responsibilities

- `backend/`: Backend application, API endpoints, database operations, business logic, and integrations.
- `frontend/`: React application and user interface.
- `.github/`: GitHub collaboration and repository configuration.
- `README.md`: Main project documentation.

---

## System Architecture

The backend follows a layered architecture that separates responsibilities and makes the application easier to maintain.

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

### Layer Responsibilities

| Layer | Responsibility |
|---|---|
| Routes | Defines API endpoints and connects them to controllers. |
| Middlewares | Handles shared request processing, authentication, and validation where applicable. |
| Controllers | Handles incoming requests and outgoing responses. |
| Services | Contains reusable business logic and external service integrations. |
| Models | Defines database schemas and data structures. |
| MongoDB | Stores application data. |

The frontend communicates with the backend through HTTP requests to the REST API.

---

## Getting Started

### Prerequisites

Before setting up the project, ensure you have:

- [Node.js](https://nodejs.org/)
- npm
- [Git](https://git-scm.com/)
- Access to the FinGuard repository
- A MongoDB database connection

### 1. Clone the Repository

```bash
git clone https://github.com/AhamefulaChibundu/FinGuard.git
```

### 2. Navigate into the Project

```bash
cd FinGuard
```

### 3. Set Up the Backend

```bash
cd backend
npm install
```

### 4. Configure Environment Variables

Create your local environment file:

```bash
cp .env.example .env
```

Open `.env` and provide the required credentials.

The backend environment configuration includes:

| Variable | Purpose |
|---|---|
| `PORT` | Port on which the backend server runs. |
| `MONGODB_URI` | MongoDB connection string. |
| `JWT_SECRET` | Secret used for signing authentication tokens. |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name. |
| `CLOUDINARY_API_KEY` | Cloudinary API key. |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret. |
| `OPENAI_API_KEY` | OpenAI API key. |
| `BREVO_API_KEY` | Brevo API key for transactional email. |
| `BREVO_SENDER_EMAIL` | Verified sender email configured in Brevo. |
| `BREVO_SENDER_NAME` | Sender name displayed in outgoing emails. |

Never commit your `.env` file or expose API keys and credentials.

### 5. Start the Backend

For development:

```bash
npm run dev
```

For production:

```bash
npm start
```

The backend currently uses port `3050` by default.

### 6. Set Up the Frontend

Frontend setup is currently in progress. Refer to the [Frontend README](frontend/README.md) for updates.

---

## Development Workflow

The project uses Git branches to support parallel development and controlled integration.

### Branch Structure

| Branch | Purpose |
|---|---|
| `main` | Stable version of the application. |
| `develop` | Shared integration branch for ongoing development. |
| `feature/*` | New features and functionality. |
| `fix/*` | Independent bug fixes. |
| `hotfix/*` | Urgent fixes for production issues, when necessary. |

### Branching Guidelines

- All new features should be developed on their own feature branches.
- Feature branches should be created from the latest `develop` branch.
- Bug fixes directly related to an ongoing feature should be handled on that feature branch.
- Independent bug fixes can use separate `fix/*` branches.
- Feature branches should be merged into `develop` through pull requests.
- Only tested and reviewed changes should move from `develop` to `main`.

### Creating a Feature Branch

```bash
git switch develop
git pull origin develop
git switch -c feature/your-feature-name
```

### Pushing Your Changes

```bash
git add .
git commit -m "feat: describe your changes"
git push -u origin feature/your-feature-name
```

Create a pull request targeting `develop`.

---

## Commit Message Convention

Use clear and descriptive commit messages.

| Prefix | Usage |
|---|---|
| `feat:` | New functionality |
| `fix:` | Bug fixes |
| `refactor:` | Code restructuring without changing functionality |
| `test:` | Adding or updating tests |
| `docs:` | Documentation changes |
| `chore:` | Maintenance and configuration changes |

Examples:

```bash
git commit -m "feat: implement financial profile onboarding"
git commit -m "fix: correct debt calculation"
git commit -m "docs: update backend documentation"
git commit -m "test: add authentication tests"
```

---

## Collaboration Guidelines

To maintain consistency across the project:

- Work only on your assigned feature or task.
- Keep feature branches focused on specific changes.
- Pull the latest changes from `develop` before starting new work.
- Avoid modifying another developer's work without communication.
- Test changes before creating a pull request.
- Use meaningful commit messages.
- Request code reviews before merging.
- Keep documentation updated when introducing significant changes.

---

## Security and Privacy

FinGuard handles personal financial information, so security and privacy are important parts of the development process.

The project follows these principles:

- Obtain explicit user consent before collecting financial information.
- Collect only the information required to provide the platform's functionality.
- Do not request BVN details or full banking credentials.
- Protect sensitive information through appropriate security practices.
- Allow users to request deletion of their personal data.
- Use financial information only for the platform's stated purposes.
- Do not sell or share users' financial information with lenders or advertisers.
- Make financial insights and recommendations understandable to users.

Financial recommendations and simulations must be developed with appropriate safeguards and reviewed for applicable regulatory requirements.

---

## Documentation and Resources

| Resource | Link |
|---|---|
| GitHub Repository | [FinGuard](https://github.com/AhamefulaChibundu/FinGuard) |
| Backend Documentation | [Backend README](backend/README.md) |
| Frontend Documentation | [Frontend README](frontend/README.md) |
| API Documentation | To be added |
| Live Application | To be added |
| Design Files | To be added |

---

## Development Priorities

The initial development priorities are:

1. User onboarding and authentication.
2. Consent and financial data collection.
3. Financial profile management.
4. Financial assessment.
5. Debt and cashflow analysis.
6. Financial pressure monitoring.
7. Shortfall forecasting and decision support.

These priorities will guide the incremental development of the MVP.

---

## Contributing

Contributions are welcome from assigned project collaborators.

Please follow the development workflow, commit conventions, and collaboration guidelines before submitting changes.

For significant changes, discuss the proposed implementation with the team before proceeding.

---

**FinGuard - Understand your financial position. Anticipate pressure. Make informed decisions.**