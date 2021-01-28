fetch('https://apislack.herokuapp.com/')
  .then(response => response.json())
  .then(data => {
    console.log(data);
  });


// document.getElementById('submit').addEventListener('click',() => {
//   let email = document.getElementById('email').value;
//   let message = document.getElementById('message').value;
//   let txt = `Veuillez répondre à ${email}\n${message}`;
//   let auth = `Bearer ${token}`

//   fetch('https://slack.com/api/chat.postMessage', { 
//     method: 'POST', 
//     headers: new Headers({
//       'Content-type': 'application/json',
//       'Authorization': auth
//     }), 
//     body:  JSON.stringify({channel:"C01JTG3MDJN",text:txt})
//   });
// })



