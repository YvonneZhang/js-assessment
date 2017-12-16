exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(resolve => {
      resolve(value);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(resolve => {
      const xhr = new XMLHttpRequest();
      xhr.onload = function() {
        resolve(this.response);
      };
      xhr.open('GET', url);
      xhr.send();
    }).then(response => {
      const data = JSON.parse(response);
      return data.people.map(value => value.name).sort((a, b) => {
        return a > b;
      });
    });
  }
};
