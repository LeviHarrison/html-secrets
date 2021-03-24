#!/usr/bin/env node

const { Binary } = require("binary-install");
const compiler = new Binary(
  "https://raw.githubusercontent.com/LeviHarrison/html-secrets/compiler-html",
  { name: "compile-html" }
);

compiler.run();
