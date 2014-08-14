# jQuery Allowed Chars - simple plugin

[![Build Status][13]][14]
[![NPM version](https://img.shields.io/npm/v/jquery.allowed-chars.svg)](https://www.npmjs.org/package/jquery.allowed-chars)

jQuery plugin to restrict users for typing only allowed chars for specified element.

This library requires [jQuery][1] to be loaded.

## Setup

Include  jQuery library and the `jquery.allowed-chars.js` file.

```html
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script type="text/javascript" src="dist/jquery.allowed-chars.js"></script>
```

### Download plugin from jQuery Plugins

You can download jQuery Allowed Chars simple plugin from [jQuery Plugins][8] here:
[http://plugins.jquery.com/jquery.allowed-chars/][7]

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

### CDN

You can use [CDNJS][10] for this plugin on following link:
[http://www.cdnjs.com/libraries/jquery.allowed-chars][9]

## Usage Example

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

So, to restrict input values to integers for input with id `default` use:

```javascript
// by default plugin allows only numerical characters: 0123456789
$('#default').allowedChars();
```

For a custom allowed char list, pass the string with chars as parameter:

```javascript
// you can specify a different list of allowed characters,
// for example [a, B, 1, {space}, _]
// list is by default case sensitive
$('#custom').allowedChars('aB1 _');
```

You can also use a regular expression to restrict input values:

```javascript
// you can use regular expressions
// \d - only integers allowed
$('#regexp').allowedChars(/\d/);
```

You can also pass an object with options for plugin initialization:

```javascript
// you can pass object with options.
// For example, a list of allowed chars, without case sensitivity check
$('#full').allowedChars({
    allowed: 'AbsD',
    caseSensitive: false
});
```

Be aware that `caseSensitive` option does not affect work of plugin if you use regular expressions.

Here you can read more about regular expressions in javascript: 
* [http://www.w3schools.com/jsref/jsref_obj_regexp.asp][6]
* [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions][12]

### AngularJS Directive

If you using [AngularJS](https://angularjs.org/) in your project, you can write small Directive to use jQuery Allowed Chars plugin.

First load plugin:

```html
<script type="text/javascript" src="dist/jquery.allowed-chars.js"></script>
```

Then create your directive for jQuery Allowed Chars plugin:

```javascript
angular.module('exampleModule').directive('allowedChars', function(){
    return {
        restrict: 'A',
        link: function(scope, element) {
            // allow only digits and low case letters
            element.allowedChars(/[a-z]|[0-9]/);
        }
    };
});
```

Use new directive in your html element:

```html
Allow only digits and low case letters:
<input type='text' allowed-chars/>
```

More about Directives in [AngularJS](https://angularjs.org/) read following documentation: [https://docs.angularjs.org/guide/directive](https://docs.angularjs.org/guide/directive)

## Demo

You can run demo on [JSFiddle][3]: [http://jsfiddle.net/fosco/55XLd/][2]

## Copyright

Copyright (C) 2014 Pavlo Voznenko and other [contributors][11].

Distributed under the MIT License.

[1]: http://jquery.com/
[2]: http://jsfiddle.net/fosco/55XLd/
[3]: http://jsfiddle.net/
[4]: http://bower.io/
[5]: https://www.npmjs.org/
[6]: http://www.w3schools.com/jsref/jsref_obj_regexp.asp
[7]: http://plugins.jquery.com/jquery.allowed-chars/
[8]: http://plugins.jquery.com/
[9]: http://www.cdnjs.com/libraries/jquery.allowed-chars
[10]: http://www.cdnjs.com/
[11]: https://github.com/fosco-maestro/jquery-allowed-chars-simple-plugin/graphs/contributors
[12]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions
[13]: https://travis-ci.org/fosco-maestro/jquery-allowed-chars-simple-plugin.svg
[14]: https://travis-ci.org/fosco-maestro/jquery-allowed-chars-simple-plugin
