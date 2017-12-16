exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    let wordCount = 0,
      ch = '';
    return str.split('').reduce((accumulation, currentCh) => {
      if (ch !== currentCh) {
        // 清空字符计数器
        ch = currentCh;
        wordCount = 1;
        return accumulation + ch;
      }
      wordCount++;
      if (wordCount === amount) {
        return accumulation + ch.repeat(wordCount - 1);
      }
      return accumulation;
    }, '');
  },

  wordWrap: function(str, cols) {
    const words = str.split(' ');
    let substr = '';
    return words.reduce((acc, curWord, curIndex, past) => {
      if (curWord.length >= cols) {
        return acc + curWord + '\n';
      }
      const nextWord = words[curIndex + 1];
      if (!nextWord) {
        return acc + curWord;
      }
      if (curWord.length + nextWord.length > cols) {
        return acc + curWord + '\n';
      }
      if (curWord.length + nextWord.length < cols) {
        const lastIdx = acc.lastIndexOf('/n');
        if (acc.length - lastIdx >= cols) {
          return acc + curWord + '\n';
        }
        return acc + curWord + ' ';
      }
      return acc;
    }, '');
  },

  reverseString: function(str) {
    return str
      .split('')
      .reverse()
      .join('');
  }
};
