// Route to change password  using Jquery AJAX method

$(window).on("load", function(){
  const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
  console.log(bearer);
  if(!bearer)
  window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token

$( ":submit" ).click(function(event) {
    console.log( "ready!" );
  // Stop form from submitting normally
    event.preventDefault();
    const urlParams = new URLSearchParams(window.location.search); //get the query parameter
    const myParam = urlParams.get('token');  // retrieve the token
    let password = document.querySelector('#change-pass .password').value;  // get the input val
    let confirmPassword = document.querySelector('#change-pass .confirmPassword').value;
   
    let data = {
      password,
      confirmPassword
    }
    let url = `http://localhost:5000/api/authUser/token?token=${myParam}`;   //endpoint to be called

    
      try {      

  postData(url, data)
  .then((data) => {
    if(!data.data){
     console.log(data.data)
      console.log("->:", "route to home page")
      window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html";
      
    }else if(data.data.includes("successful")) {
      console.log("->: route to login page", data, data.data)
      window.location.href = "http://localhost:8080/reportaApp/ReportaApp/login.html";
      // swal(data.data);
      // throw `error with status ${data}`;
    }else{
      console.log("your password is not matching");
      swal(data.data);
    }
   
//  swal(data.data);
   //redirect to home page
})
.then(assignment => {               
  // redirect to login here...  // ***
  console.log( "i am here")
  // window.location.href = "http://localhost:8080/reportaApp/ReportaApp/login.html";
  
})      
  }catch (e){
          //handle errors as needed
          console.error(e)
      }  

});
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
