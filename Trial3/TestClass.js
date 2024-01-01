

const eventManager = require("./EventManager");
const manager = new eventManager();

const subscription = manager.eventSubscribe("Event1", [onEventHappened, onEventHappened2])
const subscription2 = manager.eventSubscribe("Event1", onEventHappened3)



const result = manager.eventEmit("Event1", 3)
console.log("Results of all callbacks for Event1:", result)
subscription(onEventHappened)

const result2 = manager.eventEmit("Event2");
console.log("Results of all callbacks for Event2:", result2);


function onEventHappened(number){
    console.log("1. Event Callback:", number);
    return 1;
}

function onEventHappened2(){
    console.log("2. Event Callback");
    return 2;
}

function onEventHappened3(){
    console.log("3. Event Callback");
    return 3;
}