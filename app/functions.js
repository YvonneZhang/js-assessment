exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
    return fn.apply(this, arr);
  },

  speak: function(fn, obj) {
    return fn.apply(obj);
  },

  functionFunction: function(str) {
    return str1 => {
      return str + ', ' + str1;
    };
  },

  makeClosures: function(arr, fn) {
    return arr.map(value => {
      return () => {
        return fn(value);
      };
    });
  },

  partial: function(fn, str1, str2) {
    return partial => {
      return fn(str1, str2, partial);
    };
  },

  useArguments: function() {
    let acc = 0;

    for (const value of arguments) {
      acc = acc + value;
    }
    return acc;
  },

  callIt: function(fn) {
    const restArgs = [];
    for (const index in arguments) {
      if (index > 0) {
        restArgs.push(arguments[index]);
      }
    }
    return fn.apply(this, restArgs);
  },

  partialUsingArguments: function(fn) {
    const allArguments = [];
    for (const index in arguments) {
      if (index > 0) {
        allArguments.push(arguments[index]);
      }
    }
    return function() {
      for (const index in arguments) {
        allArguments.push(arguments[index]);
      }
      const result = fn.apply(this, allArguments);
      return result;
    };
  },

  curryIt: function(fn) {
    const args = [];
    const storeValue = value => {
      args.push(value);
      if (args.length === fn.length) {
        return fn.apply(this, args);
      }
      return storeValue;
    };
    return storeValue;
  }
};
