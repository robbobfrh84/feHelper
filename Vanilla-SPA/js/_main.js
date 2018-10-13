const spa =  new Single_Page_Application

window.onload = ()=>{
  spa.start()
  // spa.oldPage = 'home'
  // spa.oldPage = ''
  spa.onload = true
  let setPage = window.location.hash
  setPage = setPage.split('#')[1]
  window.location.hash = ''
  setPage ? spa.setPage(setPage) : spa.setPage("home", true)
}

window.onhashchange = (event)=>{

  // if(window.location.hash.split('##')[1]) {
  //   console.log('##',window.location.hash.split('##')[1]);
  //   const page = window.location.hash.split('##')[1]
  //   spa.setPage(page)
  // } else {
  //   const page = window.location.hash.split('#')[1]
  //   spa.setPage(page)
  // }


  const page = window.location.hash.split('#')[1]
  // if (!spa.holdBuild)
  console.log('---', window.location.hash, spa.currentPage);
  // if ('#'+spa.oldPage !== window.location.hash)
  // if (spa.holdPage)
  //spa.setPage(page)
  if (window.location.hash !== '#'+spa.currentPage) {
    spa.currentPage = window.location.hash.split('#')[1]
  }

  if (!spa.onload) {
    spa.page[spa.currentPage]({id: spa.currentPage})
  }
  spa.onload = false

  //spa.holdBuild = false
}
