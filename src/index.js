function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
function reverseString(str) {
  return str.split("").reverse().join("");
}
function calculator() {
  function multiplay(a, b) {
    return a * b;
  }
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  function divide(a, b) {
    return a / b;
  }
  return { add, subtract, divide, multiplay };
}
function caesarCipher(str, key) {
  const lowAlpha = "abcdefghijklmnopqrstuvwxyz";
  const highAlpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newStr = "";
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    if (char >= 65 && char <= 90) {
      //   newStr += String.fromCharCode(char + key);
      newStr += highAlpha[(highAlpha.indexOf(str[i]) + key) % 26];
    } else if (char >= 97 && char <= 122) {
      newStr += lowAlpha[(lowAlpha.indexOf(str[i]) + key) % 26];
    } else {
      newStr += str[i];
    }
  }
  return newStr;
}

function analyzeArray(arr) {
  const map = new Map();

  map.set("average", arr.reduce((a, b) => (a += b)) / arr.length);
  map.set("min", Math.min(...arr));
  map.set("max", Math.max(...arr));
  map.set("length", arr.length);
  return Object.fromEntries(map);
}
export { capitalize, reverseString, calculator, caesarCipher, analyzeArray };
