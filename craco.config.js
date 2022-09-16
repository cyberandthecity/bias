const path = require("path")

module.exports = {
	// ...existing code
	webpack: {
		alias: {
			"@": path.resolve(__dirname, "src"),
		},
	},
}
