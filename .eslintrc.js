module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parserOptions: {
        parser: "@babel/eslint-parser",
        requireConfigFile: false
    },
    extends: ["@nuxtjs", "plugin:nuxt/recommended"],
    plugins: [],
    rules: {
        semi: "off",
        quotes: ["error", "double"],
        indent: ["warn", 4],
        "vue/html-indent": 0
    }
};
