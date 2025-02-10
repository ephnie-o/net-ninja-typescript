TYPESCRIPT TUTORIAL
- Typescript can be used as an alternative to Javascript. Superset to JavaScript.
- Allows us to use strict types.
- Supports modern features (arrow functions, let, const)
- Extra features (generics, interface, tuples, etc)
- To install: npm install -g typescript  //do this in global terminal.

COMPILING TYPESCRIPT
- To compile to JavaScript for the browser to understand:
- [x] tsc sandbox.ts -w  //in vs terminal
- This will create a .js file for you and compile it into JavaScript.

TYPES
- Once you declare a type, you can’t change it later on to another type.

TSCONFIG
- If typescript is in a src folder and the sandbox.js is in the public folder with index.html and styles.css, in terminal, do this:
- [x] tsc —init  //in vs terminal
- In tsconfig.json file:
- “rootDir”: “./src”,
- “outDir”: “./public”,
- tsc -w  //in vs terminal

- To exclude ts files outside of the src folder, add this to tsconfig file
- “include”: [“src”]

MODULES
- In tsconfig file, change “module”: “es2015”  and “target”:”es6”
- Then create your classes folder with your ts file, export it and import it in your app.ts file.


GENERICS
- Allows us to create reusable blocks of code which can be used with different types.

ENUMS
- Allow us to store a set of constants or keywords and associate them with a numeric value

TUPLES
- Like arrays but one difference.
- The type of data in each position in a tuple is fixed once it’s been initialised.
