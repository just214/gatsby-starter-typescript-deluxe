/// <reference path="node_modules/@types/react/index.d.ts"/>

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}