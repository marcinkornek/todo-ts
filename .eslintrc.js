module.exports = {
  root: true,
  extends: '@react-native-community',
  rules: {
    "import/no-extraneous-dependencies": ["error", {"packageDir": './'}]
  }
};
