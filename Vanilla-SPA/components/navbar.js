spa.component.navbar = (ID, data)=>{
  spa.buildComponent(ID).innerHTML += `
    <nav id="main">
      <div id="navBar">
        <button class='navBtn navBtn-active' name="home"> Home </button>
        <div class='float-right'> Menu:
          <button class='navBtn' name="two"> Page 2 </button>
          <button class='navBtn' name="three"> Page 3 </button>
          <button class='navBtn' name="full"> Full </button>
        </div>
      </div>
    </nav>
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

}
