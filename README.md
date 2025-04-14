# Implementing Caching for Database Queries
---

## 🚀 Project Objectives

The project simulates a real-world scenario where a dashboard frequently fetches data from an API and displays it in the UI. The original implementation suffers from:

- Redundant re-renders
- Inefficient API requests
- Poor separation of concerns
- No caching or optimization

### ✅ Task

Refactor the existing `Dashboard` component to:

- Optimize API requests using caching and proper state management
- Encapsulate API logic into reusable services and custom hooks
- Avoid unnecessary re-renders using memoization
- Handle loading and error states gracefully
- Ensure the codebase is modular, readable, and scalable

---

## 🔧 Technologies Used

- **React** (with Vite)
- **TypeScript**
- **Redux toolkit** – for data fetching and caching
- **Axios** – for API requests
- **Bootstrap** – for basic styling
- **Prettier** – for code consistency

---

## 📁 Project Structure

src/
├── components/      
├── hooks/             
├── services/          
├── types/            
├── App.tsx           
├── main.tsx          
└── index.css     

## 📥 Installation & Setup

### Prerequisites

- Node.js (v20 or above)
- npm

### Installation steps

_Below is a walkthrough of installing and running the project locally:_

1. Clone the repo
   ```sh
   git clone https://github.com/kiborgok/dashboard.git
   ```
2. Navigate into the directory
    ```sh
    cd dashboard
    ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Run application
    ```sh
   npm run start
   ```
