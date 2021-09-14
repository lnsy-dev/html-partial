# html-partial
Until there are proper HTML Includes you can do it the wrong way. People who complain about how many calls this makes are never allowed to install tracking scripts on a website.

## Usage

Include the html-partial.js file, then you can use it like so: 

```html
<html-partial src="html-url"></html-partial>
```
or: 

```html
<html-partial src="html-url" shadowroot></html-partial>
```
This partial will then fetch the targeted file and inject it as a string into the divs inner HTML. 

Read the code. 

Careful: It's like cigarettes once you use it. 
