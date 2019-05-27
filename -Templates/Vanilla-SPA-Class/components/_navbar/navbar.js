SPA.prototype.navbar = {

  func: function(str, num, bool){
    console.log("Local Function, param:", str, num+2, !!bool)
    console.log("this :", this)
    this.func2("Hi func2")
  },

  func2: function(message){
    this.spa._update({message})
  },

  html: function(){
    return /*html*/`
      <nav id="navbar">
        <button spaPage="home">    home    </button>
        - - - - Menu:
        <button spaPage="two">    two     </button>
        <button spaPage="three">  three   </button>
        <button spaPage="full">   full    </button>
        <br><br>

        <button thisClick="func('text', 9, false)"> Local Function </button>

        <button onClick="_global_function('🤓')"> Global Function </button>
      </nav>
    `
  }

}

function _global_function(emoji){
  alert(
    "Global Functions work as normal, "+
    "but won't automatically update components. "+
    "See Local function example for data flow "+emoji
  )
}
