spa.page.home = (META)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(META).innerHTML += `
    <div id="main" class="navPage">
      <h3> ⭐ Home ⭐ </h3>
      This is styled by home's css
    </div>
  `

  spa.component.footer({preserve: true, id: "footer"})
}
