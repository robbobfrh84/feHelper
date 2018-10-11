class Single_Page_Application {

  constructor() {
    this.page = {},
    this.component = {},
    this.holdBuild = false,
    this.preserveName = []
  }

  start() {
    const spaBody = document.createElement('div')
    spaBody.id = 'spaBody'
    document.body.appendChild(spaBody)
  }

  setPage(page, full)  {
    this.holdBuild = true
    window.location.hash = '#'+page
    const spaBody = document.getElementById('spaBody')
    if (full) {
      while (spaBody.hasChildNodes()) {
        spaBody.removeChild(spaBody.lastChild)
      }
      this.rebuildAll = true
    } else {
      const activePage = document.getElementById('activePage')
      if (activePage) {
        while (activePage.hasChildNodes()) {
          activePage.removeChild(activePage.lastChild)
        }
      }
    }
    spa.page[page]({id: page})
    // window.scrollTo(0,0) // 👈 resets page scroll bar to the top of the page.
  }

  buildPage(params) {

    let activePage = document.getElementById("activePage")
    if (this.rebuildAll && activePage) {
      const spaBody = document.getElementById('spaBody')
      spaBody.removeChild(activePage)
      this.rebuildAll = false
      activePage = false
    }
    if (!activePage) {
      activePage = document.createElement('div')
      activePage.id = 'activePage'
      const spaBody = document.getElementById('spaBody')
      spaBody.appendChild(activePage)
    }
    this.addCss(params)

    return activePage
  }

  buildComponent(params) {

    if (params.preserve && document.getElementById(params.id)) {

      // this.addCss(params)

      return false
    } else {
      const spaBody = document.getElementById('spaBody')
      const component = document.createElement('div')
      if (params.preserve) component.id = params.id
      spaBody.appendChild(component)

      // this.addCss(params)

      return component
    }
  }

  addCss(params) { // 🚨don't use ELM????
    let styles = document.styleSheets
    let addCssSheet = true
    console.log('styles: ', styles);
    for (const s in styles) {
      if (styles[s].ownerNode && styles[s].ownerNode.id && styles[s].ownerNode.id !== params.id) {
        console.log('remove', styles[s].ownerNode.id);

        // console.log('-',params.id.split('component-'));

        styles[s].disabled = true;

      }
      if (styles[s].ownerNode && styles[s].ownerNode.id === params.id) {
        console.log('add');
        addCssSheet = false
        styles[s].disabled = false;

      }
    }
    if (addCssSheet) {
      console.log('build', params.id);
      var link = document.createElement('link');
      link.setAttribute('rel', 'stylesheet');
      const append = params.preserve ? "component-"+params.id : params.id
      link.setAttribute('id', append);
      link.setAttribute('type', 'text/css');
      link.setAttribute('href', 'css/'+params.id+'.css');
      document.getElementsByTagName('head')[0].appendChild(link);
    }
    // needs to  be  applied to elm, NOT
    // 👆make own method

  }



}
