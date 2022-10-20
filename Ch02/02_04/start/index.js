import parseArgs from "minimist";

const { time } = parseArgs(process.argv);

if (!time) {
  throw new Error("---time is required");
}

if (!parseInt(time)) {
  throw new Error("--time must be a number");
}

console.log(time);
