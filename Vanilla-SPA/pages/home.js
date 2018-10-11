spa.page.home = (arg, data)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(arg).innerHTML += `
    <h3 class='title'> ⭐ Home ⭐ </h3>
    <div id='main'>
      This is styled by home's css
    </div>
  `

  spa.component.footer({preserve: true, id: "footer"})
}
