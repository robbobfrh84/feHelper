spa.page.full = (ARG, data)=>{
  ARG.fullPage = true
  spa.buildPage(ARG).innerHTML += `
    <div id='full'>
      <h3 class='title'> FULL PAGE </h3>
      <button onclick="window.history.back()">back</button>
    </div>
  `
}
