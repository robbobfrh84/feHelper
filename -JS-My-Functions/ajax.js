_GET = (url, callback)=>{
  var xhr = new XMLHttpRequest();
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (callback) callback(JSON.parse(xhr.responseText))
    }
  }
  xhr.send(null)
}

_GET(url, (data)=>{
  _myCallback(data)
})


// ALTERNATIVE WITH PROMISE (Needs to be tested and cleaned)

// _get = (url)=>{
//
//   return new Promise((res, rej) => {
//     let xhr = new XMLHttpRequest();
//     xhr.open('GET', url, true);
//     xhr.onreadystatechange = function () {
//       if (this.readyState == 4) {
//         if (this.status == 200) {
//           res(xhr.responseText)
//         } else {
//           rej(xhr)
//         }
//       }
//     }
//     xhr.send(null)
//   })
//
// }

// _get(url)
//   .then(payload => callback(payload))
//   .catch(err => alert('! Problem retrieving data !\n\n'+err))
