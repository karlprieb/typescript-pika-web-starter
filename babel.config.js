module.exports = {
  presets: ['@babel/preset-typescript'],
  plugins: ['./babel-plugin-add-import-extension.js', '@pika/web/assets/babel-plugin.js'],
  ignore: ['**/*.spec.ts'],
}
