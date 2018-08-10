This branch shows how selective rendering works in React. You can run this project by first running `npm install` to install babel dependencies.

Later execute `npx babel --watch src --out-dir . --presets react-app/prod` to compile the jsx file inside src/script.js and place the compiled version in script.js.

Now run index.html to see how rendering works. Enable paint flash rendering in Chrome to see how React intelligently renders only the date line.

Similary run index-jquery.html to see how jQuery renders the block.