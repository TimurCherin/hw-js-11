//  Task 1

function logItems(array) {
  for (const arr of array) {
    console.log(array.indexOf(arr) + 1, arr);
  }
}

logItems(["Mango", "Poly", "Ajax", "Lux", "Jay", "Kong"]);
logItems([5, 10, 15, 20, 25, 30, 35, 40, 45, 50]);

//  Task 2

const calculateEngravingPrice = function (message, pricePerWord) {
  const totalPrice = message.split(" ").length * pricePerWord;
  return totalPrice;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
); // 80

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
); // 160

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
); // 240

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
); // 120

//  Task 3

const findLongestWord = function (string) {
  const stringArray = string.split(" ");
  let longest = stringArray[0];

  for (const str of stringArray) {
    if (str.length > longest.length) {
      longest = str;
    }
  }

  return longest;
};

/*
 * Виклич функції для перевірки працездатності твоєї реалізації.
 */
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'

//  Task 4

const formatString = function (string) {
  if (string.length <= 40) {
    return string;
  } else {
    const newString = `${string.slice(0, 41)}...`;
    return newString;
  }
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// повернеться оригінальний рядок

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// повернеться форматований рядок

console.log(formatString("Curabitur ligula sapien."));
// повернеться оригінальний рядок

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
);
// повернеться форматований рядок

// // Task 5
const checkForSpam = function (message) {
    if (
      message.toLowerCase().includes("spam") ||
      message.toLowerCase().includes("sale")
    ) {
      return true;
    } else {
      return false;
    }
};

/*
 * Викличи функції для перевірки працездатності твоєї реалізації.
 */
console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true

// // Task 6

let input;
const numbers = [];
let total = 0;
do {
  input = prompt("Введіть число");
  if (input === null) {
    if (numbers.length) {
      for (const number of numbers) {
        total += number;
      }
      console.log(`Загальна сума чисел дорівнює ${total}`);
    }
    break;
  }
  let numberInput = Number(input);
  if (Number.isNaN(numberInput) || input == "") {
    console.log(alert("Було введено не число, попробуйте ще раз"));
    continue;
  }

  numbers.push(numberInput);
  console.log(numbers);
} while (input !== null);

// // Task 7

const logins = ["Mango", "robotGoogles", "Poly", "Aj4x1sBozz", "qwerty123"];

const isLoginValid = function (login) {
  if (login.length <= 16 && login.length >= 4) {
    return true;
  } else {
    return false;
  }
};

const isLoginUnique = function (allLogins, login) {
  const isIncludes = !allLogins.includes(login);
  return isIncludes;
};

const addLogin = function (allLogins, login) {
  if (!isLoginValid(login)) {
    return "Помилка! Логін повинен бути від 4 до 16 символів";
  }
  if (!isLoginUnique(allLogins, login)) {
    return "Такий логін уже використовується!";
  } else {
    allLogins.push(login);
    return "Логін успішно доданий!";
  }
};

console.log(addLogin(logins, "Ajax")); // 'Логін успішно доданий!'
console.log(addLogin(logins, "robotGoogles")); // 'Такий логін вже використовується!'
console.log(addLogin(logins, "Zod")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
console.log(addLogin(logins, "jqueryisextremelyfast")); // 'Помилка! Логін повинен бути від 4 до 16 символів'
