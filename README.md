# Weather App

A modern weather application built with React, TypeScript, and Vite. This app allows users to check the current weather conditions for any city worldwide.

## Features

- Real-time weather data from OpenWeatherMap API
- Search weather by city name
- Display temperature, humidity, and "feels like" temperature
- Responsive design with beautiful UI
- Dynamic weather icons

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 18 or higher)
- npm (comes with Node.js)

## Environment Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/trae-app.git
   cd trae-app
   ```

2. Install dependencies:
   ```bash
   npm ci
   ```

3. Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```

4. Get your API key:
   - Sign up for a free account at [OpenWeatherMap](https://openweathermap.org/)
   - Generate an API key from your account dashboard
   - Add your API key to the `.env` file:
     ```
     VITE_WEATHER_API_KEY=your_api_key_here
     ```

## Development

To start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173/trae-app/`

## Building for Production

To create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deployment

This project is configured for automatic deployment to GitHub Pages using GitHub Actions. When you push to the `main` branch, the application will be automatically built and deployed.

The deployment workflow:
1. Pushes to the `main` branch trigger the GitHub Actions workflow
2. The workflow builds the application
3. The built files are deployed to the `gh-pages` branch
4. The application is served from GitHub Pages

## Tech Stack

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Hero Icons

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
