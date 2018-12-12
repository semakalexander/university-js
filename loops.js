const task1 = () => console.log('a'.repeat(37) + 'c'.repeat(10));  

const task1_1 = () => console.log(`${'0'.repeat(18)}\n`.repeat(7));

const dashs = length => '-'.repeat(length);
const lines = length => '|'.repeat(Math.ceil(length / 2)).split('').join(' ');

const task2 = (rowLength, columnLength, pattern1, pattern2) => console.log(
  [...Array(Math.ceil(rowLength / 2))]
  .map(() => `${pattern1(columnLength)}\n`)
  .join(`${pattern2(columnLength)}\n`)
);


const createLine = (val, count) => new Array(count).fill(val).join(' ');

const symbols = ['00', '--', '\\/'];

const task3 = () => {
  let s = '';
  for (let i = 0; i < 9; i++) {
    s+= `${createLine(symbols[i%symbols.length], 7)}\n`;
  }

  console.log(s);
};


const task4 = () => {
  let s = '';

  for (let i = 1; i <= 10; i++) {
    s+= `${i}.${'o'.repeat(15)}\n`;
    s+= `${'-'.repeat(15)}\n`;   
  }

  console.log(s);
}