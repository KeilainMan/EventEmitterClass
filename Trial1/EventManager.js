class eventManager {
    constructor() {
      this.signals = {
        Propertie1: [1, 2, 3]
      };
    }
    

    
    eventSubscribe(signal, callbackFunction) {
      const formattedFunctions = this.formatFunctions(callbackFunction);
  
      if (this.signalIsDefined(signal)) {
        console.log("Signal already exists!");
        this.addFunctionsToProperty(signal, callbackFunction);
      } else {
        this.signals[signal] = formattedFunctions;
        console.log("Signals: ", this.signals);
      }
      console.log(signal, " has subscribed with function: ", callbackFunction);
      const retOb = { fnc: this.eventUnsubscribe };
      return retOb;
    }
  
    eventUnsubscribe(callbackFunction) {
      const values = Object.values(this.signals);
      for (const arr of values) {
        for (const fnc of arr) {
          if (fnc === callbackFunction) {
            const pos = arr.indexOf(fnc);
            arr.splice(pos, 1);
            console.log(this.signals);
            console.log(callbackFunction, " has unsubscribed");
          }
        }
      }
    }
  
    eventEmit(signal, arg = []) {
      const values = this.signals[signal];
      for (const fcn of values) {
        fcn(arg);
        console.log(fcn, " was emitted");
      }
    }
  
    signalIsDefined(signal) {
      for (const key in this.signals) {
        if (key === signal) {
          return true;
        }
      }
      return false;
    }
  
    addFunctionsToProperty(signal, callbackFunction) {
      const currentValues = this.signals[signal];
      const newValues = currentValues.concat(callbackFunction);
      this.signals[signal] = newValues;
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

  