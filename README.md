# TailwindCSS + Sass Boilerplate

A simple and efficient boilerplate setup for developing web applications using TailwindCSS and Sass. This boilerplate integrates modern tools like Gulp for task automation, PostCSS for CSS processing, and BrowserSync for live reloading.

## Features

- **TailwindCSS**: Utility-first CSS framework for building custom designs quickly.
- **Sass**: Powerful CSS preprocessor for creating maintainable styles.
- **PostCSS**: Enables CSS transformations with plugins like Autoprefixer and CSSNano.
- **Gulp**: Automates repetitive tasks like CSS and JS compilation.
- **BrowserSync**: Provides live reloading for faster development.
- **Asset Management**: Easily copy and manage assets like images and fonts.

## Prerequisites

Before using this boilerplate, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS recommended)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/mdsaifurrahmann/tailwindcss-sass-boilerplate.git
   cd tailwindcss-sass-boilerplate
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run start
   ```
   or
   ```bash
   npm run watch
   ```

## File Structure

```
.
├── src
│   ├── assets      # Static assets (images, fonts, etc.)
│   ├── js          # JavaScript files
│   └── scss        # SCSS files
├── public
│   ├── assets      # Processed assets
│   ├── css         # Compiled CSS files
│   └── js          # Compiled JavaScript files
├── .browsersyncrc  # Browser-Sync file
├── gulpfile.js     # Gulp task configuration
├── index.html      # Static Files
├── tailwind.config.js    # TailwindCSS Config file
├── postcss.config.js     # PostCSS Config file
└── package.json    # Project metadata and dependencies
```

## Gulp Tasks

### Default Task

```bash
npm run start
```
or
```bash
npm run watch
```

Runs the development server with live reloading and watches for changes in SCSS, JS, and HTML files.

### Build Task

```bash
npm run build
```

Compiles and minifies SCSS and JS files and copies assets to the `public` folder.

### Individual Tasks

- **Compile SCSS**:

  ```bash
  gulp scss
  ```

- **Compile JS**:

  ```bash
  gulp javascript
  ```

- **Copy Assets**:

  ```bash
  gulp assets
  ```

## Configuration

### TailwindCSS

The TailwindCSS configuration is located in `tailwind.config.js`. You can customize it to define your design system, including colors, spacing, typography, etc.

### BrowserSync

Modify the `browserSync.init` configuration in `gulpfile.js` to adjust settings like the server base directory, port, or proxy settings.

## Contributing

Feel free to contribute to this boilerplate by submitting issues or pull requests. Contributions are always welcome!

## License

This project is licensed under the [MIT License](LICENSE).

## Author

[Md Saifur Rahman](https://github.com/mdsaifurrahmann)

---

Start building your projects faster with this lightweight and powerful boilerplate! 🚀

