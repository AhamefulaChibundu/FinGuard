# FinGuard Backend

Backend REST API for **FinGuard**, a financial resilience and decision-support platform designed to help individuals understand their financial position, monitor debt obligations, identify potential cashflow pressure, and make better-informed financial decisions.

This application is built with Node.js, Express.js, and MongoDB.

**Project Status:** MVP in Development

---

## Technology Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB
- **ODM:** Mongoose
- **Authentication:** JSON Web Tokens (JWT)
- **Validation:** Joi
- **AI Integration:** OpenAI API
- **File and Image Storage:** Cloudinary
- **Transactional Email:** Brevo

---

## Project Structure

```text
backend/
│
├── src/
│   ├── config/
│   │   ├── connectDB.js
│   │   └── ...
│   │
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── services/
│   └── app.js
│
├── .env
├── .env.example
├── package.json
├── package-lock.json
├── server.js
└── README.md
```

### Folder Responsibilities

| Folder | Responsibility |
|---|---|
| `config/` | Database connections and application configuration. |
| `controllers/` | Handles incoming requests and sends responses. |
| `middlewares/` | Handles authentication, validation, and shared request processing. |
| `models/` | Defines MongoDB schemas using Mongoose. |
| `routes/` | Defines API endpoints. |
| `schemas/` | Contains Joi validation schemas. |
| `services/` | Contains business logic and external service integrations. |

### Application Entry Points

- `server.js`: Loads environment configuration, connects to the database, and starts the server.
- `src/app.js`: Configures the Express application, middleware, and routes.

---

## Getting Started

### Prerequisites

- Node.js
- npm
- MongoDB database
- Git

### 1. Navigate to the Backend Directory

From the project root:

```bash
cd backend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file:

```bash
cp .env.example .env
```

Configure the required variables:

```env
# Server
PORT=3050

# Database
MONGODB_URI=your_mongodb_connection_string

# Authentication
JWT_SECRET=your_long_random_secret

# Cloudinary
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# OpenAI
OPENAI_API_KEY=your_openai_api_key

# Brevo Transactional Email
BREVO_API_KEY=your_brevo_api_key
BREVO_SENDER_EMAIL=your_verified_sender_email
BREVO_SENDER_NAME=FinGuard
```

Replace the placeholder values with your actual credentials.

**Important:** Never commit `.env` or share your private API keys.

### 4. Run the Development Server

```bash
npm run dev
```

### 5. Run the Production Server

```bash
npm start
```

The default development port is `3050`.

---

## Backend Architecture

The backend follows a layered architecture:

```text
Client Request
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

### Request Flow

1. A client sends an HTTP request to an API endpoint.
2. The route directs the request to the appropriate controller.
3. Middleware handles required checks such as authentication and validation.
4. The controller processes the request.
5. Services handle reusable business logic or external integrations where needed.
6. Models interact with MongoDB.
7. The controller returns an appropriate HTTP response.

---

## External Integrations

### MongoDB

MongoDB is used to store application data. Mongoose provides schema definitions, validation, and database operations.

### Cloudinary

Cloudinary is used for cloud-based image and file storage where required by the application.

### OpenAI

The OpenAI API is intended to support AI-assisted financial analysis and decision-support functionality. The implementation and availability of individual AI-powered features may vary during MVP development.

### Brevo

Brevo is used for transactional email delivery, such as account-related and verification emails.

The backend uses Brevo API credentials configured through environment variables. Keep API keys private and use a verified sender identity.

---

## API Documentation

API documentation will be added as the endpoints and request/response contracts are finalized.

The team's API documentation will be maintained using Postman.

---

## Development Guidelines

- Keep controllers focused on handling requests and responses.
- Put reusable business logic in services where appropriate.
- Use Joi schemas to validate incoming data.
- Protect private endpoints with authentication middleware.
- Scope user-owned database operations to the authenticated user.
- Use consistent HTTP status codes and response structures.
- Handle errors centrally where appropriate.
- Avoid exposing sensitive information in API responses.
- Add tests for important business logic and API behavior.

---

## Git Workflow

Backend development takes place within the shared FinGuard repository.

Create feature branches from the latest `develop` branch.

Example:

```bash
git switch develop
git pull origin develop
git switch -c feature/backend-your-feature
```

Commit and push changes:

```bash
git add .
git commit -m "feat: describe backend changes"
git push -u origin feature/backend-your-feature
```

Create a pull request targeting `develop`.

---

## Environment and Security

- Keep `.env` out of version control.
- Use `.env.example` to document required environment variables.
- Never expose database credentials, JWT secrets, or third-party API keys.
- Validate incoming request data.
- Apply authentication and authorization checks to protected resources.
- Avoid logging sensitive user information.

---

**FinGuard Backend - Powering financial resilience through reliable APIs and data processing.**