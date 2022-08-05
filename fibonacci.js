// iterative version
const fibs = (num) => {
  const sequence = [0, 1];
  if (num < 2) return sequence.slice(0, num + 1);

  while (num > 2) {
    const newNumber = sequence.at(-1) + sequence.at(-2)
    sequence.push(newNumber);
    num--;
  }
  return sequence;
}

// recursive version
const fibsRec = (num, sequence = [0, 1]) => {
  if (sequence.length >= num) {
    return sequence.slice(0, num + 1);
  }

  const newNumber = sequence.at(-1) + sequence.at(-2);
  sequence.push(newNumber);
  return fibsRec(num, sequence);
}

console.log(fibs(0)); // [0]
console.log(fibs(1)); // [0, 1]
console.log(fibs(8)); // [0, 1, 1, 2, 3, 5, 8, 13]


console.log(fibsRec(0)); // [0]
console.log(fibsRec(1)); // [0, 1]
console.log(fibsRec(8)); // [0, 1, 1, 2, 3, 5, 8, 13]
