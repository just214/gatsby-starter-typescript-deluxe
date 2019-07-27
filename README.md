# gatsby-starter-typescript-deluxe 🌟

## A starter library for creating React applications with Gatsby.

This starter library is pre-configured with the following integrations:

- **TypeScript**
- **ESLint**
- **Styled-Components**
- **Storybook**
- **Jest**
- **React Testing library**

## Usage

You will need to have `node` and `npm` installed on your computer.

You can either use `npx` or install the `gatsby-cli` globally with `npm`.

```sh
npx gatsby new [PROJECT_NAME] https://github.com/gojutin/gatsby-starter.git
```

_-or-_

```sh
npm i -g gatsby-cli
gatsby new [PROJECT_NAME] https://github.com/gojutin/gatsby-starter.git
```

To start the development server:

```sh
npm run develop
```

Open your browser and visit [http://localhost:8080](http://localhost:8080)

### Available Scripts

| Script            | Description                                                       |
| ----------------- | :---------------------------------------------------------------- |
| `develop`         | Start the development server with hot module reloading.           |
| `dev`             | Alias for `develop`.                                              |
| `format`          | Format your code with **Prettier**.                               |
| `clean`           | Delete the `.cache` and `public` directories.                     |
| `test`            | Run your **Jest** tests in watch mode.                            |
| `storybook`       | Starts **Storybook**.                                             |
| `lint`            | Lint your code with **ESLint**.                                   |
| `lint:watch`      | Lint your code with **ESLint** in watch mode.                     |
| `lint:fix`        | Lint your code with **ESLint** and attempt to fix linting issues. |
| `serve`           | Serve the production build of your site for testing.              |
| `build`           | Compile your application and make it ready for deployment         |
| `build-storybook` | Compiles your stories and makes them ready for deployment.        |
| `update`          | Updates all dependencies to the latest version.                   |

## Linting

This project includes tight **ESLint** rules to ensure quality code. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions. Please visit the `.eslintrc.js` file to get a full list of the rules that are applied.

The **ESLint** rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

| 0   |  1   |   2   |
| --- | :--: | :---: |
| off | warn | error |

Here is an example of a rule:

```
"immutable/no-this": 2
```

This particular rule disallows the use of the `this` keyword, which will result in an error.

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

Build something awesome 😀
