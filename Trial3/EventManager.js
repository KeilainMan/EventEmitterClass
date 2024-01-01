class eventManager {
    constructor() {
      this.signals = new Map();
    }
    
    eventSubscribe(signal, callbackFunctions) {
      const formattedFunctions = Array.isArray(callbackFunctions) ? callbackFunctions : [callbackFunctions];
      this.signals.has(signal) ? this.signals.set(signal, this.signals.get(signal).concat(formattedFunctions)) : this.signals.set(signal, formattedFunctions);
      console.log(signal, " has subscribed with function: ", callbackFunctions);

      return (func) => {
        const values = this.signals.get(signal);
        values.forEach(fnc => {
          if (fnc === func) {
            const pos = values.indexOf(fnc);
            values.splice(pos, 1);
            console.log(func, " has unsubscribed");
          };
        });
      };
    }
    
    eventEmit(signal, arg = []) {
      console.log("Emitted signal", signal, "was received");
      const values = this.signals.get(signal);
      const results = [];
      if (!(values === undefined) && !(values.length === 0)){
        values.forEach(func => {
          results.push(func(arg));
        });
      }
      return results;
    }
  
}

module.exports = eventManager;

  