import StyleDictionary from 'style-dictionary';
import { paramCase } from 'change-case';

const themes = [`global`, `luminum-light`, `luminum-dark`, `bluestar-light`];

StyleDictionary.registerTransform({
    name: 'betterKebab',
    type: 'name',
         transformer: function(token, options) {
       return paramCase([options!.prefix].concat(token.path).join(' '), { 
        splitRegexp: /([a-z])([A-Z])/g,
       });
     }
})

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
  }).buildAllPlatforms()
});