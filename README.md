[lab1_1_img]: ./images/lab1_1.png
[lab1_2_img]: ./images/lab1_2.png
[lab1_3_img]: ./images/lab1_3.png
[lab1_4_img]: ./images/lab1_4.png


Lab #1
======

**Task #1**
-----------

Problem:
>Знайти суму двох цілих чисел.

Solution:

```javascript
const sum = (a, b) => a + b;
```

Screenshot:

![lab1_1_img]

**Task #2**
-----------

Problem:
>Дано рік народження. Знайти кількість років.

Solution:

```javascript
const computeYears = birthYear => new Date().getFullYear() - birthYear;
```

Screenshot:

![lab1_2_img]

**Task #3**
-----------

Problem:
>Дано вартість одиниці товару і кількість. Знайти загальну вартість.

Solution:

```javascript
const getTotalPrice = (price, amount) => price * amount;
```

Screenshot:

![lab1_3_img]

**Task #4**
-----------

Problem:
>Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.

Solution:

```javascript
const centimetersToMeters = centimeters => centimeters / 100;
```

Screenshot:

![lab1_4_img]

[lab2_1_img]: ./images/lab2_1.png
[lab2_1_1_img]: ./images/lab2_1_1.png
[lab1_3_img]: ./images/lab1_3.png
[lab1_4_img]: ./images/lab1_4.png


Lab #2
======

**Task #1**
-----------

Problem:
>Найбільше серед двох різних замінити на 0.

Solution:

```javascript
const changeMaxToZero = (a, b) => a > b ? [0, b] : [a, 0];
```

Screenshot:

![lab2_1_img]

**Task #1.1**
-----------

Problem:
>Найбільше серед двох замінити на 0. Якщо однакові, то замінити обидва на 1.

Solution:

```javascript
const changeMaxToZero = (a, b) => {
  if (a > b) return [0, b];
  else if (b > a) return [a, 0];
  else return [1, 1];
}
```

Screenshot:

![lab2_1_1_img]

[regular_1_img]: ./images/regular_1.png
[regular_2_img]: ./images/regular_2.png
[regular_3_img]: ./images/regular_3.png
[regular_4_img]: ./images/regular_4.png
[regular_5_img]: ./images/regular_5.png
[regular_6_img]: ./images/regular_6.png
[regular_7_img]: ./images/regular_7.png
[regular_8_img]: ./images/regular_8.png
[regular_9_img]: ./images/regular_9.png
[regular_10_img]: ./images/regular_10.png


Lab #Regular
======

**Task #1**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких є цифри (використати метод test та регулярні вирази).

Solution:

```javascript
const withNumbers = s => /\d/.test(s);
```

Screenshot:

![regular_1_img]

**Task #2**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких немає цифр.

Solution:

```javascript
const withNumbers = s => /\d/.test(s);`
```

Screenshot:

![regular_2_img]

**Task #3**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких є голосні літери.

Solution:

```javascript
const withVowels = s => /(а|о|е|і|и|у)/.test(s);
```

Screenshot:

![regular_3_img]

**Task #4**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких немає голосних літер.

Solution:

```javascript
const withVowels = s => /(а|о|е|і|и|у)/.test(s);`
```

Screenshot:

![regular_4_img]

**Task #5**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

Solution:

```javascript
const with1or3 = s => /(1|3)/.test(s);`
```

Screenshot:

![regular_5_img]

**Task #6**
-----------

Problem:
>Дано рядок тексту, вивести усі цифри, які є у тексті.

Solution:
```javascript
const getAllDigits = s => s.match(/\d/g) || [];
```

Screenshot:

![regular_6_img]

**Task #7**
-----------

Problem:
>Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

Solution:
```javascript
const getAllPunctuationMarks = s => [...new Set(s.match(/[^\d\w]/g))];
```

Screenshot:

![regular_7_img]

**Task #8**
-----------

Problem:
>Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

Solution:

```javascript
const getAllParts = s => s.split(/[^\d\w]+/g).filter(v => v);
```

Screenshot:

![regular_8_img]


**Task #9**
-----------

Problem:
>Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm-
місяць, yyyy- рік).

Solution:

```javascript
const doesIncludeDDMMYYYY = s => /[1-3][1-9].[01][012].\d{4}/.test(s);
```

Screenshot:

![regular_9_img]


**Task #10**
-----------

Problem:
>Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

Solution:
```javascript
const countTwoDigitsNumber = s => (s.match(/\b\d{2}\b/g) || []).length;
```

Screenshot:

![regular_10_img]


[loops_1_img]: ./images/loops1.png
[loops_1_1_img]: ./images/loops1_1.png
[loops_2_img]: ./images/loops2.png
[loops_3_img]: ./images/loops3.png
[loops_4_img]: ./images/loops4.png


Lab #Loops
======

**Task #1**
-----------

Problem:
>Вивести на екран рядок тексту а а. . . а с с . . . с. У рядку 37 букв «а» і 10 букв «с»

Solution:
```javascript
const task1 = () => console.log('a'.repeat(37) + 'c'.repeat(10));
```
Screenshot:

![loops_1_img]

 **Task #1_1**
-----------

Problem:
>Вивести на екран:

```
000000000000000000000

000000000000000000000

000000000000000000000

000000000000000000000

000000000000000000000
```


Solution:
```javascript
const task1_1 = () => console.log(`${'0'.repeat(18)}\n`.repeat(7));
```

Screenshot:

![loops_1_1_img]


**Task #2**
-----------

Problem:
>Вивести на екран таблицю:
```
-------
| | | |
-------
| | | |
-------
| | | |
-------
```
Solution:

```javascript
const task2 = (rowLength, columnLength, pattern1, pattern2) => console.log(
  [...Array(Math.ceil(rowLength / 2))]
  .map(() => `${pattern1(columnLength)}\n`)
  .join(`${pattern2(columnLength)}\n`)
);
```
Screenshot:

![loops_2_img]

**Task #3**
-----------

Problem:
>Вивести на екран:
```
00 00 00 00 00 00 00
-- -- -- -- -- -- --
\/ \/ \/ \/ \/ \/ \/
00 00 00 00 00 00 00
-- -- -- -- -- -- --
\/ \/ \/ \/ \/ \/ \/
00 00 00 00 00 00 00
-- -- -- -- -- -- --
\/ \/ \/ \/ \/ \/ \/
```

Solution:

```javascript
const createLine = (val, count) => new Array(count).fill(val).join(' ');

const symbols = ['00', '--', '\\/'];

const task3 = () => {
  let s = '';
  for (let i = 0; i < 9; i++) {
    s+= `${createLine(symbols[i%symbols.length], 7)}\n`;
  }

  console.log(s);
}
```
Screenshot:

![loops_3_img]

**Task #4**
-----------

Problem:
>Вивести на екран 10 рядків по 15 букв «о» у кожному. Після кожного рядка вивести рядок із 15 символів «-».

```
1.ооооооооооооооо
---------------
2.ооооооооооооооо
---------------
3.ооооооооооооооо
---------------
. . . . . . . .
10.ооооооооооооооо
---------------
```

Solution:

```javascript
const task4 = () => {
  let s = '';

  for (let i = 1; i <= 10; i++) {
    s+= `${i}.${'o'.repeat(15)}\n`;
    s+= `${'-'.repeat(15)}\n`;   
  }

  console.log(s);
}
```
Screenshot:

![loops_4_img]