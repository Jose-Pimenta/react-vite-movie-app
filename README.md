# React Vite Movie App

React Vite Movie App is a responsive web application built with React and Vite that lets users search for movies and view detailed information, powered by the OMDB API.  
[![Vercel](https://img.shields.io/badge/Deploy-on_Vercel-000?style=flat&logo=vercel&logoColor=white)](https://movie-app.tiagopimenta.pt)

## Features

- Search movies by title
- Display movie cards with poster, title, year, and type
- View detailed movie information including plot, cast, ratings, and more
- Pagination support for search results
- Responsive UI for desktop and mobile

## Technologies

- React (v19)
- Vite for fast development and build tooling
- React Router DOM for client-side routing
- Axios for HTTP requests
- CSS Modules for scoped styling

## Project Structure

```
react-vite-movie-app/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── MovieCard.jsx
│   │   └── NavBar.jsx
│   ├── context/
│   │   └── MovieContext.jsx
│   ├── css/
│   │   ├── App.css
│   │   ├── Favorite.css
│   │   ├── Home.css
│   │   ├── MovieCard.css
│   │   ├── Navbar.css
│   │   └── index.css
│   ├── pages/
│   │   ├── Favorites.jsx
│   │   └── Home.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
├── vercel.json
└── README.md
```

## Getting Started

### Prerequisites

- Node.js (>=14.x)
- npm

### Installation

```bash
git clone https://github.com/Jose-Pimenta/react-vite-movie-app.git
cd react-vite-movie-app
npm install
```

### Environment Variables

Copy the example and set your OMDB API key:

```bash
cp .env.example .env
# In .env:
VITE_OMDB_API_KEY=your_api_key_here
```

### Development

Start the development server:

```bash
npm run dev
```

Open your browser at `http://localhost:5173`.

### Build

Generate a production build and preview:

```bash
npm run build
npm run preview
```

## API

This project uses the [OMDb API](https://www.omdbapi.com/) to fetch movie data. You need an API key (free registration).

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Author

Jose Pimenta
