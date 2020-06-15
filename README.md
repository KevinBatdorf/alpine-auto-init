# alpine-auto-init
A lightweight helper to auto call an init() method for Alpine.js

![GitHub file size in bytes](https://img.shields.io/github/size/kevinbatdorf/alpine-auto-init/dist/index.js?label=minified&style=flat-square)
![GitHub tag (latest by date)](https://img.shields.io/github/v/tag/kevinbatdorf/alpine-auto-init?label=version&style=flat-square)

## About

Use this for when you want to auto initialize your AlpineJS instances using an `init()` function. Perfect when you don't need to use state.

```html
<ul x-data="customBullets()">
  <li>One</li>
  <li>Two</li>
</ul>
```
```js
function customBullets() {
  return {
    init() {
      for (let item of this.$el.children) {
        // Change list items
      }
    }
  }
}
```
[Demo](https://codepen.io/KevinBatdorf/pen/wvMGoPz)

## Installation

Include the following `<script>` tag in the `<head>` of your document (before Alpine):

```html
<script src="https://cdn.jsdelivr.net/gh/KevinBatdorf/alpine-auto-init@0.x.x/dist/index.js"></script>
```

### Manual

If you wish to create your own bundle:

```bash
npm install KevinBatdorf/alpine-auto-init --save
```

Then add the following to your script:

```javascript
import 'alpine-auto-init'
import 'alpinejs'
```

## License

Copyright (c) 2020 Kevin Batdorf

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
