# html-partial

Until there are proper HTML Includes you can do it the wrong way.  This component will fetch the targeted file and inject it as a string into the divs inner HTML.

You shouldn't use this in production. 

## Usage

Include the html-partial.js file, then you can use it like so: 

```html
<html-partial src="html-url"></html-partial>
```
or: 

```html
<html-partial src="html-url" shadowdom></html-partial>
```
This partial will then fetch the targeted file and inject it as a string into the divs inner HTML. 


This is the code:
```javascript

class HTMLPartial extends HTMLElement {

 connectedCallback(){
   this.shadowdom = this.getAttribute('shadowdom')
   this.src = this.getAttribute('src')
   if(this.src === null){
      this.innerHTML = '<error>HTML PARTIAL REQUIRES SOURCE</error>'
   }
   fetch(this.src)
    .then(res => res.text())
    .then(res => {
      if(this.shadowdom){
        this.shadow = this.attachShadow({mode: 'open'})
        this.shadow.innerHTML = res
      } else {
        this.innerHTML = res
      }
    })
  }
}

customElements.define('html-partial', HTMLPartial)
```
