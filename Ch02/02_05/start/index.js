import parseArgs from "minimist";
import Timer from "tiny-timer";

const { time } = parseArgs(process.argv);

if (!time) {
  throw new Error("---time is required");
}

if (!parseInt(time)) {
  throw new Error("--time must be a number");
}

const timer = new Timer();

timer.on("tick", () => console.log("tick"));
timer.on("done", () =>
  console.log("the ticking is complete!")
);

timer.start(time * 1000);
