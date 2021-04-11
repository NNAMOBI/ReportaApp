// script to create users


$(document).ready(function () {

      
  console.log('All assets are loaded')
    const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
   console.log(bearer);
   if(!bearer) {
    window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token
   }else {
    $(':submit').click(function(e){ 

      e.preventDefault();   // prevent the default action of the page
     //inputs
              console.log('i have clicked on the button')
              let name = $('#createUser-form .name').val() 
              let email = $('#createUser-form .email').val()
              let phone = $('#createUser-form .phone').val()
              // let file = $('#createUser-form .file').val()
              let status = $('#createUser-form .status').val()
              
       let data = {
         name,
         email,
         phone,
         status
       }

            
  const url = `http://localhost:5000/api/users/create/token?token=${bearer}`

        postData(url, data)
      .then((data) => {
        if(data.error) {
          console.log("error->" , data.error)
        swal(data.error);
        }else if(data.data) {
           console.log("->: created", data, data.data)
           swal("successful" , `${data.data.name} has been created as ${data.data.status}`);
//  window.location.href = "http://localhost:8080/reportaApp/ReportaApp/login.html";

           }else{
          console.log("You are not authorized");
                 //   swal(data.data);
               }
       }).catch((err)=>{
          console.log(err.message)
 })

   })

  }
  





})







     //  POST API method implementation:
     async function postData(url = '', data = {}) {
 
        const response = await fetch(url, {
          method: 'POST', // *POST,
          mode: 'cors', //  cross origin resource sharing  
          cache: 'no-cache', // no-cache, 
          credentials: 'same-origin', // *same-origin,
          headers: {
            'Content-Type': 'application/json'
            
          },
          redirect: "follow", //  *follow
          referrerPolicy: 'no-referrer', // no-referrer, 
          body: JSON.stringify(data) // body data type must match "Content-Type" header
        });
        let check = response.url
        if (check.includes('null')) {
          // throw `error with status ${response.status}`
          return ("You are not authorized")
        }
        console.log("-> ", response, response.status);
        console.log("url->", response.url)
        return response.json(); // parses JSON response into native JavaScript objects
        
        }