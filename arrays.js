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

const task2 = input => {
  const amount = input.reduce((o, v) => ({ ...o, [v]: o[v] ? o[v] + 1 : 1 }), {});
  return amount;
}