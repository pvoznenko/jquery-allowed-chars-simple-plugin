jQuery Allowed Chars - simple plugin
====================================

jQuery plugin to restrict users for typing only allowed chars for specified element.

Library require [jQuery][1] been loaded.

Setup
-----

Include the jQuery library and the `jquery.allowed-chars.js` file.

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="dist/jquery.allowed-chars.js"></script>
```

### Install with Bower

Install and manage jQuery Allowed Chars simple plugin using [Bower][4].

```
$ bower install jquery.allowed-chars
```

### Install with NPM

Install and manage jQuery Allowed Chars simple plugin using [NPM][5].

```
$ npm install jquery.allowed-chars
```

Usage Example
-------------

In our HTML code we have 4 inputs:

```html
Only integer chars [0123456789]: 
<input type='text' id="default"/>

Custom chars [a, B, 1, {space}, _]: 
<input type='text' id="custom"/>

RegExp [/\d/] -- only integers: 
<input type='text' id="regexp" />

Custom chars [A, b, s, D] not case sensitive, full options: 
<input type='text' id="full" />
```

So, to strict input valuables to use only integer for input with id `default` use following:

```js
// by default plugin allows only integer chars: 0123456789
$('#default').allowedChars();
```

For customized allowed char list, pass string with chars as parameter:

```js
// you can specified another list of chars that allowed,
// for example [a, B, 1, {space}, _]
// list is case sensitive
$('#custom').allowedChars('aB1 _');
```

You can use regular expression to strict input valuables:

```js
// you can use regular expression
// \d - only integers allowed
$('#regexp').allowedChars(/\d/);
```

Also you can specified object with options for plugin:

```js
// you can send object with options.
// For example list of allowed chars and make check not case sensitive
$('#full').allowedChars({
    allowed: 'AbsD',
    caseSensitive: false
});
```

Be aware that option `caseSensitive` is not affecting work of plugin if you using regular expression.

On following link you can read more about regular expressions in javascript: [http://www.w3schools.com/jsref/jsref_obj_regexp.asp][6]

Demo
----

You can run demo on [JSFiddle][3]: [http://jsfiddle.net/fosco/55XLd/][2]

[1]: http://jquery.com/
[2]: http://jsfiddle.net/fosco/55XLd/
[3]: http://jsfiddle.net/
[4]: http://bower.io/
[5]: https://www.npmjs.org/
[6]: http://www.w3schools.com/jsref/jsref_obj_regexp.asp
