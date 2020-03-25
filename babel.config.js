module.exports = {
	presets: ['@babel/preset-env', '@babel/preset-react'],
	plugins: [
		'@babel/plugin-transform-regenerator',
		'@babel/plugin-transform-runtime',
		'@babel/plugin-proposal-optional-chaining',
		'@babel/plugin-transform-modules-commonjs',
		['babel-plugin-webpack-alias', { config: './webpack.config.js' }],
	],
};
