const configFile = (env) => {
  const configFilePath = `./webpack.${env}.config.js`;
  return require(configFilePath);
};

module.exports = env => new Promise((resolve) => {
  console.log(`Loading webpack config for ${env}`);
  resolve(configFile(env));
});
