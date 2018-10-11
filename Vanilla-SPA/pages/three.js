spa.page.three = (arg, data)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(arg).innerHTML += `
    <h3 class='title'> Page Three </h3>
    <div id='main'>
      This is styled by three's css
    </div>
  `

  spa.component.footer({preserve: true, id: "footer"})
}
