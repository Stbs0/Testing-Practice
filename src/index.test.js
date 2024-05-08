import {
  calculator,
  capitalize,
  reverseString,
  caesarCipher,
  analyzeArray
} from "./index.js";
test("capitalize first sting", () => {
  expect(capitalize("hello")).toBe("Hello");
});
test("reverse string", () => {
  expect(reverseString("welcome")).toBe("emoclew");
});
test("calculator", () => {
  const { add, subtract, divide, multiplay } = calculator();
  expect(add(5, 9)).toBe(14);
  expect(subtract(12, 9)).toBe(3);
  expect(divide(90, 9)).toBe(10);
  expect(multiplay(5, 9)).toBe(45);
});
test("cipher", () => {
  expect(caesarCipher("abcdefghijklmnopqrstuvwxyz", 7)).toBe(
    "hijklmnopqrstuvwxyzabcdefg"
  );
  expect(caesarCipher("Hi My Name Is Mohammed", 7)).toBe(
    "Op Tf Uhtl Pz Tvohttlk"
  );
  expect(caesarCipher("hello", 7)).toBe("olssv");
  expect(caesarCipher("hello, My Name Is.", 7)).toBe("olssv, Tf Uhtl Pz.");
  const obj = {
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  };
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(obj);

  
});

