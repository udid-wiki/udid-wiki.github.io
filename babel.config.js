module.exports = {
  targets: '>0.5%',
  presets: ['@babel/preset-env'],
  plugins: [
    [
      '@babel/plugin-transform-modules-commonjs',
      {
        allowTopLevelThis: true,
      },
    ],
  ],
};
