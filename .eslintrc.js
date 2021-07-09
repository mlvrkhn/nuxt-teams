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
        "vue/html-indent": 0,
        "vue/singleline-html-element-content-newline": "off",
        "space-before-function-paren": 0,
        "arrow-parens": 0,
        "no-console": 0,
        "vue/html-self-closing": 0
    }
};
