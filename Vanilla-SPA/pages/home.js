spa.page.home = (META, data)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(META).innerHTML += `
    <div id="main" class="navPage">
      <h3> ⭐ Home ⭐ </h3>
      This is styled by home's css
      <hr><br><hr><br><hr><br><hr><br><hr><br><hr><br>
      <hr><br><hr><br><hr><br><hr><br><hr><br><hr><br>
    </div>
  `

  spa.component.footer({preserve: true, id: "footer"})
}
