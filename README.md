# aps-gatsby-starter 🌟 

## A starter library for creating React applications with Gatsby.

This starter library is pre-configured with the following integrations:

- **TypeScript**
- **ESLint**
- **Styled-Components**
- **TailwindCSS**
- **Storybook**
- **Jest**
- **React Testing library**

## Usage
You will need to have `node` and `npm` installed on your computer.

You can either use `npx` or install the `gatsby-cli` globally with `npm`. 

**Recommended:**
```sh
npx gatsby new [PROJECT_NAME] https://github.com/gojutin/gatsby-starter.git
```

*-or-*

```sh
npm i -g gatsby-cli
gatsby new [PROJECT_NAME] https://github.com/gojutin/gatsby-starter.git
```

To start the development server:

```sh
npm run develop
```
Open your browser and visit [https://localhost:8080](https://localhost:8080)

### Available Scripts

| Script        | Description           
| ------------- |:-------------
| `develop`     | Start the development server with hot module reloading.
| `dev`         | Alias for `develop`.  
| `format`      | Format your code with **Prettier**.
| `clean`       | Delete the `.cache` and `public` directories.
| `test`        | Run your **Jest** tests in watch mode.
| `storybook`   | Starts **Storybook**.
| `lint`        | Lint your code with **ESLint**.
| `lint:watch`  | Lint your code with **ESLint** in watch mode.
| `lint:fix`    | Lint your code with **ESLint** and attempt to fix linting issues.
| `serve`       | Serve the production build of your site for testing.
| `build`       | Compile your application and make it ready for deployment
| `build-storybook` | Compiles your stories and makes them ready for deployment. 

## Linting
This project includes tight **ESLint** rules to ensure quality code. Many of the rules favor a functional approach with a strong emphasis on immutability and strong type definitions. Please visit the `.eslintrc.js` file to get a full list of the rules that are applied.

The **ESLint** rules are listed as key/value pairs. The key represents the rule name and the value (number) represents the setting of the rule:

`0` : off

`1`: warn

`2`: error

Here is an example of a rule:
```
"immutable/no-this": 2
```
This particular rule disallows the use of the `this` keyword, which will result in an error. 

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

## Styling
This library is pre-configured to work with **Styled-Components** and **TailwindCSS**, which can be used together:

```jsx
import styled from 'styled-components';
import tw from 'tailwind.macro';

const Wrapper = styled.div`
  ${tw`bg-blue`};
  color: white;
`
```

You can also use the `css` prop, which is part of the **Styled-Components** library:

```jsx
import styled from 'styled-components';
import tw from 'tailwind.macro';

const MyComponent = () => (
  <div css={tw`bg-blue`}>
    <h1 css={`
      color: #333; 
      ${tw`font-sans`}
    `}
    >Hello APS!</h1>
  </div>
)
```

## Storybook
Storybook is available by creating stories in the `src/stories` directory and running the `npm run storybook` script. Your storybook will be availble at [https://localhost:6006](https://localhost:6006).

You can also compile a production build of your Storybook by running `npm run build:storybook`. The compiled production build will be located in a `/storybook-static` directory.

Build something awesome 😀