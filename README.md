React is UI library to create Components. Components can be treated as a set of reusable HTML.

We can write React components using pure JavaScript. But for a big project, it will be difficult. So using JSX, developers can write html like code inside React components. Later we use transpilers like Babel to convert JSX to pure JavaScript which browsers can understand.

React components can be classified into:
1. Functional Components
2. Class Components

## React Project Tech Stack
When we write a big React project, we need a build workflow. A good build workflow ensures that our project is optimized, high performing, backward compatible and minimized. Here we discuss some of the tools we use in a typical React project.

### Webpack
Webpack is a bundler. When we do development, we separate different modules to different files. But before moving to production, these code needs to be bundled to one efficiently. Efficiency is brought by Webpack by preventing duplicate code insertion, maintaining module scope, not including modules which are not used and so on.

### Babel
We write ES6 whereever possible. Our code will be more structured and readable in that case. But we need a transpiler like Babel to convert ES6 to ES5, so that maximum browsers support our project. We can connect Babel with Webpack. Webpack will then do the transpiling before bundling.
