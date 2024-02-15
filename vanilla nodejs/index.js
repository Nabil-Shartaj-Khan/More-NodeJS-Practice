const http = require("http");
const url = require("url");
const events = require("events");
class Alarm extends events.EventEmitter {}
const PORT = 8080;

//event
const fireAlarm = new Alarm();
fireAlarm.on("smoke", (level) => {
  console.log(`Fire alarm is ringing in the ${level} level !!!`);
});

fireAlarm.emit("smoke", 3);

const wakeUp = new Alarm();
wakeUp.on("wakeup", (time) => {
  console.log(`Wake up it is  ${time} in the morning!`);
});

wakeUp.emit("wakeup", 7);
//server related work
const server = http.createServer((req, res) => {
  const httpPath = url.parse(req.url).pathname; //parsing url from the path

  if (httpPath === "/nabil") {
    res.write("Hello Nabil");
    res.end();
  } else if (httpPath === "/else") {
    res.write("Hello Else");
    res.end();
  } else {
    res.write("Hello world");
    res.end();
  }
});

server.listen(PORT, () => {
  console.log("Server is running");
});
