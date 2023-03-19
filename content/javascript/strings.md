---
title: Strings
date: March 19, 2023
---

A string in JavaScript is represented by single or double quotes.

```javascript
const car = 'Ford Ranger';
const name = "Homer Simpson";
```

Backtick quotes can embed variables and expressions into the string. In the example below, the `name` variable is embedded into the `sayit` string.

```javascript
const name = "John Rambo";
const sayit = `Happy birthday ${name}`;
console.log(sayit);

// This prints the following to the console:
// Happy birthday John Rambo
```
