/**
 * media-queries.js
 * A collection of reusable media queries to aid in responsive design.
 */

const size = {
  sm: '480px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
};
export const mediaQueries = {
  sm: `(min-width: ${size.sm})`,
  md: `(min-width: ${size.md})`,
  lg: `(min-width: ${size.lg})`,
  xl: `(min-width: ${size.xl})`,
};
