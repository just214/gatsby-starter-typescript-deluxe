# gatsby-starter-typescript-deluxe 🌟

## A starter library for creating React applications with Gatsby and TypeScript.

This starter library is pre-configured with the following integrations:

- **TypeScript**
- **Styled-Components**
- **gatsby-image and gatsby-transformer-sharp**
- **gatsby-plugin-manifest with SEO component**
- **Storybook with add-ons**
- **Jest and React Testing library**
- **ESLint (with TSLint)**
- **React Axe and React A11y for accessibility**

## Usage

You will need to have `node` and `npm` installed on your computer.

You can either use `npx` or install the `gatsby-cli` globally with `npm` or `yarn`.

```sh
npx gatsby new my-site https://github.com/gojutin/gatsby-starter-typescript-deluxe
```

_-or-_

```sh
npm i -g gatsby-cli (or yarn global add gatsby-cli)
gatsby new my-site https://github.com/gojutin/gatsby-starter-typescript-deluxe
```

To start the development server:

```sh
npm run develop
```

If all was successful, you should see links to two development servers in the terminal.

[http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

[http://localhost:8000/___graphql](http://localhost:8000/___graphql):

This is the development server that provides a Graphiql interface, which allows you to interact with the your site's data via a GraphQL end point.


### Available Scripts

| Script            | Description                                                       |
| ----------------- | :---------------------------------------------------------------- |
| `develop`         | Start the development server with hot module reloading.           |
| `dev`             | Alias for `develop`.                                              |
| `format`          | Format your code with **Prettier**.                               |
| `clean`           | Delete the `.cache` and `public` directories.                     |
| `test`            | Run your **Jest** tests once.                                     |
| `test:watch`      | Run your **Jest** tests in watch mode.                            |
| `lint`            | Lint your code with **ESLint**.                                   |
| `lint:watch`      | Lint your code with **ESLint** in watch mode.                     |
| `lint:fix`        | Lint your code with **ESLint** and attempt to fix linting issues. |
| `serve`           | Serve the production build of your site for testing.              |
| `build`           | Compile your application and make it ready for deployment         |
| `storybook`       | Starts **Storybook**.                                             |
| `build-storybook` | Compiles your stories and makes them ready for deployment.        |
| `update`          | Updates all dependencies to the latest version.                   |

## Styling

This library is pre-configured to work with **Styled-Components** and works with the `css` prop:

```jsx
import styled from "styled-components";

const MyComponent = () => (
  <div>
    <h1
      css={`
        color: #333;
      `}
    >
      Hello World!
    </h1>
  </div>
);


## Linting

This project includes a combination of **ESLint**, **TSLint**, and **React-A11y** rules for React and TypeScript code, which are extended from the `eslint-config-gojutin` npm package. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions. 

The rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

`0` : off

`1`: warn

`2`: error

Here is an example of a rule:

```
"immutable/no-this": 2
```

This particular rule disallows the use of the `this` keyword, which will result in an error.
```

## Storybook

Storybook is available by creating stories in the `src/stories` directory and running the `npm run storybook` script. Your storybook will be availble at [http://localhost:6006](http://localhost:6006).

You can also compile a production build of your Storybook by running `npm run build:storybook`. The compiled production build will be located in a `/storybook-static` directory.

## Deployment

Lint your files and fix all linting issues.

```sh
npm run lint
```

Run your test suite and fix any broken tests.

```sh
npm run test
```

Compile a production build to the `/public` directory.

```sh
npm run build
```

Now, build something awesome 😀
