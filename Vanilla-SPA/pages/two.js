spa.page.two = (arg, data)=>{
  spa.component.navbar({preserve: true, id: "navbar"})

  spa.buildPage(arg).innerHTML += `
    <div class="navPage" id='main'>
      <h3 class='title'> Page Two </h3>
      This is styled by two's css
      <button id='btn1' class='btn1'> Button 1 </button>
    </div>

  `

  const btn1 = document.getElementById('btn1')
  btn1.onclick = function(event) {
    console.log('click', event);
    btn1.style.backgroundColor = 'red'
    btn1.classList
    console.dir(btn1);
    var x = document.getElementsByClassName('btn1')
    console.log(x);
    btn1.classList.add('btn2')
  }

  spa.component.footer({preserve: true, id: "footer"})
}
