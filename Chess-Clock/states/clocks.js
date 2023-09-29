import Clock from "../data/Clock.js";
import getQS from "../helpers/getQS.js";

// Initialize clock1 and clock2
const firstClock = getQS("#clock");
const secondClock = getQS("#clock2");
const clock1 = new Clock(0, 0, 0, firstClock);
const clock2 = new Clock(0, 0, 0, secondClock);

export { clock1, clock2 };
