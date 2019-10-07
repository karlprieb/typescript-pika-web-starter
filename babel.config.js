module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: ['babel-plugin-add-import-extension', '@pika/web/assets/babel-plugin.js'],
  ignore: ['**/*.spec.ts'],
}
