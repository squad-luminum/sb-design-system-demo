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
    source: [`.tmp/${theme}.tokens.json`],
    platforms: {
      "web": {
        transformGroup: "web",
        transforms: ["betterKebab"],
        buildPath: `src/styles/`,
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