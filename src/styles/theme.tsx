export default {
  screens: {
    // max-widths in pixels
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
  },
  colors: {
    blue: "#0099ff",
    darkblue: "#00072e",
    orange: "#FF9429",
  },
  opacity: {
    0: 0,
    25: 0.25,
    50: 0.5,
    75: 0.75,
    100: 1,
  },
  py: (value: number | string) =>
    `padding-top: ${value}; padding-bottom: ${value};`,
  // Add anything else you'd like.
};
