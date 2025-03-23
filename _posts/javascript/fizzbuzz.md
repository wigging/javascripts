---
title: Fizz buzz
date: March 18, 2023
---

This is a typical fizz buzz example written in JavaScript that runs in a web page. The input defines the number of iterations. A number divisible by 3 displays the word "Fizz", a number divisible by 5 displays "Buzz", and a number divisible by both 3 and 5 displays "Fizz Buzz".

<img src="../images/fizzbuzz.png" style="max-width:400px;" alt="fizz buzz">

```html
<!-- fizzbuzz.html -->

<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Fizz Buzz Example</title>
    <style>
        body {
            background-color: lightgrey;
            margin: 40px auto;
            max-width: 800px;
        }
    </style>
</head>
<body>

    <label>
        <b>Number of iterations:</b>
        <input id="numIterations" type="number" value="5" min="2">
    </label>

    <table id="mytable"></table>

    <script>

        function run() {
            const numIterations = document.getElementById('numIterations').value;
            const tableElem = document.getElementById('mytable');
            tableElem.innerHTML = '';

            for (let i = 1; i <= numIterations; i++) {
                if (i % 15 == 0) {
                    result = 'Fizz Buzz';
                }
                else if (i % 5 == 0) {
                    result = 'Buzz';
                }
                else if (i % 3 == 0) {
                    result = 'Fizz';
                }
                else {
                    result = i ;
                }

                const rowElem = document.createElement('tr');
                rowElem.innerHTML = `<td>${i}&emsp;</td><td>${result}</td>`
                tableElem.appendChild(rowElem);
            }
        }

        window.addEventListener('load', run);
        document.addEventListener('input', run);
    </script>

</body>
</html>
```

Here is another fizz buzz example that is just JavaScript (no web page) and can be run using the node command shown below. Output from running this example is also shown.

```javascript
// fizzbuzz.js

const numIterations = 40;

for (let i = 1; i <= numIterations; i++) {
  if (i % 15 == 0) {
    result = 'Fizz Buzz';
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
```

```
$ node fizzbuzz.js

 1 1
 2 2
 3 Fizz
 4 4
 5 Buzz
 6 Fizz
 7 7
 8 8
 9 Fizz
10 Buzz
11 11
12 Fizz
13 13
14 14
15 Fizz Buzz
16 16
17 17
18 Fizz
19 19
20 Buzz
21 Fizz
22 22
23 23
24 Fizz
25 Buzz
26 26
27 Fizz
28 28
29 29
30 Fizz Buzz
31 31
32 32
33 Fizz
34 34
35 Buzz
36 Fizz
37 37
38 38
39 Fizz
40 Buzz
```
