/// <reference types="react/index.d.ts"/>
/// <reference types="styled-components/cssprop" />

import "styled-components";

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}

declare module "styled-components" {
  export interface DefaultTheme {
    [key: string]: any | DefaultTheme;
  }
}

// Add support for svg imports
declare module "*.svg" {
  const content: any;
  export default content;
}

// Add support for Jest configuration
declare global {
  namespace NodeJS {
    export interface Global {
      ___loader: any;
    }
  }
}
