---
title: Modules
date: February 27, 2023
---

A module is a single JavaScript file where its variables and functions can be accessed from other JavaScript files. A local web server must be used to test modules in the browser; otherwise, opening the web page locally will not work.

The module shown below labels the `sayHello()` function with `export` so it can be accessed from other files.

```javascript
// sayhello.js

export function sayHello(name) {
    const s = `Hello there, ${name}`;
    return s;
}
```

Use `import` to access this function in another file as shown below.

```javascript
// main.js

import { sayHello } from './sayhello.js'

const nameElem = document.getElementById('name');
const greetingElem =document.getElementById('greeting');

function displayGreeting() {
    const name = nameElem.value;
    const greeting = sayHello(name);
    greetingElem.innerHTML = greeting;
}

document.addEventListener('submit', displayGreeting);
```

In an HTML document, the `script` attribute must utilize `type="module"`, so the browser will treat the script as a module.

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Example</title>
</head>
<body>

    <p>This example must be run with a local web server.</p>

    <form action="javascript:void(0);">
        <label>Enter name:
            <input id="name" type="text" value="Marge Simpson">
        </label>
        <input type="submit" value="Submit">
    </form>

    <p id="greeting"></p>

    <script type="module" src="main.js"></script>

</body>
</html>
```
