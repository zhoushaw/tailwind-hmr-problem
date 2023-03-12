/**
 * @type {import('@rspack/cli').Configuration}
 */
module.exports = {
	context: __dirname,
	entry: {
		main: "./src/main.jsx"
	},
	builtins: {
		html: [
			{
				template: "./index.html"
			}
		]
	},
	module: {
		rules: [
			{
				test: /\.svg$/,
				type: "asset"
			},
			{
				test: /\.css$/,
				use: [
				  {
					loader: 'postcss-loader',
					options: {
					  postcssOptions: {
						plugins: {
						  tailwindcss: {},
						},
					  },
					},
				  },
				],
				type: 'css',
			  },
		]
	}
};
