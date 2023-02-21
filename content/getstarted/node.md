---
title: Node
date: February 20, 2023
---

Node.js is a JavaScript run-time environment for developing command line tools and server-side applications outside the browser. See <https://nodejs.dev> or <https://nodejs.org> for more information. The recommended way to install Node.js is with the Node Version Manager (nvm). See the installation steps at <https://github.com/nvm-sh/nvm>.

Once Node.js is installed, a JavaScript file can be run from the command line as shown below:

```
node myexample.js
```

Running the node command without providing a file will start a Read-Evaluate-Print-Loop (REPL) session.

```
node
>
```

Enter some JavaScript code in the REPL to execute that code and see the output. For example, the JavaScript code shown below will print `hello there` to the terminal and show the return type as `undefined`.

```
node
> console.log('hello there')
hello there
undefined
```
