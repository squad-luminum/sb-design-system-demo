import StyleDictionary from 'style-dictionary';
import { paramCase } from 'change-case';

const baseConfig = require('./style-dictionary-config.json')
// StyleDictionary.registerTransform({
//   name: 'size/px',
//   type: 'value',
//   matcher: token => {
//     return (token.unit === 'pixel' || token.type === 'dimension') && token.value !== 0
//   },
//   transformer: token => {
//     return `${token.value}px`
//   }
// })

// StyleDictionary.registerTransform({
//   name: 'size/percent',
//   type: 'value',
//   matcher: token => {
//     return token.unit === 'percent' && token.value !== 0
//   },
//   transformer: token => {
//     return `${token.value}%`
//   }
// })

// StyleDictionary.registerTransformGroup({
//   name: 'custom/css',
//   transforms: StyleDictionary.transformGroup['css'].concat([
//     'size/px',
//     'size/percent'
//   ])
// })


// StyleDictionary.registerFilter({
//   name: 'validToken',
//   matcher: function(token) {
//     return ['dimension', 'string', 'number', 'color'].includes(token.type)
//   }
// })

// 'name/cti/kebab': {
//     type: 'name',

//   },

StyleDictionary.registerTransform({
    name: 'betterKebab',
    type: 'name',
         transformer: function(token, options) {
       return paramCase([options!.prefix].concat(token.path).join(' '));
     }
})



const StyleDictionaryExtended = StyleDictionary.extend(baseConfig)

StyleDictionaryExtended.buildAllPlatforms()