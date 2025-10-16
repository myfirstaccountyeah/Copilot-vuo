// This file provides TypeScript declarations for Vue files, allowing TypeScript to recognize .vue files.
declare module '*.vue' {
  import { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}