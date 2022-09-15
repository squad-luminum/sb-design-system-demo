import StyleDictionary from 'style-dictionary';
import { paramCase } from 'change-case';

const themes = [`luminumLight`, `luminumDark`, `blueStarLight`];

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
    source: [`dist/${theme}.tokens.json`],
    platforms: {
      "web": {
        transformGroup: "web",
        transforms: ["betterKebab"],
        buildPath: `dist/css/`,
        files: [{
          "destination": `${theme}.css`,
          "format": "css/variables"
        }],
        options : {
          "showFileHeader": false,
          "outputReferences": true
        }
      }
    }
  }).buildPlatform('web');
});