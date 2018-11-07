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

>`const withNumbers = s => /\d/.test(s);`

Screenshot:

![regular_1_img]

**Task #2**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких немає цифр.

Solution:

>`const withNumbers = s => /\d/.test(s);`

Screenshot:

![regular_2_img]

**Task #3**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких є голосні літери.

Solution:

>`const withVowels = s => /(а|о|е|і|и|у)/.test(s);`

Screenshot:

![regular_3_img]

**Task #4**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких немає голосних літер.

Solution:

>`const withVowels = s => /(а|о|е|і|и|у)/.test(s);`

Screenshot:

![regular_4_img]

**Task #5**
-----------

Problem:
>Дано масив рядків. Вивести ті, у яких є або цифра 1 або цифра 3.

Solution:

>`const with1or3 = s => /(1|3)/.test(s);`

Screenshot:

![regular_5_img]

**Task #6**
-----------

Problem:
>Дано рядок тексту, вивести усі цифри, які є у тексті.

Solution:

>`const getAllDigits = s => s.match(/\d/g) || [];`

Screenshot:

![regular_6_img]

**Task #7**
-----------

Problem:
>Дано рядок тексту. Знайти усі знаки пунктуації, які були використано.

Solution:

>`const getAllPunctuationMarks = s => [...new Set(s.match(/[^\d\w]/g))];`

Screenshot:

![regular_7_img]

**Task #8**
-----------

Problem:
>Дано рядок тексту. Вивести усі складові, які розділені розділовими знаками.

Solution:

>`const getAllParts = s => s.split(/[^\d\w]+/g).filter(v => v);`

Screenshot:

![regular_8_img]


**Task #9**
-----------

Problem:
>Дано рядок тексту. Перевірити, чи містить він дату у форматі dd.mm.yyyy (dd- день, mm-
місяць, yyyy- рік).

Solution:

>`const doesIncludeDDMMYYYY = s => /[1-3][1-9].[01][012].\d{4}/.test(s);`

Screenshot:

![regular_9_img]


**Task #10**
-----------

Problem:
>Дано рядок тексту. Підрахувати кількість двоцифрових чисел у рядку.

Solution:

>`const countTwoDigitsNumber = s => (s.match(/\b\d{2}\b/g) || []).length;`

Screenshot:

![regular_10_img]

