module.exports = function check(str, bracketsConfig) {
  var stack = [];

for (let i = 0; i < str.length; i++) {
  for (let j = 0; j < bracketsConfig.length; j++) {
    if (str[i] === bracketsConfig[j][0] || str[i] === '|') {
      stack.push(str[i]);
      break;
    } else if (str[i] === bracketsConfig[j][1]) {
        if (stack[stack.length - 1] === '|') {
            var result = stack.reduce(function(acc, el) {
          acc[el] = (acc[el] || 0) + 1;
          return acc;
          }, {});
          if (result['|'] % 2 === 0 && str.length > 4) {
              var stack = stack.join('').split('|').join('').split('');
          }
        }
      if (stack.length === 0 || stack[stack.length - 1] !== bracketsConfig[j][0]) {
        return false;
      } else {
        stack.pop();
        break;
      }
    }
  }
}
  
  if (stack[0] === '(' || stack[0] === ')') {
      return stack.length === 0
  } else if (stack[0] === '|' && stack[1] === '|') {
      return true
  } else {
      return stack.length === 0
  }
}