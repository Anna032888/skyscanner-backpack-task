const CracoBabelLoader = require('craco-babel-loader');

module.exports = {
  plugins: [
    {
      plugin: CracoBabelLoader,
      options: {
        includes: [
          /node_modules[\/\\]@skyscanner[\/\\]backpack-web/,
          /node_modules[\/\\]bpk-mixins/,
        ],
      },
    },
  ],

  jest: {
    configure: {
      transformIgnorePatterns: [
        'node_modules/(?!(@skyscanner/backpack-web|bpk-mixins)/)',
      ],
    },
  },
};