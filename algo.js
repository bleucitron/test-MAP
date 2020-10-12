const inputs = [
  '1,0,0,0,99',
  '2,3,0,3,99',
  '2,4,4,5,99,0',
  '1,1,1,4,99,5,6,0,99',
  '1,12,2,3,1,1,2,3,1,3,4,3,1,5,0,3,2,13,1,19,1,5,19,23,2,10,23,27,1,27,5,31,2,9,31,35,1,35,5,39,2,6,39,43,1,43,5,47,2,47,10,51,2,51,6,55,1,5,55,59,2,10,59,63,1,63,6,67,2,67,6,71,1,71,5,75,1,13,75,79,1,6,79,83,2,83,13,87,1,87,6,91,1,10,91,95,1,95,9,99,2,99,13,103,1,103,6,107,2,107,6,111,1,111,2,115,1,115,13,0,99,2,0,14,0',
];

const numbers = inputs.map(i => i.split(',').map(a => parseInt(a)));

const array = numbers[4];

console.log('EXO 2');

function run(a) {
  const array = [...a];

  let i = 0;
  while (array[i] !== 99) {
    const first = array[i];
    const a = array[i + 1];
    const b = array[i + 2];
    const c = array[i + 3];

    if (first === 1) {
      const res = array[a] + array[b];
      array[c] = res;
    } else if (first === 2) {
      const res = array[a] * array[b];
      array[c] = res;
    }

    i += 4;
  }

  return array[0];
}

console.log('Result', run(array));

console.log('EXO 3');

const expected = 19690720;
let value;

for (let a = 0; a < 100; a++) {
  for (let b = 0; b < 100; b++) {
    array[1] = a;
    array[2] = b;
    value = run(array);
    if (value === expected) {
      console.log('Result:', a * 100 + b, `A: ${a}, B: ${b}`);
      break;
    }
  }
  if (value === expected) {
    break;
  }
}
