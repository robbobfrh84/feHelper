spa.page.full = (data)=>{
  spa.buildPage().innerHTML += `
    <div id='full'>
      <h3 class='title'> FULL PAGE </h3>
      <button onclick="window.history.back()">back</button>
    </div>
  `
}
