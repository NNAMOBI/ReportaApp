// Route for organization to login in to dashboard  using fetch API AJAX method
 

   function myFunction(e){
       e.preventDefault();
     console.log(" i have been clicked")
     e.preventDefault();
        console.log("redirect to the createUsers page")
           window.location.href =  "http://localhost:8080/reportaApp/ReportaApp/createUsers.html"

 }

// function to redirect to all userspage
 function allUserFunction(e){
  e.preventDefault();
        window.location.href =  "http://localhost:8080/reportaApp/ReportaApp/allUsers.html"

 }




window.addEventListener('load', function() {
    const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
   if(!bearer) {
    window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token
   } else {   
    document.getElementById('create-user').addEventListener("click", myFunction)
    document.getElementById('all-user').addEventListener("click", allUserFunction)


    const url = `http://localhost:5000/api/users/credentials/token?token=${bearer}`;   //endpoint to be called
         getData(url)
         .then((data) => {
      if(data.error) {
      swal(data.error);
       window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html";  //redirect to home page 
      }else if(data.data) {
         const cdr = document.getElementById('cdr')
         cdr.innerHTML = `<h6><span style="color: black; font-size: 25px">${data.data.cdrRecord.length}</span>   call details records</h6>` 
         document.getElementById('agents').innerHTML = `<h6><span style="color: red; font-size: 25px">${data.data.cdrRecord.length}</span>   Agent</h6>`
         document.getElementById('users').innerHTML = `<h6><span style="color: blue; font-size: 25px">${data.data.cdrRecord.length}</span>   Customers</h6>`
         
         document.getElementById('welcome').innerHTML = `<h1>Welcome ${data.data.userRecord.companyName} 
                                                                     </h1><br/>
                                                                       <h6>${data.data.userRecord.email}</h6>`
         document.getElementById('logged-in').innerHTML = `<h5>Logged in as ${data.data.userRecord.companyName}</h5>`
        
         console.log(cdr)
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
 

