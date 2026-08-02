# Capsule-x

**Capsule-x** is a responsive landing page that lets users search and browse SpaceX capsule data. It combines a modern banner, a search form with three filters (status, original launch date, and type), and a paginated data grid with full capsule details in a popup.

**Live demo:** [capsule-x-k5s1.vercel.app](https://capsule-x-k5s1.vercel.app/)

---

## Features

- **Modern banner layout** showcasing UI skills.
- **Search form with three filters**: status, original launch date, and type.
- **Optimized search query** for quick results.
- **Paginated data grid** displaying ten capsule details per page.
- **Detail popup** — click any grid item to see full capsule information.
- **Responsive design** for all screen sizes and browsers.
- **Semantic HTML** and SEO best practices.

---

## Architecture

### Client

- React.js with functional components.
- Global state managed with Redux + Redux Toolkit.
- Side effects and data fetching orchestrated with Redux Saga.

### Data Fetching

Capsule data is fetched from the public SpaceX API. Requests are triggered by Redux actions, handled by sagas in `src/store`, and the results are committed through the root reducer.

### Project Structure

```
src/
├── App.js
├── App.css
├── index.js
├── index.css
├── assets/
├── components/
│   ├── banner/
│   ├── searchForm/
│   ├── datagrid/
│   ├── popup/
│   └── footer/
├── pages/
│   └── landingPage/
└── store/
    ├── store.js
    ├── rootReducer.js
    ├── rootSaga.js
    ├── api.js
    └── capsules/
```

---

## How to Run

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ishantagarwal00/capsule-x.git
   cd capsule-x
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Usage

- Start the development server:

  ```bash
  npm start
  ```

- Open `http://localhost:3000` in your browser.

---

## Notes

- Data comes from the public SpaceX API — there is no backend or database of our own.
- No authentication or user accounts yet.
