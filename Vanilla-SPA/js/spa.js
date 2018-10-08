class Single_Page_Application {

  constructor() {
    this.page = {},
    this.component = {},
    this.holdBuild = false
  }

  start() {
    const spaBody = document.createElement('div')
    spaBody.id = 'spaBody'
    document.body.appendChild(spaBody)
  }

  buildPage() {
    const spaBody = document.getElementById('spaBody')
    const page = document.createElement('div')
    page.id = 'activePage'
    spaBody.appendChild(page)
    return page
  }

  buildComponent(params) {
    if (params.id && document.getElementById(params.id)) {
      return false
    } else {
      const spaBody = document.getElementById('spaBody')
      const component = document.createElement('div')
      if (params.id) component.id = params.id
      spaBody.appendChild(component)
      return spaBody
    }
  }

  setPage(page, full)  {
    this.holdBuild = true
    window.location.hash = '#'+page
    const spaBody = document.getElementById('spaBody')
    if (full) {
      document.body.removeChild(spaBody)
      this.start()
    } else {
      const activePage = document.getElementById('activePage')
      if (activePage) spaBody.removeChild(activePage)
    }
    spa.page[page]()
    // window.scrollTo(0,0) // 👈 resets page scroll bar to the top of the page.
  }

}
