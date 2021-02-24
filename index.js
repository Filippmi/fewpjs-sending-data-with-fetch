// let submitData = {
//   name: "Filipp",
//   email: "Filipp@gmail.com"
// }

// let configObj = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify(submitData)
// }

// fetch("http://localhost:3000/users", configObj)
//   .then(function(resp) {
//     return resp.json()
//   })
//   .then(function(obj) {
//     console.log(obj)
//   })
//   .catch(function(error) {
//     alert("Bad things!")
//     console.log(error.message)
//   })
  function submitData( name, email ) {
    return fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name,
        email
      })
    })
    .then(function(resp) {
      return resp.json()
    })
    .then(function(obj) {
      document.body.innerHTML = obj[ "id" ]
    })
    .catch(function(error) {
      document.body.innerHTML = error.message
    })
  }