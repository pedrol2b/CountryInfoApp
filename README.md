# Country Info App

A Full-Stack JavaScript engineer test assessment.

![Demo 1](/assets/demo-1.png)
![Demo 2](/assets/demo-2.png)

## Overview

This project provides a full-stack application built with modern JavaScript frameworks and tools. It consists of:

- **Frontend**: Built with [Next.js](https://nextjs.org/), styled using [Tailwind CSS](https://tailwindcss.com/) and [shadcn](https://shadcn.dev/), and leverages [React Query](https://tanstack.com/query/v4) for state management. The app was bootstrapped with `create-next-app`.

- **Backend**: Built using [Node.js](https://nodejs.org/) and [Express.js](https://expressjs.com/) to serve APIs for country data.

## API Documentation

Explore the API documentation via Postman: [Country Info API Documentation](https://elements.getpostman.com/redirect?entityId=24282555-a53d0f38-e178-4888-ae0e-fef004d0f429&entityType=collection).

---

## Setup Instructions

Follow these steps to set up the project locally:

### Prerequisites

- Install [Yarn](https://yarnpkg.com/).
- Ensure you have [Node.js](https://nodejs.org/) installed.

### Environment Variables

#### Frontend

Create a `.env` file in the `client` directory to define the base URL of the API:

```env
NEXT_PUBLIC_BASEURL=http://localhost:4000
```

Use the provided `.env.example` as a reference.

#### Backend

Create a `.env` file in the `server` directory to configure backend settings. The default port is:

```env
PORT=4000
```

Use the provided `.env.example` as a reference.

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Install dependencies for both frontend and backend:
   - Navigate to the `client` directory and install dependencies:

     ```bash
     cd client
     yarn install
     ```

   - Navigate to the `server` directory and install dependencies:

     ```bash
     cd ../server
     yarn install
     ```

### Running the Application

#### Start the Backend

1. Navigate to the `server` directory:

   ```bash
   cd server
   ```

2. Start the server:

   ```bash
   yarn dev
   ```

   The backend should now be running on `http://localhost:4000`.

#### Start the Frontend

1. Navigate to the `client` directory:

   ```bash
   cd ../client
   ```

2. Start the development server:

   ```bash
   yarn dev
   ```

   The frontend should now be running on `http://localhost:3000`.

---

## Project Dependencies

### Frontend

- [Next.js](https://nextjs.org/) - React framework for production-grade apps.
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework.
- [shadcn](https://shadcn.dev/) - Pre-configured component library for Tailwind CSS.
- [React Query](https://tanstack.com/query/v4) - State management for server-side data.

### Backend

- [Node.js](https://nodejs.org/) - JavaScript runtime.
- [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework.
