spa.page.three = (META)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(META).innerHTML += `
    <div class="navPage" id='main'>
      <h3 class='title'> Page Three </h3>
      This is styled by two's css <br>
      <button class='pageNavBtn navBtn-active' name="home"> Home </button>
      <button class='pageNavBtn' name="two"> Page 2 </button>
      <button class='pageNavBtn' name="three"> Page 3 </button>
      <button class='pageNavBtn' name="full"> Full </button>
    </div>
  `

  set_page_to_nav = (page)=>{
    for (const btn of document.getElementsByClassName('pageNavBtn')) {
      btn.classList.remove('navBtn-active')
      if (btn.name === spa.currentPage) {
        btn.classList.add('navBtn-active')
      }
    }
  }

  for (const button of document.getElementsByClassName('pageNavBtn')) {
    button.onclick = function(event){
      spa.setPage(this.name)
      set_page_to_nav(this)
    }
  }

  set_page_to_nav()

  spa.component.footer({preserve: true, id: "footer"})
}
