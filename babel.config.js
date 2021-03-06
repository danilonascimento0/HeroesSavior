module.exports = function (api) {
  api.cache(true);

  const presets = [ ["react-native"], ['module:metro-react-native-babel-preset'] ];
  const plugins = [ [
      "@babel/plugin-proposal-decorators",
      {
        "legacy": true
      }
    ]
  ];

  return {
    presets,
    plugins
  };
}