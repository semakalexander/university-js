const withNumbers = s => /\d/.test(s);

['yes', 'no', 'twenty', 'v2.0', '1 beer, please'].filter(withNumbers);
['yes', 'no', 'twenty', 'v2.0', '1 beer, please'].filter(v => !withNumbers(v));

const withVowels = s => /(а|о|е|і|и|у)/.test(s);

['вкл', 'викл'].filter(withVowels);
['вкл', 'викл'].filter(v => !withVowels(v));

const with1or3 = s => /(1|3)/.test(s);

['88 years', 'sweet 17', 'in 3 cases', 'one'].filter(with1or3);

const getAllDigits = s => s.match(/(?\D)/g) || [];

['I have no digits', 'I have 1 digit', 'call 911 and press 1'].map(getAllDigits);

const getAllPunctuationMarks = s => [...new Set(s.match(/[^\d\w]/g))];
['IHatePunctuations', '1,2 or 3.', 'Why? Just ask — and I will do it!'].map(getAllPunctuationMarks);

const getAllParts = s => s.split(/[^\d\w]+/g).filter(v => v);

['name;age;', 'hello, kitty!', 'go away', 'no? yes!'].map(getAllParts);

const doesIncludeDDMMYYYY = s => /[1-3][1-9].[01][012].\d{4}/.test(s);

['22 of July', '12.12.12', '13.99.1999', '25.10.2018'].map(doesIncludeDDMMYYYY);

const countTwoDigitsNumber = s => (s.match(/\b\d{2}\b/g) || []).length;

['22.12.1997', '1234 567 89', '11', ''].map(countTwoDigitsNumber);
