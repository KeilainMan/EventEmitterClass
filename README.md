# Implementations of an EventEmitter Class in JS

## Task

Design of an EventEmitterClass with the following constraints:

1. subscribe - This method takes two arguments: the name of an event as a string and a callback function. The callback function will be called when the event is emitted. An event should support multiple listeners. When emitting an event with multiple callbacks, each should be called in the order in which they were subscribed. The subscribe method should return an object with an `unsubscribe` method. Calling `unsubscribe` should remove the callback from the list of subscriptions.

        ```javascript
        const eventEmitter = new EventEmitter();
        const subscription = eventEmitter.subscribe('eventName', (arg1, arg2) => {
            // Callback logic here
        });

        // To unsubscribe:
        subscription.unsubscribe();
        ```

2. emit - This method takes two arguments: the name of an event as a string and an optional array of arguments that will be passed to the callback(s). If there are no callbacks subscribed to the given event, return an empty array. Otherwise, return an array containing the results of all callback calls in the order they were subscribed.

        ```javascript
        const eventEmitter = new EventEmitter();
        eventEmitter.subscribe('eventName', (arg1, arg2) => {
         // Callback logic here
        });

        const results = eventEmitter.emit('eventName', [arg1, arg2]);
        ```

Constraints:

- 1 <= actions.length <= 10
- values.length === actions.length
- All test cases are valid; you don't need to handle scenarios when unsubscribing from a non-existing subscription.
- There are only 4 different actions: EventEmitter, emit, subscribe, and unsubscribe.
- The EventEmitter action doesn't take any arguments.
- The emit action takes either 1 or 2 arguments. The first argument is the name of the event to emit, and the 2nd argument is passed to the callback functions.
- The subscribe action takes 2 arguments: the event name and the callback function.
- The unsubscribe action takes one argument, which is the 0-indexed order of the subscription made before.


## Approaches/Trials

### Trial1

Working EventEmitter Class in JS. Build using own knowledge while learning JS.
Not all Constraints are fulfilled.

Signals/Events are stored in an Object and a separate method is used to unsubscribe, instead of an returned object.

### Trial2

Working EventEmitter Class in JS. Improved on Trial1 using own knowledge, ChatGPT for syntax correction and inspiration from the web. 
Not all Constraints are fulfilled.

Signals/Events are stored in a Map. The subscription method returns an Object to unsubscribe. Two functions reduced compared to Trial1.
