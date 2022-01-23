module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          tests: ['./tests/'],
          '@app': './src/app',
          '@navigation': './src/app/navigation',
          '@feature': './src/feature',
          "@core": "./src/core",
          "@common": "./src/common",
        },
      },
    ],
  ],
};
