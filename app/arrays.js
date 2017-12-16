exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item);
  },

  sum: function(arr) {
    return arr.reduce((acc, current) => {
      return acc + current;
    }, 0);
  },

  remove: function(arr, item) {
    return arr.reduce((acc, current) => {
      if (current === item) {
        return acc;
      }
      acc.push(current);
      return acc;
    }, []);
  },

  removeWithoutCopy: function(arr, item) {
    let cursor = 0;
    while (cursor < arr.length) {
      if (arr[cursor] === item) {
        arr.splice(cursor, 1);
      } else {
        cursor++;
      }
    }

    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function(arr) {
    arr.splice(arr.length - 1, 1);
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    let count = 0;
    for (const value of arr) {
      value === item && count++;
    }
    return count;
  },

  duplicates: function(arr) {
    const obj = {};
    const resultArr = [];
    for (const value of arr) {
      obj[value] = obj[value] === undefined ? 1 : obj[value] + 1;
      if (obj[value] === 2) {
        resultArr.push(value);
      }
    }
    return resultArr;
  },

  square: function(arr) {
    return arr.map(value => {
      return value * value;
    });
  },

  findAllOccurrences: function(arr, target) {
    const indexArr = [];
    for (const key in arr) {
      arr[key] === target && indexArr.push(key);
    }
    return indexArr;
  }
};
