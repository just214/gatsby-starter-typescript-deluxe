/// <reference types="react/index.d.ts"/>
/// <reference types="styled-components/cssprop" />

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
