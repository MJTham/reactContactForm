# Serverless React Contact Form with CI/CD Pipeline

![Status](https://img.shields.io/badge/Status-Live-success) ![Build](https://img.shields.io/badge/Build-Passing-brightgreen) ![Tech](https://img.shields.io/badge/Stack-React_|_Tailwind_|_Firebase-blue)

A technical proof-of-concept demonstrating a modern, decoupled web architecture using **React**, **Serverless Functions** (Google Apps Script), and **Automated DevOps** (GitHub Actions).

Live Demo: [https://mjtham-contact-form-demo.web.app/](https://mjtham-contact-form-demo.web.app/)

---

## Architecture Overview

This project was architected to demonstrate a **Headless / Serverless** approach, minimizing infrastructure costs while maximizing scalability.

* **Frontend:** React.js (Vite) + Tailwind CSS for a component-based, responsive UI.
* **Backend (API):** Google Apps Script (GAS) acting as a serverless API endpoint.
* **Database:** Google Sheets (NoSQL-style data storage) for form retention.
* **Infrastructure:** Firebase Hosting (Edge caching).
* **DevOps:** CI/CD pipeline via GitHub Actions for automated testing and deployment.

---

## Key Technical Highlights

### 1. Decoupled Logic & UI
The application adheres to a strict **Separation of Concerns**:
* **UI Layer:** React components handle the view state and validation.
* **Business Logic:** API integration is isolated, allowing the backend service to be swapped without refactoring the frontend.

### 2. Automated CI/CD Pipeline
Deployment is fully automated using **GitHub Actions**.
* **Trigger:** Push to `main` branch.
* **Build Process:** Installs dependencies (`npm ci`), builds the static assets, and injects environment secrets securely.
* **Deployment:** Pushes the optimized build to **Firebase Hosting**.

### 3. Security Best Practices
* **Environment Variables:** API endpoints are managed via `.env` files locally and **GitHub Secrets** in production, ensuring no sensitive configuration is hardcoded in the repository.
* **CORS Management:** The Google Apps Script API handles cross-origin requests securely.

---

## Local Development Setup

To run this project locally, follow these steps:

### 1. Clone the repository
```bash
git clone [https://github.com/MJTham/reactContactForm.git](https://github.com/MJTham/reactContactForm.git)
cd reactContactForm
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
Create a .env file in the root directory and add your API endpoint:
```bash
VITE_GOOGLE_SCRIPT_URL=your_google_script_web_app_url
```

### 4. Start the Development Server
```bash
npm run dev
```

## Project Structure
```
├── .github/workflows   # CI/CD Pipeline configurations
├── src
│   ├── components      # Reusable UI components
│   ├── App.jsx         # Main application logic
│   └── index.css       # Tailwind directives
├── public              # Static assets
├── firebase.json       # Hosting configuration
└── vite.config.js      # Build tool configuration
```
Authored by MingJun Tham
