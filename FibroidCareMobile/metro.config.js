const { getDefaultConfig } = require('expo/metro-config');

const config = getDefaultConfig(__dirname);

// Add asset extensions
config.resolver.assetExts.push(
  'db',
  'mp3',
  'ttf',
  'obj',
  'png',
  'jpg',
  'mtl'
);
// Enable Hermes support
config.transformer = {
  ...config.transformer,
  minifierPath: 'metro-minify-terser',
  minifierConfig: {
    keep_classnames: true,
    keep_fnames: true,
    mangle: {
      keep_classnames: true,
      keep_fnames: true,
    },
  },
};

module.exports = config;