// Route for organization to login in to dashboard  using fetch API AJAX method
 

   function myFunction(e){
       e.preventDefault();
     console.log(" i have been clicked")
     e.preventDefault();
        console.log("redirect to the createUsers page")
           window.location.href =  "http://localhost:8080/reportaApp/ReportaApp/createUsers.html"

 }


window.addEventListener('load', function() {
    console.log('All assets are loaded')
    const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
   console.log(bearer);
   if(!bearer) {
    window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token
   } else {
    console.log("There is a token")
    document.getElementById('create-user').addEventListener("click", myFunction)

    const url = `http://localhost:5000/api/users/credentials/token?token=${bearer}`;   //endpoint to be called
         getData(url)
         .then((data) => {
      if(data.error) {
        console.log("error->" , data.error)
      swal(data.error);
       window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html";  //redirect to home page 
      }else if(data.data) {
         console.log("display data->:", data, data.data)
         document.getElementById('welcome').innerHTML = `<h1>Welcome ${data.data.companyName} 
                                                                       </h1><br/>
                                                                       <h6>${data.data.email}</h6>`
         document.getElementById('logged-in').innerHTML = `<h5>Logged in as ${data.data.companyName}</h5>`
//  window.location.href = "http://localhost:8080/reportaApp/ReportaApp/login.html";
         }else{
        console.log("You are not authorized");
               //   swal(data.data);
             }
     }).catch((err)=>{
        console.log(err.message)
})

    }
   })





       //  GET method implementation:
async function getData(url = '') {
   
   const response = await fetch(url, {
     method: 'GET', // *GET,
   });
   return response.json(); // parses JSON response into native JavaScript objects
 }
 

