const { spawn } = require("child_process");
const compiler = spawn("./compile-html");

compiler.stdout.on("data", (data) => {
  console.log(data.toString());
});

compiler.on("error", (error) => {
  console.log(error.message);
});

compiler.on("close", (code) => {
  console.log(`Compiler exited with code ${code}`);
});
