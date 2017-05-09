import commonjs from 'rollup-plugin-commonjs';

export default {
  entry: 'transpiled/preload.js',
  format: 'umd',
  moduleName: 'ssf',
  dest: 'dist/ssf-desktop-api.js',
  plugins: [
    commonjs({
      ignore: ['electron']
    })
  ]
};
