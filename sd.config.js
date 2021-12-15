import { packd_export_0 as mod } from 'https://srv.divriots.com/packd/browser-style-dictionary@3.0.2-browser.7/format-helpers.esm.js';

const { default: formatHelpers } = mod;

const tokenFilter = (cat) => (token) => token.attributes.category === cat;

const generateFilesArr = (tokensCategories) => {
  return tokensCategories.map((cat) => ({
    filter: tokenFilter(cat),
    destination: `colors/src/_${cat}.js`,
    format: 'cssLiterals',
  }));
};

export default {
  source: ['**/*.tokens.js'],
  format: {
    cssLiterals: (opts) => {
      const { dictionary, file } = opts;
      let output = formatHelpers.fileHeader(file);
      output += `import { css } from '@lion/core';\n\n`;

      dictionary.allTokens.forEach((token) => {
        const { path, original } = token;
        const [, ..._path] = path;
        const name = _path.reduce((acc, str, index) => {
          // converts to camelCase
          const _str =
            index === 0 ? str : str.charAt(0).toUpperCase() + str.slice(1);
          return acc.concat(_str);
        }, '');
        output += `export const ${name} = css\`${original.value}\`;\n`;
      });

      return output;
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'simba',
      buildPath: '/tokens/',
      files: [
        {
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: '/',
      files: generateFilesArr(['colors', 'typography', 'spacing', 'radii']),
    },
  },
};
