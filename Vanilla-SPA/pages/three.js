spa.page.three = (arg, data)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(arg).innerHTML += `
    <div class="navPage">

      <h3 class='title'> Page Three </h3>
      <div id='main'>
        This is styled by three's css
      </div>

      <div id="main">
        <button class='navBtn navBtn-active' name="home"> Home </button>
        <div class='float-right'> Menu:
          <button class='navBtn' name="two"> Page 2 </button>
          <button class='navBtn' name="three"> Page 3 </button>
          <button class='navBtn' name="full"> Full </button>
        </div>
        <hr>
      </div>

    </div>
  `

  for (const button of document.getElementsByClassName('navBtn')) {
    button.onclick = function(event){
      spa.setPage(this.name)
      for (const btn of document.getElementsByClassName('navBtn')) {
        btn.classList.remove('navBtn-active')
      }
      this.classList.add('navBtn-active')
    }
  }

  spa.component.footer({preserve: true, id: "footer"})
}
