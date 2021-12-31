# Notes and Tips for React

This repo contains notes, tips and code that I wrote while learning React.

# Notes
## Installing and managing Node
Use [nvm](https://github.com/nvm-sh/nvm) to do this... It will make your life a lot easier.

## Create React App
### What is it?
Accoring to their [site](https://create-react-app.dev/docs/getting-started/) "Create React App is an officially supported way to create single-page React applications. It offers a modern build setup with no configuration."
### How to use it
Create a project by running:
```
npx create-react-app name-of-project
```

## JSX
When using [Create React App](https://create-react-app.dev/docs/getting-started/) we can use in line HTML. This is thansk to [JSX](https://reactjs.org/docs/introducing-jsx.html). JSX is a JavaScript syntax extension that allows variable declarations such as the following:
```
const element = <h1>Hello, world!</h1>;
```

## React
### Fragmanets
If we were to write the following:
```
function AppTwo() {
    return (
        <h1> Hello World<h1/>
    )
}
ReactDOM.render(
  <App />
  <AppTwo />,
  document.getElementById('root')
);
```
We would receive an error stating ```Adjacent JSX elements must be wrapped in an enclosing tag```. This can be solved with React [Fragments](https://reactjs.org/docs/fragments.html):
```
function AppTwo() {
    return (
        <h1> Hello World<h1/>
    )
}
ReactDOM.render(
    <React.Fragment>
        <App />
        <AppTwo />
    <React.Fragment />,
    document.getElementById('root')
);
```

# Tips