

    
    


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
  
  static get observedAttributes() {
    // an array of attribute names you want to watch for this component
    return ['title'];
  }
  /*
    what to do when an attribute has changed
    name is the attribute name that has changed
    old_value is the old name of the attribute
    new_value is the new name of the attribute

    To change update this element, access it like any other
    HTML element and use setAttribute() to make changes.
    an example:
    document.querySelector('custom-element').setAttribute('message', 'Hello World')
  */
  attributeChangedCallback(name, old_value, new_value){
    if(name  === 'title'){
      this.title = new_value
      this.innerHTML = `<h1>${this.title}</h1>`
    }
  }

  disconnectedCallback() {
    console.log('Custom square element removed from page.')
  }
  adoptedCallback() {
    console.log('Custom square element moved to new page.')
  }
}

/*
  this component can be placed in the document using the notation
  <custom-element title="element name here"></custom-element>
  to change the name of the element in the dom, change the 
  value in the quotation marks. 
*/

customElements.define('html-partial', HTMLPartial)
