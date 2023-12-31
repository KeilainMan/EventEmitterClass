

const eventManager = require("./EventManager");
const manager = new eventManager();

const subscription = manager.eventSubscribe("eventHappened", [onEventHappened, onEventHappened2])
const subscription2 = manager.eventSubscribe("eventHappened", onEventHappened3)



const m = manager.eventEmit("eventHappened", 3)
console.log(m)
subscription(onEventHappened)

function onEventHappened(number){
    console.log("Event happened!:", number);
    return 1
}

function onEventHappened2(){
    console.log("Event2 happened!:");
    return 2
}

function onEventHappened3(){
    console.log("Event3 happened!:");
    return 3
}