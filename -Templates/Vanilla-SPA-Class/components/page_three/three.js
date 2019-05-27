SPA.prototype.three = {

  html: function(){
    return /*html*/`
      <div id="three">
        <div>${this.spa._component('navbar')}</div>
        🎶 PAGE THREE 🎶
      </div>
    `
  }

}
