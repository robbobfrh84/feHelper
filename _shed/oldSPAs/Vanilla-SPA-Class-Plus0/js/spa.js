class Single_Page_Application {

  constructor() {
    this.page = {},
    this.component = {},
    this.rebuildPage = true
  }

  start(params) {
    this.newDiv(document.body, 'spaBody')
    this.newDiv(document.body, 'spaFullBody')
    this.landingPage = params.landingPage
    this.currentPage = window.location.hash.split('#')[1] || this.landingPage
    this.setPage(this.currentPage)
  }

  setPage(page)  {
    this.currentPage = page
    if (page === this.landingPage) history.pushState(null, null, " ")
    else window.location.hash = '#'+page
    this.page[page]({ id: page, parent: ".spa-css-"+page })
  }

  hashChange(event) {
    let page = window.location.hash.split('#')[1] || this.landingPage
    if (page !== this.currentPage) {
      this.currentPage = page
      this.page[page]({ id: page, parent: ".spa-css-"+page })
    }
  }

  buildPage(params) {
    console.log('buildpage')
    const sfullB = document.getElementById('spaFullBody')
    const sBody = document.getElementById('spaBody')
    // if (params.fullPage) {
    //   while (sfullB.hasChildNodes()) { sfullB.removeChild(sfullB.lastChild) }
    //   return this.setSwapPage(params, spaFullBody)
    // } else {
      let ap = document.getElementById('activePage')
      if (ap) { while (ap.hasChildNodes()) { ap.removeChild(ap.lastChild) } }
      else { ap = this.newDiv(sBody, 'activePage') }
      // console.log(ap)
      // return this.setSwapPage(params, ap)
      return ap

    // }
  }

  setSwapPage(params, page) {
    // this.classSwap(params, page)
    // spaFullBody.style.display = params.fullPage ? '' : 'none'
    // spaBody.style.display = params.fullPage ? 'none' : ''
    return page
  }

  buildComponent(params) {
    // params.parent = '.spa-css-'+params.id
    // if (params.preserve && document.getElementById(params.id)) {
    //   return false
    // } else {
      const spaBody = document.getElementById('spaBody')
      const component = document.createElement('div')
      if (params.preserve) component.id = params.id
      // params.className = 'spa-css-'+params.id
      // component.classList.add(params.className)
      spaBody.appendChild(component)
      return component
    // }
  }

  // classSwap(params, activePage) {
  //   params.className = 'spa-css-'+params.id
  //   activePage.classList.add(params.className)
  //   activePage.classList.remove('spa-css-'+this.previousCss)
  //   this.previousCss = params.id
  // }

  newDiv(parent, id) {
    const newElm = document.createElement('div')
    newElm.id = id
    parent.appendChild(newElm)
    return newElm
  }

}
