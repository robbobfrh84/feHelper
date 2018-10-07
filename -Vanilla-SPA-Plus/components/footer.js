spa.footer = (data)=>{
  const year = new Date
  spa.elm('footer').innerHTML = `
    <footer>  &copy; ${year.getFullYear()} Bob Main  </footer>
  `
}
// IDEA!!!
// What if pages WITH nav bar have to call these elements???
// THEN,  you could really incorperate your idea of removing pages
// THEN THEN, css would only apply to whats  seen. NOT the  entire page. 
spa.footer()
