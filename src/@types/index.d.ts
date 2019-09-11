/// <reference types="react/index.d.ts"/>
/// <reference types="styled-components/cssprop" />

import { any } from "prop-types";

// Add support for css prop
declare namespace React {
  interface DOMAttributes<T> {
    css?: any;
  }
}

declare module "*.svg" {
  const content: any;
  export default content;
}

declare global {
  namespace NodeJS {
    interface Global {
      //  document: Document;
      //  window: Window;
      //  navigator: Navigator;
       ___loader: any;
  }
}