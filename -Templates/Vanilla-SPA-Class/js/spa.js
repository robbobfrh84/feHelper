class SPA {

  constructor() {
    this._body = document.getElementById('spaBody')
    this._render = []
    this._data = {}
  }

  _start({landingPage}) {
    this._landingPage = landingPage
    this._currentPage = landingPage
    window.addEventListener("hashchange", ()=>{
      if (window.location.hash.split("#")[1] !== this._currentPage) {
        this._go(window.location.hash.split("#")[1])
      }
    })
    this._go()
  }

  _go(page) {
    this._currentPage = page || this._currentPage
    this._body.innerHTML = this._component(this._currentPage)
    this._render_components()
    window.location.hash = this._currentPage
  }

  _component(comp) {
    this._render.unshift(comp)
    this[comp].spa = this
    return `<comp-${comp}>${this[comp].html.apply(this[comp])}</comp-${comp}>`
  }

  _update(data) {
    for (const key in data) {
      this._data[key] = data[key]
    }
    this._go()
  }

  _render_components() {
    while (this._render.length > 0) {
      const comp = this._render.shift()
      const elm = document.getElementsByTagName("comp-"+comp)[0]
      this._thisClick(comp, elm, 'thisClick')
    }
    this._spaPage('spaPage')
  }

  _spaPage(attr) {
    document.querySelectorAll('['+attr+']').forEach((elm)=>{
      const str = elm.getAttribute(attr).split(/\(|\)|'|"| |,/).filter(i=>i)
      elm.addEventListener('click', ()=> window.location.hash = str )
    })
  }

  _thisClick(comp, elms, listener){
    elms.querySelectorAll('['+listener+']').forEach((elm)=>{
      const str = elm.getAttribute(listener).split(/\(|\)|'|"| |,/).filter(i=>i)
      const func = str.shift()
      elm.addEventListener('click', ()=>{
        try { this[comp][func].apply(this[comp], this._args(str)) }
        catch(err) {
          if (err.message !== "Cannot read property 'apply' of undefined"){throw(err)}
        }
      })
    })
  }

  _args(str){
    return str.map(arg=>{
      if (arg === "false") arg = false
      else if(arg === "true") arg = true
      return parseInt(arg) || arg.toString()
    })
  }
}
