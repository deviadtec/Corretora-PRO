// @ts-ignore
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          '@components': './src/components',
          '@services': './src/services',
          '@models': './src/models',
          '@i18n': './src/i18n',
        },
      },
    ],
    'react-native-paper/babel',
    'react-native-reanimated/plugin',
  ],
};
