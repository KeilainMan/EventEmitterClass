class eventManager {
    constructor() {
      this.signals = new Map();
    }
    
    eventSubscribe(signal, callbackFunction) {
      const formattedFunctions = this.formatFunctions(callbackFunction);
  
      if (this.signals.has(signal)) {
        console.log("Signal already exists!");
        this.addFunctionsToProperty(signal, callbackFunction);
      } else {
        this.signals.set(signal, formattedFunctions);
        console.log("Signals: ", this.signals);
      }
      console.log(signal, " has subscribed with function: ", callbackFunction);
      return (func) => {
        console.log("Wants to unsubscribe");
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
      const values = this.signals.get(signal);
      const results = []
      if (!(values.length === 0)){
        values.forEach(func => {
          results.push(func(arg));
        });
      }
      return results
    }
  
    addFunctionsToProperty(signal, callbackFunction) {
      const currentValues = this.signals.get(signal);
      const newValues = currentValues.concat(callbackFunction);
      this.signals.set(signal, newValues);
    }
  
    formatFunctions(callbackFunction) {
      if (Array.isArray(callbackFunction)) {
        return callbackFunction;
      } else {
        return [callbackFunction];
      }
    }
}

module.exports = eventManager;

  