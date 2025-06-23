# Coding Problems React App

A React application for practicing coding problems, built with Vite and SWC. Browse a curated list of coding challenges and view detailed descriptions and test cases for each problem.

## Features

- Browse a list of coding problems
- View detailed descriptions and test cases for each problem
- Fast, modern React setup using Vite
- Clean and responsive UI

## Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Getting Started

### 1. Clone the repository

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
cd YOUR-REPO-NAME
```

### 2. Install dependencies

```
npm install
```

### 3. Run the development server

```
npm run dev
```

- Open your browser and go to the URL shown in the terminal (usually `http://localhost:5173/`).

### 4. Build for production

```
npm run build
```

- The production-ready files will be in the `dist` folder.

## Project Structure

```
project-root/
├── src/
│   ├── components/      # React components
│   ├── App.jsx          # Main app component
│   └── main.jsx         # Entry point
├── questions.json       # Coding problems data
├── public/              # Static assets
├── package.json         # Project metadata and scripts
└── ...
```

## Data Source

- All coding problems are stored in `questions.json` in the project root.

## Contributing

1. Fork this repository
2. Create a new branch (`git checkout -b feature/your-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature`)
6. Open a Pull Request

## License

This project is for educational purposes.
