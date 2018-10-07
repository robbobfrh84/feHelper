var spa =  new SPA

window.onload = ()=>{
  spa.oldPage = 'home'
  let setPage = window.location.hash
  setPage = setPage.split('#')[1]
  setPage ? spa.page(setPage) : spa.page("home")
}

window.onhashchange = ()=>{
  let setPage = window.location.hash
  setPage = setPage.split('#')[1]
  spa.page(setPage)
}
