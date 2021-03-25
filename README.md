# Fjord by Gulp

Example of build setup for a gulp-based 'Fjord'.

## Features

- Gets a collection of modules from npm.
- Processes the webresources from all modules via a gulpfile. The default process is to concatonate the js and css files into main.min.js and style.min.css.

## Usage

- Clone this repository and rename it to your project name - and change the name in `package.json`.
- Run `npm install` at project root to download node modules.
- Run `gulp` at project root to build a project.
- Processed modules, and a new module containing `main.min.js` and `style.min.css` are in `fjord` directory which can be used as resources directory.
- Open `index.html` in browser. And ... that`s all! Success! Enjoy!!!

## Explanation

Main gulp task grabs the dependencies and puts them in `src` directory.

Then it copies files from specific directories
It will also concatenate the **pre-compiled** CSS / JS into one
bigger file.

This way every dependency can use their own pre-processor, let it be
TypeScript, Sass, Coffeescript, Less, Stylus etc. and we don't have
to fix the gulp script as soon as we add another dependency or
something changes in the existing dependencies.

Dependencies for the build are defined in the
`dependencies` section of the `package.json`.
