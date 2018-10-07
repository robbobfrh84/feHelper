class SPA {

  elm(id) {
    return document.getElementById(id)
  }

  page(page)  {
    const newPage = document.getElementById(page)
    try {
      document.getElementById(spa.oldPage).style.display = 'none'
      newPage.style.display = 'block'
      window.location.hash = '#'+page
      spa.oldPage = page
    }
    catch(error) {
      alert(`
        So... this "${page}" page doesn't exist. It may have,
        it may will, or it's may never exist.

        What we're gonna do is send you back to the last page you
        were on. If this was it, we'll send you to the home page.
      `)
      spa.page(spa.oldPage)
    }
    spa[page]()
    window.scrollTo(0,0) // 👈 resets page scroll bar to the top of the page.
  }

}
