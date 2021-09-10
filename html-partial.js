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
