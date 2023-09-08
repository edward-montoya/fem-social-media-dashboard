const isConfig = (token) => token.attributes.category === 'config';
const isColor = (token) => token.attributes.category === 'color'
  || token.attributes.type === 'color';
const isSpace = (token) => token.attributes.category === 'space'
  || token.attributes.type === 'space';
const isBaseColor  = (token) => isConfig(token) && isColor(token);
const isBaseSpace  = (token) => isConfig(token) && isSpace(token);

module.exports = {
  source: ['**/*.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'fem',
      buildPath: 'dist/css/',
      files: [
        {
          destination: '_colors.css',
          format: 'css/variables',
          filter: (token) => isColor(token) && !isBaseColor(token),
        },
        {
          destination: '_spaces.css',
          format: 'css/variables',
          filter: (token) => isSpace(token) && !isBaseSpace(token),
        },
      ],
    },
    scss: {
      transformGroup: 'scss',
      prefix: 'fem',
      buildPath: 'dist/scss/',
      files: [
        {
          destination: '_tokens.scss',
          format: 'scss/variables',
          filter: (token) => !isConfig(token) && !isColor(token) && !isSpace(token),
        },
        {
          destination: '_mixins.scss',
          format: 'scss/mixin',
        },
      ],
    },
  },
};
