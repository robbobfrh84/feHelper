class Single_Page_Application {

  constructor() {
    this.page = {},
    this.component = {},
    this.builtCss = []
  }

  start(params) {
    const spaBody = document.createElement('div')
    spaBody.id = 'spaBody'
    document.body.appendChild(spaBody)
    this.onload = true
    let setPage = window.location.hash
    setPage = setPage.split('#')[1]
    window.location.hash = ''
    setPage ? this.setPage(setPage) : this.setPage(params.landingPage, true)
  }

  setPage(page, onload)  {
    this.currentPage = page
    window.location.hash = '#'+page
    if (onload) spa.page[page]({id: page})
  }

  hashChange(event) {
    const page = window.location.hash.split('#')[1]
    if (window.location.hash !== '#'+this.currentPage) {
      this.currentPage = window.location.hash.split('#')[1]
    }
    if (!this.onload) {
      this.page[this.currentPage]({id: this.currentPage})
    }
    this.onload = false
  }

  buildPage(params) {
    const spaBody = document.getElementById('spaBody')
    if (params.fullPage) {
      while (spaBody.hasChildNodes()) {
        spaBody.removeChild(spaBody.lastChild)
      }
    } else {
      const activePage = document.getElementById('activePage')
      if (activePage) {
        while (activePage.hasChildNodes()) {
          activePage.removeChild(activePage.lastChild)
        }
      }
    }
    let activePage = document.getElementById("activePage")
    if (activePage) {
      const spaBody = document.getElementById('spaBody')
      spaBody.removeChild(activePage)
      activePage = false
    }
    if (!activePage) {
      activePage = document.createElement('div')
      activePage.id = 'activePage'
      this.classSwap(params,activePage)
      const spaBody = document.getElementById('spaBody')
      spaBody.appendChild(activePage)
      this.addCss(params, 'pages')
      this.builtCss.push(params.id)
    }
    if (!this.builtCss.includes(params.id)) {
      this.addCss(params)
      this.builtCss.push(params.id)
      this.classSwap(params,activePage)
    } else if (this.previousCss !== params.id) {
      this.classSwap(params,activePage)
    }
    return activePage
  }

  buildComponent(params) {
    if (params.preserve && document.getElementById(params.id)) {
      return false
    } else {
      const spaBody = document.getElementById('spaBody')
      const component = document.createElement('div')
      if (params.preserve) component.id = params.id
      params.className = 'spa-css-'+params.id
      component.classList.add(params.className)
      spaBody.appendChild(component)
      this.addCss(params, 'components')
      return component
    }
  }

  addCss(params, dir) {

    if (!this.builtCss.includes(params.id)) {
      let styles = document.styleSheets
      const sheetToAdd = document.createElement('link')
      sheetToAdd.setAttribute('rel', 'stylesheet')
      sheetToAdd.setAttribute('id', 'style-'+params.id)
      sheetToAdd.setAttribute('type', 'text/css')
      sheetToAdd.setAttribute('href', dir+'/'+params.id+'/'+params.id+'.css')
      document.getElementsByTagName('head')[0].appendChild(sheetToAdd)
      const img = document.createElement("img")
      img.onerror = function() {
       document.body.removeChild(img);
       spa.localizeCssSheet(params)
      }
      document.body.appendChild(img)
      img.src = dir+'/'+params.id+'/'+params.id+'.css'
      this.builtCss.push(params.id)
    }
  }

  localizeCssSheet(params) {
    let sheet;
    for (const i in document.styleSheets) {
      const s = document.styleSheets[i]
      if (s.ownerNode && s.ownerNode.id === 'style-'+params.id) {
        sheet = document.styleSheets[i]
      }
    }
    const len = sheet.cssRules.length
    for (var i = 0; i < len; i++) {
      const rule = sheet.cssRules[i].cssText
      sheet.deleteRule(i)
      sheet.insertRule('.'+params.className+' '+rule, i);
    }
  }

  classSwap(params, activePage) {
    params.className = 'spa-css-'+params.id
    activePage.classList.add(params.className)
    activePage.classList.remove('spa-css-'+this.previousCss)
    this.previousCss = params.id
  }

}
