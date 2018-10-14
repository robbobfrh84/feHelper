spa.page.two = (META)=>{
  spa.component.navbar({preserve: true, id: "navBar"})

  spa.buildPage(META).innerHTML += `
    <div class="navPage" id='main'>
      <h3 class='title'> Page Two </h3>
      This is styled by two's css
      <hr><br><hr><br><hr><br><hr><br><hr><br><hr><br>
      <hr><br><hr><br><hr><br><hr><br><hr><br><hr><br>
    </div>
  `

  spa.component.footer({preserve: true, id: "footer"})
}
