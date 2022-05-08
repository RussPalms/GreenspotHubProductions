const withPlugins = require("next-compose-plugins");
// const withPlugins = require("next-compose");
const optimizedImages = require("next-optimized-images");

// module.exports = withPlugins([optimizedImages], {
// 	target: "serverless",
// 	optimizedImages: false,
// });

const withVideos = require("next-videos");
// module.exports = withVideos();

const withImages = require("next-images");
// module.exports = withImages();

// const withImagesAndVideos = require("next-videos", "next-images");

module.exports = withPlugins([
	// [withVideos],
	// [withImages],
	// {
	// 	images: {
	// 		disableStaticImages: true,
	// 	},
	// },
	// [optimizedImages],
	// {
	// 	target: "serverless",
	// 	optimizedImages: false,
	// },

	// {
	// 	webpack(config, options) {
	// 		config.module.rules.push({
	// 			test: /\.mp3$/,
	// 			use: {
	// 				loader: "file-loader",
	// 			},
	// 		});
	// 		return config;
	// 	},
	// },

	{
		webpack(config, options) {
			const { isServer } = options;
			config.module.rules.push({
				test: /\.(ogg|mp3|wav|mpe?g)$/i,
				exclude: config.exclude,
				use: [
					{
						loader: require.resolve("url-loader"),
						options: {
							limit: config.inlineImageLimit,
							fallback: require.resolve("file-loader"),
							publicPath: `${config.assetPrefix}/_next/static/images/`,
							outputPath: `${
								isServer ? "../" : ""
							}static/images/`,
							name: "[name]-[hash].[ext]",
							esModule: config.esModule || false,
							// plugins: [
							// 	[
							// 		"babel-plugin-styled-components",
							// 		{ pure: true, ssr: true },
							// 	],
							// ],
							// presets: ["@babel/preset-react"],
						},
					},
				],
			});
			return config;
		},
	},

	// {
	// 	webpack(config, options) {
	// 		config.module.rules.push({
	// 			test: /\.(ogg|mp3|wav|mpe?g)$/i,
	// 			use: {
	// 				loader: "file-loader",
	// 			},
	// 		});
	// 		return config;
	// 	},
	// },

	// {
	// 	webpack(config, options) {
	// 		config.module.rules.push({
	// 			test: /\.(ogg|mp3|wav|mpe?g)$/i,
	// 			use: [
	// 				{
	// 					loader: "url-loader",
	// 					options: {
	// 						name: "[name]-[hash].[ext]",
	// 					},
	// 				},
	// 			],
	// 		});
	// 		return config;
	// 	},
	// },

	// renders, but no audio and no video
	// {
	// 	webpack(config, options) {
	// 		config.module.rules.push({
	// 			test: /.mp3$/,
	// 			use: {
	// 				loader: "file-loader",
	// 			},
	// 		});
	// 		return config;
	// 	},
	// },

	//  works with audio and video, not images
	// {
	// 	webpack(config, options) {
	// 		config.module.rules.push({
	// 			test: /\.(mp3)$/,
	// 			type: "asset/resource",
	// 			generator: {
	// 				filename: "static/chunks/[path][name].[hash][ext]",
	// 			},
	// 		});
	// 		return config;
	// 	},
	// },

	// the ORDER of plugins matters, because of the way we're defining webpack
	[withVideos],
	[withImages],
	{
		images: {
			disableStaticImages: true,
		},
	},
]);

// config.module.rules.push({
// 	test: /\.(mp3)$/,
// 	use: {
// 		loader: "file-loader",
// 		options: {
// 			publicPath: "/_next/static/sounds/",
// 			outputPath: "static/sounds/",
// 			name: "[name].[ext]",
// 			esModule: false,
// 		},
// 	},
// });

// module.exports = {
// 	reactStrictMode: true,
// };
