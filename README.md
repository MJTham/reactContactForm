Serverless React Contact Form with CI/CD Pipeline
A technical proof-of-concept demonstrating a modern, decoupled web architecture using React, Serverless Functions (Google Apps Script), and Automated DevOps (GitHub Actions).

Live Demo: https://mjtham-contact-form-demo.web.app/

Architecture Overview
This project was architected to demonstrate a Headless / Serverless approach, minimizing infrastructure costs while maximizing scalability.

Frontend: React.js (Vite) + Tailwind CSS for a component-based, responsive UI.

Backend (API): Google Apps Script (GAS) acting as a serverless API endpoint.

Database: Google Sheets (NoSQL-style data storage) for form retention.

Infrastructure: Firebase Hosting (Edge caching).

DevOps: CI/CD pipeline via GitHub Actions for automated testing and deployment.

Key Technical Highlights
1. Decoupled Logic & UI
The application adheres to a strict Separation of Concerns:

UI Layer: React components handle the view state and validation.

Business Logic: API integration is isolated, allowing the backend service to be swapped (e.g., to Sitecore Send or Azure Functions) without refactoring the frontend.

2. Automated CI/CD Pipeline
Deployment is fully automated using GitHub Actions.

Trigger: Push to main branch.

Build Process: Installs dependencies (npm ci), builds the static assets, and injects environment secrets securely.

Deployment: Pushes the optimized build to Firebase Hosting.

3. Security Best Practices
Environment Variables: API endpoints are managed via .env files locally and GitHub Secrets in production, ensuring no sensitive configuration is hardcoded in the repository.

CORS Management: The Google Apps Script API handles cross-origin requests securely.

Local Development Setup
To run this project locally, follow these steps:

1. Clone the repository

Bash

git clone https://github.com/MJTham/reactContactForm.git
cd reactContactForm
2. Install Dependencies

Bash

npm install
3. Configure Environment Create a .env file in the root directory and add your API endpoint:

Properties

VITE_GOOGLE_SCRIPT_URL=your_google_script_web_app_url
4. Start the Development Server

Bash

npm run dev
Project Structure
Plaintext

├── .github/workflows   # CI/CD Pipeline configurations
├── src
│   ├── components      # Reusable UI components
│   ├── App.jsx         # Main application logic
│   └── index.css       # Tailwind directives
├── public              # Static assets
├── firebase.json       # Hosting configuration
└── vite.config.js      # Build tool configuration
Context
This project serves as a technical demonstration for the Senior Delivery Consultant role, highlighting:

Adaptability to modern Javascript frameworks (React).

Understanding of Cloud-Native deployment workflows.

Ability to implement robust Process Automation (CI/CD).

Authored by MingJun Tham
