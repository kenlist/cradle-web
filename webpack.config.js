const ConfigWebpackPlugin = require("config-webpack");

module.exports = (config, { webpack }) => {
  config.resolve.modules.push("src");
  config.plugins.push(new ConfigWebpackPlugin("CONFIG"));
  return config;
}