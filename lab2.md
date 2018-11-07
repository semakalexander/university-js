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

>`const changeMaxToZero = (a, b) => a > b ? [0, b] : [a, 0];`

Screenshot:

![lab2_1_img]

**Task #1.1**
-----------

Problem:
>Найбільше серед двох замінити на 0. Якщо однакові, то замінити обидва на 1.

Solution:

```
const changeMaxToZero = (a, b) => {
  if (a > b) return [0, b];
  else if (b > a) return [a, 0];
  else return [1, 1];
}
```

Screenshot:

![lab2_1_1_img]