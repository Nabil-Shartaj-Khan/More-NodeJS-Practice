const Log = require("./log");
const { title, add, sub } = require("./math");

console.log(title);
console.log(add(4, 3));
console.log(sub(4, 3));

Log.info("This is a test");
Log.warning("Its not real");
Log.error("Nothing, great job!");
