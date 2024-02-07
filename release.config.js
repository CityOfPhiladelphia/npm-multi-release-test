module.exports = {
  "repositoryUrl": "git@github.com:CityOfPhiladelphia/npm-multi-release-test.git",
  "branches": [
    "main"
  ],
  "debug": true,
  "dryRun": false,
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
    ]
  ]
};