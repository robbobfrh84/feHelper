spa.component.navbar = (arg, data)=>{
  spa.buildComponent(arg).innerHTML += `
    <button class='home_menu' onclick='spa.setPage("home")'> Home </button>
    <div id="main" class='float-right'> Menu:
      <button class='home_menu' onclick='spa.setPage("two")'> Page 2 </button>
      <button class='home_menu' onclick='spa.setPage("three")'> Page 3 </button>
      <button class='home_menu' onclick='spa.setPage("full", true)'> Full </button>
    </div>
    <hr>
  `
}
