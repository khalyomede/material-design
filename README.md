# material-design

JavaScript & CSS implementation of the Material Design using Web Components

## Installation

### For The Web

First, create a folder for your new project. Let's call it `my-app`.

```console
$ mkdir my-app
$ cd my-app
```

Then, we'll download a copy of the [`material-design.js`](./dist/material-design.js) file which contains all our components.

```console
$ curl -O https://raw.githubusercontent.com/aminnairi/material-design/master/dist/material-design.js
```

You can move the downloaded file wherever you want if you need some organization.

```console
$ mkdir js
$ mv material-design.js js
```

Now we can create our first page.

```console
$ touch index.html
$ vim index.html
```

Note that we used `vim` here. Replace `vim` with you favorite text editor's CLI command start-up. We can now add some content to our first page.

```html
<!DOCTYPE html>
<html lang='en-US'>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device=width, initial-scale=1.0'>
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
    <title>My First Page</title>
  </head>
  <body>
    <!-- You components... -->
    <script src='./js/material-design.js'></script>
  </body>
</html>
```

### For Bundlers

If you are using Webpack, Rollup, or any similar tools, this section is for you! First, create your new project. Let's call it `my-app`.

```console
$ mkdir my-app
$ cd my-app
```

Then, we need to fetch the package. As there is no package pushed to the NPM registry yet, you can use the GitHub repository as replacement.

```console
$ npm install aminnairi/material-design
```

Now, we need to create our first script.

```console
$ mkdir src
$ touch src/index.js
$ vim src/index.js
```

Note that we used `vim` here. Replace `vim` with you favorite text editor's CLI command start-up. We can now add some content to our first script.

```javascript
'use strict';

import '@aminnairi/material-design';
```

Note that we used the modern ECMAScript Modules syntax for importing our package. But you are free to use the old CommonJS syntax as well.

```javascript
'use strict';

require('@aminnairi/material-design');
```

We also need our first page to render the components.

```console
$ touch src/index.html
$ vim src/index.html
```

Now that our first page is created, let's reference our bundled script to it.

```html
<!DOCTYPE html>
<html lang='en-US'>
  <head>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device=width, initial-scale=1.0'>
    <link rel='stylesheet' href='https://fonts.googleapis.com/icon?family=Material+Icons'>
    <link rel='stylesheet' href='https://fonts.googleapis.com/css?family=Roboto'>
    <title>My First Page</title>
  </head>
  <body>
    <!-- You components... -->
    <script src='./js/bundle.js'></script>
  </body>
</html>
```

## Components

### Chip

```html
<material-chip>JavaScript</material-chip>
```

### Input

```html
<material-input></material-input>
<material-input legend='Email'></material-input>
```

### Icon

```html
<material-icon>home</material-icon>
<material-icon color='#000'>face</material-icon>
<material-icon color='#000000'>person</material-icon>
<material-icon color='black'>business</material-icon>
```

Notes:
- The `color` attribute can take any [valid colors CSS colors definition](https://developer.mozilla.org/fr/docs/Web/CSS/color).
- The content of the `<material-icon>` tag can take any [valid Material Icon](https://material.io/tools/icons/).

## Developers Documentation

See the [Wiki](./wiki).