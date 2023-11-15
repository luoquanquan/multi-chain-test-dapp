// eslint-disable-next-line import/no-extraneous-dependencies
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
// eslint-disable-next-line import/no-extraneous-dependencies
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');

module.exports = function override(config, env) {
  // eslint-disable-next-line no-console
  console.log('Current log: env: ', env);
  config.plugins.push(new NodePolyfillPlugin({
    excludeAliases: ['console'],
  }));

  // eslint-disable-next-line max-len, no-param-reassign
  config.resolve.plugins = config.resolve.plugins.filter((plugin) => !(plugin instanceof ModuleScopePlugin));

  return config;
};
