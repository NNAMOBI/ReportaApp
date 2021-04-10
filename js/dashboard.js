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
   } else{
    console.log("There is a token")
    document.getElementById('create-user').addEventListener("click", myFunction)

    const url = `http://localhost:5000/api/authUser/token?token=${bearer}`;   //endpoint to be called
             
          
   
        
    
    
    
    }
   })

