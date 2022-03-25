module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["plugin:vue/essential", "eslint:recommended"],
  parserOptions: {
    parser: "babel-eslint",
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false },
    ],
    "no-empty": ["warn", { allowEmptyCatch: true }],
    "no-undef": ["error", { typeof: true }],
    "no-inner-declarations": ["warn"],
    "no-unreachable": ["warn"],
    "no-extra-semi": ["warn"]
    "no-used-var": ["warn"]
  },
};
