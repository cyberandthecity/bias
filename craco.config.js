const path = require("path")
const dotenv = require("dotenv-webpack")

module.exports = {
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
		configure: (webpackConfig) => {
			// Load the environment variables from .env
			webpackConfig.plugins.push(new dotenv({ path: ".env" }))

			return webpackConfig
		},
	},
}
