module.exports = function check(str, bracketsConfig) {
  const brackets = ['|', '7', '8']
  const open_brackets = ['(', '{', '[', '1', '3', '5'];
  const brackets_pair = {
    [')']: '(',
    ['}']: '{',
    [']']: '[',
    ['2']: '1',
    ['4']: '3',
    ['6']: '5',
  };

  
let stack = [];
  for(let i = 0; i < str.length; i++) {
    
    let topElement = stack[stack.length - 1];
    let currentSymbol = str[i];

    if (open_brackets.includes(currentSymbol) ) {
      stack.push(currentSymbol);
    } else if (brackets.includes(currentSymbol) && stack.includes(currentSymbol)) {
      stack.pop();
    } else if (brackets.includes(currentSymbol)) {
      stack.push(currentSymbol);
    } else {
      if  (brackets_pair[currentSymbol] === topElement) {
        stack.pop();
      } else {
        return false;
      }
    }
  }
  return stack.length === 0;
}
