// Route for organization to login in to dashboard  using fetch API AJAX method


window.addEventListener('load', function() {

    console.log('All assets are loaded')
    const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
   console.log(bearer);
   if(!bearer)
   window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token

$( "#create-user" ).click(function(ev) {   //using jquery to select the input type submit button
    console.log("redirect to the createUsers page")
       window.location.href =  "http://localhost:8080/reportaApp/ReportaApp/createUsers.php"     
      
   })


})