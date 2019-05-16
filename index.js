module.exports = {
  rules: {
    "type-case": [2, "always", "lower-case"],
    "type-enum": [2, "always", ["chore", "ci", "docs", "feat", "fix", "test"]],
    "subject-case": [2, "always", "sentence-case"],
    "subject-max-length": [2, "always", 50],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "body-leading-blank": [2, "always"],
    "body-max-line-length": [2, "always", 72],
    "footer-leading-blank": [2, "always"],
    "footer-max-line-length": [2, "always", 72]
  }
};