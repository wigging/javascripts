// A basic fizzbuzz example.

const numIterations = 40;

for (let i = 1; i < numIterations; i++) {
  if (i % 15 == 0) {
    result = 'FizzBuzz';
  } else if (i % 5 == 0) {
    result = 'Buzz';
  } else if (i % 3 == 0) {
    result = 'Fizz';
  } else {
    result = i;
  }

  const s = i.toString().padStart(2, ' ');
  console.log(`${s} ${result}`);
}
