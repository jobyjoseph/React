When we use JSX in our project, we need a JSX preprocessor to compile it to JS React components.

*Steps to run*
- Go to this project folder.
- Run `npm install`. It will install `babel-cli` and `babel-preset-react-app`

You can find src/like_button.js with JSX content. We need to compile this file and place the compiled output(like_button.js) in root folder. For that go to project root folder and run:
```
npx babel --watch src --out-dir . --presets react-app/prod
```
`npx` is a package runner tool that comes with npm 5.2+. Above command watch for any changes in `src` folder. It writes the compiled output to root folder.

Now if you run `index.html` you can see LikeButton component in our page.