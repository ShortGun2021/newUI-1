module.exports = function override(config, env) {
  console.log("override");
  let loaders = config.resolve;
  loaders.fallback = {
    crypto: require.resolve("crypto-browserify"),
  };

  return config;
};
