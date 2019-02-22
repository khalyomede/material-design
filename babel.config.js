'use strict';

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        spec: true,
        useBuiltIns: 'usage',
        forceAllTransforms: true
      }
    ]
  ]
};