class Single_Page_Application {

  constructor() {
    this.page = {},
    this.component = {},
    // this.holdBuild = false,
    // this.rebuildAll = false,
    this.builtCss = []
  }

  start() {
    const spaBody = document.createElement('div')
    spaBody.id = 'spaBody'
    document.body.appendChild(spaBody)
  }

  setPage(page, onload)  {
    // this.holdBuild = true
    this.currentPage = page
    window.location.hash = '#'+page
    if (onload) spa.page[page]({id: page})

    // const spaBody = document.getElementById('spaBody')
    // if (full) {
    //   while (spaBody.hasChildNodes()) {
    //     spaBody.removeChild(spaBody.lastChild)
    //   }
    //   // this.rebuildAll = true
    // } else {
    //   // this.rebuildAll = false
    //   const activePage = document.getElementById('activePage')
    //   if (activePage) {
    //     while (activePage.hasChildNodes()) {
    //       activePage.removeChild(activePage.lastChild)
    //     }
    //   }
    // }
    // spa.page[page]({id: page})
    // spa.holdBuild = false

    // this.rebuildAll = false

    // window.scrollTo(0,0) // 👈 resets page scroll bar to the top of the page.
  }

  buildPage(params) {
    console.log("page :", params)
    const spaBody = document.getElementById('spaBody')
    if (params.fullPage) {
      while (spaBody.hasChildNodes()) {
        spaBody.removeChild(spaBody.lastChild)
      }
      // this.rebuildAll = true
    } else {
      // this.rebuildAll = false
      const activePage = document.getElementById('activePage')
      if (activePage) {
        while (activePage.hasChildNodes()) {
          activePage.removeChild(activePage.lastChild)
        }
      }
    }

    let activePage = document.getElementById("activePage")
    // console.log(params, this.rebuildAll);
    // if (this.rebuildAll && activePage) {
    if (activePage) {
      const spaBody = document.getElementById('spaBody')
      spaBody.removeChild(activePage)
      // this.rebuildAll = false
      activePage = false
    }
    if (!activePage) {
      activePage = document.createElement('div')
      activePage.id = 'activePage'
      params.className = 'spa-css-'+params.id
      activePage.classList.add(params.className)
      const spaBody = document.getElementById('spaBody')
      spaBody.appendChild(activePage)
      this.addCss(params)
      this.builtCss.push(params.id)
      this.previousCss = params.id
    }

// AHH! this needs to be condensed. BOTH ^ & v
    if (!this.builtCss.includes(params.id)) {
      params.className = 'spa-css-'+params.id
      activePage.classList.add(params.className)
      activePage.classList.remove('spa-css-'+this.previousCss)
      this.addCss(params)
      this.builtCss.push(params.id)
      this.previousCss = params.id
    } else if (this.previousCss !== params.id) {
      params.className = 'spa-css-'+params.id
      activePage.classList.add(params.className)
      activePage.classList.remove('spa-css-'+this.previousCss)
      this.previousCss = params.id
    }



    return activePage
  }

  buildComponent(params) {
    // console.log("component :", params)
    // console.log(params, this.rebuildAll);
    // if (params.preserve && document.getElementById(params.id) && this.rebuildAll === false) {
    if (params.preserve && document.getElementById(params.id)) {
      return false
    } else {
      const spaBody = document.getElementById('spaBody')
      const component = document.createElement('div')
      if (params.preserve) component.id = params.id
      params.className = 'spa-css-'+params.id
      component.classList.add(params.className)
      spaBody.appendChild(component)
      this.addCss(params)
      return component
    }
  }

  addCss(params) {
    if (!this.builtCss.includes(params.id)) {
      let styles = document.styleSheets
      // let addCssSheet = true
      // console.log('styles: ', styles);
      // for (const s in styles) {
      //   if (styles[s].ownerNode && styles[s].ownerNode.id && styles[s].ownerNode.id !== params.id) {
      //     console.log('remove', styles[s].ownerNode.id);
      //     styles[s].disabled = true;
      //
      //   }
      //   if (styles[s].ownerNode && styles[s].ownerNode.id === params.id) {
      //     console.log('add', styles[s].ownerNode.id);
      //     addCssSheet = false
      //     styles[s].disabled = false;
      //   }
      // }
      console.log(' * * * * * * addCss! * * * * * ', params);
      //if (addCssSheet) {
        // console.log('build', params.id)
      var sheetToAdd = document.createElement('link')
      sheetToAdd.setAttribute('rel', 'stylesheet')
      // const append = params.preserve ? "component-"+params.id : params.id
      // const append = params.id

      sheetToAdd.setAttribute('id', 'style-'+params.id)
      sheetToAdd.setAttribute('type', 'text/css')
      sheetToAdd.setAttribute('href', 'css/'+params.id+'.css')
      document.getElementsByTagName('head')[0].appendChild(sheetToAdd)

      const img = document.createElement("img")
      img.onerror = function() {
       document.body.removeChild(img);
       spa.localizeCssSheet(params)
      }
      document.body.appendChild(img)
      img.src = 'css/'+params.id+'.css'
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
    // console.log('- - - -',sheet.ownerNode.id);
    const len = sheet.cssRules.length
    for (var i = 0; i < len; i++) {
      // console.log('top: ',sheet.cssRules[i]);
      const rule = sheet.cssRules[i].cssText
      sheet.deleteRule(i)
      sheet.insertRule('.'+params.className+' '+rule, i);
      // console.log('bot: ',sheet.cssRules[i]);
    }
  }

}
