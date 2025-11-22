module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "type-enum": [
      2,
      "always",
      ["feat", "fix", "refactor", "docs", "style", "chore", "test", "init"],
    ],

    "subject-case": [0],
  },
};
