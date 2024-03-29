module.exports = function (api) {
  api.cache(true);
  return {
    "presets": ['babel-preset-expo'],

    "plugins": [
      [
        "module-resolver",
        {
          "root": ["./src"],
          "alias": {
            "_assets": "./assets",
            "_analytics": "./src/analytics",
            "_components": "./src/components",
            "_config": "./src/config",
            "_constants": "./src/constants",
            "_context": "./src/context",
            "_form": "./src/form",
            "_helper": "./src/helper",
            "_hooks": "./src/hooks",
            "_module": "./src/module",
            "_navigations": "./src/navigations",
            "_scenes": "./src/scenes",
            "_services": "./src/services",
            "_store": "./src/store",
            "_styles": "./src/styles",
            "_subview": "./src/subview",
            "_UI": "./src/UI"
          }
        }
      ]
    ]

  };
};
