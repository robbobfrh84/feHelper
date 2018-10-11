const spa =  new Single_Page_Application

window.onload = ()=>{
  spa.start()
  spa.oldPage = 'home'
  let setPage = window.location.hash
  setPage = setPage.split('#')[1]
  setPage ? spa.setPage(setPage) : spa.setPage("home")
}

window.onhashchange = ()=>{
  const page = window.location.hash.split('#')[1]
  if (!spa.holdBuild) spa.setPage(page)
  spa.holdBuild = false
}
