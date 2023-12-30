

const eventManager = require("./EventManager");
const manager = new eventManager();

const subscription = manager.eventSubscribe("eventHappened", onEventHappened)

manager.eventEmit("eventHappened")
manager.eventUnsubscribe(onEventHappened)

function onEventHappened(){
    console.log("Event happened!")
}