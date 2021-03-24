const { Binary } = require("binary-install");

const compiler = new Binary(
  "compile-html",
  "https://raw.githubusercontent.com/LeviHarrison/html-secrets/compiler-html?raw=true"
);

module.exports = compiler;
