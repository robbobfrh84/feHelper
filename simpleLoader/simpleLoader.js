var loader1 = true

function startStop(event){
  const state = event.path[0].innerHTML
  event.path[0].innerHTML = loader1 ? 'Start' : 'STOP'
  document.getElementById('loader1').style.display = loader1 ? 'none' : ''
  loader1 = !loader1
}
