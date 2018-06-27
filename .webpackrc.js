export default {
    "entry": "src/index.js",
    "disableCSSModules": false,
    "extraBabelPlugins": [
        [
            "import",
            {
                "libraryName": "antd",
                "libraryDirectory": "es",
                "style": "css"
            }
        ]
    ],
    "theme": "./src/theme.js"
}
