module.exports = {
  "branches": [
    "main"
  ],
  "debug": true,
  "dryRun": true,
  "plugins": [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/npm",
      {
        "pkgRoot": "src/core"
      }
    ],
    [
      "@semantic-release/npm",
      {
        "pkgRoot": "src/components/comp1"
      }
    ],
    [
      "@semantic-release/npm",
      {
        "pkgRoot": "src/components/comp2"
      }
    ],
    "@semantic-release/git"
  ]
};