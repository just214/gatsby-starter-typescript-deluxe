module.exports = {
  transform: {
    "^.+\\.(j|t)sx?$": `<rootDir>/jest-preprocess.ts`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|svg|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
  },
  testPathIgnorePatterns: [`node_modules`, `.cache`],
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
    expect: true,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/gatsby-loader-shim.ts`],
};
