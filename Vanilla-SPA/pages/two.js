spa.page.two = (arg, data)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(arg).innerHTML += `
    <h3 class='title'> Page Two </h3>
    <div id='main'>
      This is styled by two's css
    </div>
  `

  spa.component.footer({preserve: true, id: "footer"})
}
