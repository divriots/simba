import StyleDictionary from 'style-dictionary';

const baseTokens = ['colors', 'typography', 'spacing', 'radii'];

const tokenFilter = (cat) => (token) => token.attributes.category === cat;

const generateFilesArr = (tokensCategories) => {
  return tokensCategories.map((cat) => ({
    filter: tokenFilter(cat),
    destination: `${cat}/src/_${cat}.js`,
    format: 'cssLiterals',
  }));
};

export default {
  source: ['**/*.tokens.js'],
  format: {
    cssLiterals: (opts) => {
      const { dictionary, file } = opts;
      let output = StyleDictionary.formatHelpers.fileHeader(file);
      output += `import { css } from '@lion/core';\n\n`;

      dictionary.allTokens.forEach((token) => {
        const { path, value } = token;
        const [, ..._path] = path;
        const name = _path.reduce((acc, str, index) => {
          // converts to camelCase
          const _str =
            index === 0 ? str : str.charAt(0).toUpperCase() + str.slice(1);
          return acc.concat(_str);
        }, '');
        output += `export const ${name} = css\`${value}\`;\n`;
      });

      return output;
    },
  },
  platforms: {
    css: {
      transformGroup: 'css',
      prefix: 'simba',
      buildPath: 'tokens/',
      files: [
        {
          filter: (token) => baseTokens.includes(token.attributes.category),
          destination: 'tokens.css',
          format: 'css/variables',
        },
      ],
    },
    js: {
      transformGroup: 'js',
      buildPath: '',
      files: generateFilesArr([...baseTokens, 'button']),
    },
  },
};
