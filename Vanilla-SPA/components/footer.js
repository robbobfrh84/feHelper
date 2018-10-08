spa.component.footer = (data)=>{
  const year = new Date
  spa.buildComponent({id: 'footer'}).innerHTML += `
    <footer>  &copy; ${year.getFullYear()} Bob Main  </footer>
  `
}
