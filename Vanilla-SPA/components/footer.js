spa.component.footer = (arg, data)=>{
  const year = new Date
  spa.buildComponent(arg).innerHTML += `
    <footer id="main">  &copy; ${year.getFullYear()} Bob Main  </footer>
  `
}
