

const eventManager = require("./EventManager");
const manager = new eventManager();

const subscription = manager.eventSubscribe("eventHappened", onEventHappened)

const m = manager.eventEmit("eventHappened")
console.log(m)
manager.eventUnsubscribe(onEventHappened)

function onEventHappened(){
    console.log("Event happened!");
    return 1
}