class Single_Page_Application {

  constructor() {
    this.page = {},
    this.component = {},
    this.builtCss = [],
    this.wasFullPage = true
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
    const params = {
      id: page,
      parent: ".spa-css-"+page
    }
    if (onload) spa.page[page](params)
  }

  hashChange(event) {
    const page = window.location.hash.split('#')[1]
    if (window.location.hash !== '#'+this.currentPage) {
      this.currentPage = window.location.hash.split('#')[1]
    }
    if (!this.onload) {
      const params = {
        id: page,
        parent: ".spa-css-"+this.currentPage
      }
      this.page[this.currentPage](params)
    }
    this.onload = false
  }

  buildPage(params) {
    console.log(params);
    // let activePage
    const spaBody = document.getElementById('spaBody')
    if (params.fullPage) {
      this.wasFullPage = true
      while (spaBody.hasChildNodes()) {
        spaBody.removeChild(spaBody.lastChild)
      }
    }
    // else if (!this.wasFullPage) {
    //   console.log("----%%% } else if (!this.wasFullPage) {");
    //
    //   activePage = document.getElementById('activePage')
    //   this.wipe(activePage)
    //   // this.wipe(document.getElementById('activeFullPage'))
    //
    //   this.classSwap(params, activePage)
    //   this.addCss(params, 'pages')
    //   return activePage
    // }
    //else
    if (document.getElementById('activePage')) {
      // this.wipe(document.getElementById('activeFullPage'))
      // activePage = document.getElementById('activePage')
      // spaBody.removeChild(activePage)
      spaBody.removeChild(document.getElementById('activePage'))

    }
    // activePage = document.getElementById('activePage')
    // activePage.id = 'removeMe'
    // this.wipe(document.getElementById('removeMe'))

    // if (!params.fullPage) this.wasFullPage = false
    // activePage = document.getElementById('activePage')
    // if (activePage) {
    //   spaBody.removeChild(document.getElementById('activePage'))
    // }

    const activePage = document.createElement('div')
    // activePage.id = params.fullPage ? 'activeFullPage' : 'activePage'
    activePage.id = 'activePage'
    // spaBody = document.getElementById('spaBody')
    spaBody.appendChild(activePage)


    if (!params.fullPage) this.wasFullPage = false



    // if (params.fullPage) {
    //   this.wasFullPage = true
    //   while (spaBody.hasChildNodes()) {
    //     spaBody.removeChild(spaBody.lastChild)
    //   }
    // } else {
    //   activePage = document.getElementById('activePage')
    //   if (activePage) {
    //     while (activePage.hasChildNodes()) {
    //       activePage.removeChild(activePage.lastChild)
    //     }
    //   }
    //   console.log(activePage);
    // }
    // // let activePage = document.getElementById("activePage")
    // // console.log('?',activePage);
    // // console.log(params.fullPage, this.wasFullPage);
    // if (!document.getElementById("activePage")) {
    //   // if (!params.fullPage) this.wasFullPage = false
    //   console.log('--');
    //   activePage = document.createElement('div')
    //   activePage.id = 'activePage'
    //   const spaBody = document.getElementById('spaBody')
    //   spaBody.appendChild(activePage)
    // }


    this.classSwap(params, activePage)
    this.addCss(params, 'pages')

    // 🚨This push adds it when it's not needed....
    this.builtCss.push(params.id)
    return activePage
  }

  wipe(page) {
    if (page) {
      while (page.hasChildNodes()) {
        page.removeChild(page.lastChild)
      }
    }
  }

  buildComponent(params) {
    params.parent = '.spa-css-'+params.id
    if (params.preserve && document.getElementById(params.id)) {
      console.log('dont build');
      return false
    } else {
      const spaBody = document.getElementById('spaBody')
      const component = document.createElement('div')
      if (params.preserve) component.id = params.id
      params.className = 'spa-css-'+params.id
      component.classList.add(params.className)
      console.log(component);
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

  localizeCssSheet(params, dir) {
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
