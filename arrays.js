const task1 = input => {
  let localMinAmount = 0;

  for (let i = 0; i < input.length; i++) {
    const hasLeft = typeof input[i - 1] !== 'undefined';
    const hasRight = typeof input[i + 1] !== 'undefined';

    let lessThanLeft = true;
    let lessThanRight = true;

    if (hasLeft) {
      lessThanLeft = input[i] < input [i - 1];
    }

    if (hasRight) {
      lessThanRight = input[i] < input [i + 1];
    }

    if (lessThanLeft && lessThanRight) {
      localMinAmount++;
    }
  }

  return localMinAmount;
}

// const task2 = input => {
//   const amount = input.reduce((o, v) => ({ ...o, [v]: o[v] ? o[v] + 1 : 1 }), {});
//   return amount;
// }

// Задача 1. Дано послідовність платіжок протягом року. Знайти сумарну кількість грошей за:
//     8) у першій половині року;
//     9) у другій половині року;
//     10) за літо;
//     11) за ІІ квартал.

const task2 = payments => {
  return {
    firstHalf: payments.slice(0, 6).reduce((sum, p) => sum + p),
    secondHalf: payments.slice(6, 12).reduce((sum, p) => sum + p),
    summer: payments.slice(5, 8).reduce((sum, p) => sum + p),
    secondQuarter: payments.slice(3, 6).reduce((sum, p) => sum + p) 
  }
}

const payments = [1,2,3,4,5,6,7,8,9,10,11,12];

task2(payments);

// Дано числовий масив розмірності N. Знайти кількість його локальних максимумів

const task3 = input => {
  let localMaxAmount = 0;

  for (let i = 0; i < input.length; i++) {
    const hasLeft = typeof input[i - 1] !== 'undefined';
    const hasRight = typeof input[i + 1] !== 'undefined';

    let lessThanLeft = true;
    let lessThanRight = true;

    if (hasLeft) {
      lessThanLeft = input[i] > input [i - 1];
    }

    if (hasRight) {
      lessThanRight = input[i] > input [i + 1];
    }

    if (lessThanLeft && lessThanRight) {
      localMaxAmount++;
    }
  }

  return localMaxAmount;
}

// Дано числовий масив розмірності N. Знайти кількість елементі, що більші за перший.

const task4 = arr => arr.slice(1).reduce((amount, el) => el > arr[0] ? amount + 1 : amount, 0);

// Задача 3. Дано послідовність цін товарів та назв (у окремих масивах). 
// Вивести на екран ті, які може собі дозволити користувач (кількість грошей задається).

const names = ['apple', 'turtle', 'coffee'];
const prices = [4.5, 389, 22];
const task5 = money => names.filter((name, i) => prices[i] <= money);
