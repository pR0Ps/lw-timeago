lw-timeago
==========

A lightweight implementation of the [Timeago jQuery plugin](http://timeago.yarp.com/), allowing fuzzy timestamps to be dynamically generated and displayed.

Example
-------
Original:
```
<time datetime="2012-02-11T22:05:00-05:00">Feb 11, 2012</time>
```

Output:
```
<time title="Feb 11, 2012" datetime="2012-02-11T22:05:00-05:00">about 3 years ago</time>
```

Usage
-----
Include the `lw-timeago.js` file in the html head (`<script src="lw-timeago.js" type="text/javascript"></script>`)

Markup times in the HTML source with `<time>` tags, making sure they have a `datetime` attribute. The datetime attribute *MUST* be ISO 8601 formatted.

Just before the closing `<body>` tag, add `<script type="text/javascript">lw_timeago.doReplace()</script>`

The text can all be customized if needed, look at the `config` section of the script.


License
-------
```
Copyright (c) 2008-2015, Ryan McGeary
Copyright (c) 2015 Carey Metcalfe

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```
