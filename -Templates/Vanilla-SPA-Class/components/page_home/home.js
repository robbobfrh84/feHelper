SPA.prototype.home = {

  html: function(){
    const data = this.spa._data
    return /*html*/`
      <div id="home">
        <div>${this.spa._component('navbar')}</div>
        🏠 HOME PAGE 🏠
        <div> HomePage Message: ${data.message || ""} </div>
      </div>
    `
  }

}
