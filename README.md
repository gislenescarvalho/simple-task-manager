# Simple Task Manager

This project is a small React application that lets you manage a list of tasks. It pulls an initial list of todos from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and lets you add, edit and delete them locally.

## Getting started

Install the dependencies:

```bash
npm install
```

Run the development server:

```bash
npm start
```

Open <http://localhost:3000> to view the app in your browser. The page will reload when you make changes.

## Running tests

Execute the unit tests in continuous integration mode:

```bash
CI=true npm test --silent
```

## Project structure

```
.
├── public/                 # Static assets and index.html
└── src/
    ├── components/         # Reusable React components
    │   ├── TaskForm.js
    │   ├── TaskItem.js
    │   ├── TaskItem.test.js
    │   └── TaskList.js
    ├── services/           # Axios configuration and API helpers
    │   ├── axiosFactory.js
    │   └── todosAPI.js
    ├── App.js
    ├── App.css
    ├── App.test.js
    ├── index.js
    ├── index.css
    ├── reportWebVitals.js
    └── setupTests.js
```

## What to explore next

- Learn more about React hooks such as `useState` and `useEffect` used throughout the components.
- Review the Axios interceptor pattern in `src/services/axiosFactory.js` if you plan to extend API interactions.
- Implement persistent storage or a backend if you want tasks to survive a page refresh.
- Expand the tests to cover more scenarios using React Testing Library.

This repository is a simple starter project for practising React basics, API requests and testing.
