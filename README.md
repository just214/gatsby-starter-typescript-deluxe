# gatsby-starter-typescript-deluxe 🌟

### An opinionated starter library for creating React applications with Gatsby and TypeScript.

### [View Demo](https://gatsby-starter-typescript-deluxe.netlify.com) [![Netlify Status](https://api.netlify.com/api/v1/badges/741aaab2-8497-431c-8b59-7f675856de77/deploy-status)](https://app.netlify.com/sites/gatsby-starter-typescript-deluxe/deploys)

This starter library is pre-configured with the following integrations:

- **TypeScript** for type-safe code.
- **Styled-Components** for all your styles.
- **modern-css-reset** for a reset of sensible default styles.
- **Framer Motion** for awesome animations.
- **gatsby-image and gatsby-transformer-sharp** for optimized images.
- **gatsby-plugin-manifest / SEO component** for an SEO-friendly PWA.
- **Storybook with add-ons** for showing off your awesome components.
- **Jest and React Testing library** for snapshots and unit tests.
- **ESLint with an emphasis on functional patterns (with Prettier and TypeScript integration)** to make your code look its best.
- **React Axe and React A11y for accessibility** so that your site is awesome for everyone.

## Installation

You will need to have `node` and `npm` installed on your computer.

You can either use `npx` or install the `gatsby-cli` globally.

The `npx` way:

```sh
npx gatsby new my-site https://github.com/gojutin/gatsby-starter-typescript-deluxe
```

or the global way:

```sh
npm i -g gatsby-cli
gatsby new my-site https://github.com/gojutin/gatsby-starter-typescript-deluxe
```

## Usage

To start the development servers:

```sh
npm run develop
```

If all was successful, you should see links to two development servers in the Node terminal. You can open these url in any browser that you would like.

1. [http://localhost:8080](http://localhost:8080):

This is the development server that allows you to preview your website. It comes with hot-module reloading, which means that you should see your changes almost immediately without having to refresh the browser tab.

2. [http://localhost:8000/\_\_\_graphql](http://localhost:8000/___graphql):

This is the development server that allows you to interact with the your site's GraphQL data via the GraphiQL IDE.

### Available Scripts

| Script            | Description                                                                         |
| ----------------- | :---------------------------------------------------------------------------------- |
| `develop`         | Start the development server with hot module reloading.                             |
| `dev`             | Alias for `develop`.                                                                |
| `format`          | Format your code with Prettier.                                                     |
| `clean`           | Delete the `.cache` and `public` directories.                                       |
| `test`            | Run your Jest tests once.                                                           |
| `test:watch`      | Run your Jest tests in watch mode.                                                  |
| `lint`            | Lint your code with ESLint.                                                         |
| `lint:watch`      | Lint your code with ESLint in watch mode.                                           |
| `lint:fix`        | Lint your code with ESLint and attempt to fix linting issues.                       |
| `serve`           | Serve the production build of your site for testing.                                |
| `build`           | Compile your application and make it ready for deployment                           |
| `storybook`       | Starts Storybook.                                                                   |
| `build-storybook` | Compiles your stories and makes them ready for deployment.                          |
| `update`          | Updates the package.json to the latest dependency versions using npm-check-updates. |

## Styling

This library is pre-configured with [styled-components](https://www.styled-components.com/).

#### Global Styles

Global styles are defined in the `src/styles/global-styles.tsx` file using the `createGlobalStyle` function provided by styled-components. The global styles are injected in the `Layout` component via the component that is provided from the `createGlobalStyle` function.

The global style also includes the styles from [css-modern-reset](https://github.com/hankchizljaw/modern-css-reset), which aims to provide a sensible reset of browser styles.

#### Theme

You can define your theme styles in the `/src/styles/theme` file. The theme will be available in any styled-component via `props.theme` and to any other component via the `useTheme` hook.

#### Handling Media Queries

The theme utilizes the [use-media](https://github.com/streamich/use-media) library, which allows you to track the state of a CSS media queries. This works by passing a boolean for each screen size that you defined in your theme. Just define your screen sizes in `src/styles/theme`.

#### Styling Examples

**`src/pages/about.tsx` includes various examples (with comments) of using styled-components and framer-motion with the theme provider.**

#### The CSS Prop

This starter is also preconfigured to work with the `css` prop:

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

_Note: The `css` prop does not play nicely with the `jsx-no-multiline-js` ESLint rule. You may want to disable the rule if you plan on using the `css` prop. This can be done in the `.eslintrc.js` file._

I personally do not use the `css` prop and prefer to define styled-components outside of the component definition. My general rule is if the component that is using a styled-component is the only component that uses it, I define the styled-component in the same file. Otherwise, I will move it out to a `components/common` directory.

```tsx
import styled from "styled-components";

const Heading = styled.h1`
  color: #333;
`;

const MyComponent = () => (
  <div>
    <Heading>Hello World!</Heading>
  </div>
);
```

## CSS Debugger

This starter also includes a `CSSDebugger` component. This component allows you to easily debug your styles by drawing outlines around all elements and applying a grid in the background. It also includes a toggle button that you can optionally use during debugging.

**_Note: You can drag the toggle button around if it gets in your way._**

The `CSSDebugger` component is used in the `layout.tsx` component.

<img src="https://res.cloudinary.com/gojutin/image/upload/v1568660140/gatsby-starter-typescript-deluxe/css-debugger.gif" alt="GIF of css debugger" style="max-width: 100%;" />

## Linting

This project includes a combination of ESLint and React-A11y rules for React and TypeScript code, which are extended from the [eslint-config-gojutin](https://github.com/gojutin/eslint-config-gojutin) npm package. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions. Since all of the rules and dependencies are included in this package, you can easily remove it if you prefer to wire up your own linting configuration.

The rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

|     |       |
| --- | :---- |
| `0` | off   |
| `1` | warn  |
| `2` | error |

Here is an example of a rule:

```
"immutable/no-this": 2
```

This particular rule disallows the use of the `this` keyword, which will result in an error.

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

## Lighthouse Audit Score 💯

<img src="https://res.cloudinary.com/gojutin/image/upload/v1568660306/gatsby-starter-typescript-deluxe/gatsby-starter-typescript-deluxe-lighthouse-audit.gif" style="max-width: 100%;" alt="Lighthouse Score" />

## TODOS

- Write more robust unit tests for all components and custom hook.
- Possibly add support for MDX and markdown.
- Add more Storybook add-ons with more component demos.

That's about it. Now, build something awesome 😀
