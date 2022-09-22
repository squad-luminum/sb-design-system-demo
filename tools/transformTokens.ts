import StyleDictionary, { TransformedToken } from 'style-dictionary';
import { paramCase } from 'change-case';

const themes = [`global`, `luminum-light`, `luminum-dark`, `bluestar-light`];

const toKebab = (value: string) => paramCase(value, {
  splitRegexp: /([a-z])([A-Z])/g,
});

const tokenToKebab = (token: TransformedToken, prefix: string = '') => toKebab([prefix].concat(token.path).join(' '));

StyleDictionary.registerTransform({
    name: 'betterKebab',
    type: 'name',
    transformer: function(token, options) {
      return tokenToKebab(token, options?.prefix);
     }
});

StyleDictionary.registerFormat({
  name: `javascript/es6WithVars`,
  formatter: function({dictionary, file}) {
    const header = StyleDictionary.formatHelpers.fileHeader({ file });
    const content = dictionary.allTokens.map(token => {
      const value = `--${tokenToKebab(token)}`;
      return `export const ${token.name} = "var(${value})";`
      // TODO: ADD FALLBACKS:
      // return `export const ${token.name} = "var(${value}, ${token.value})";`
    }).join('\n');
    return `${header}${content}`;
  }
});

themes.forEach(theme => {
  StyleDictionary.extend({
    source: [`.tmp/${theme}.tokens.json`],
    platforms: {
      "web": {
        transformGroup: "web",
        transforms: ["betterKebab"],
        buildPath: `src/styles/`,
        files: [{
          "destination": `${theme}.theme.css`,
          "format": "css/variables"
        }],
        options : {
          selector: `.theme-${theme}`,
          showFileHeader: false,
          outputReferences: true
        }
      },
      json: {
        transformGroup: "js",
        transforms: ["betterKebab"],
        buildPath: `src/styles/`,
        files: [
          {
            "destination": `${theme}.styles.json`,
            "format": "json/flat"
          }
        ]
      },
    }
  }).buildAllPlatforms();
});

StyleDictionary.extend({
  source: [`.tmp/luminum-light.tokens.json`],
  platforms: {
    ts: {
      transformGroup: 'js',
      buildPath: `src/styles/`,
      files: [
        {
          // format: 'javascript/es6',
          format: 'javascript/es6WithVars',
          destination: 'colors.js',
        },
        {
          format: 'typescript/es6-declarations',
          destination: 'colors.d.ts',
        }
      ],
    }
  }
}).buildAllPlatforms();
