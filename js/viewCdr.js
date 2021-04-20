



function routeToPage(e){
    e.preventDefault()
   window.location.href = "http://localhost:8080/reportaApp/ReportaApp/viewCdr.html"; 
}


$(document).ready(function () {
 
  const viewCdr = document.getElementById('view-cdr')
  console.log(viewCdr)
  const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
     if(!bearer) {
         //redirect the user to the home page
      window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token
     }else {
         viewCdr.addEventListener("click", routeToPage);
         
     }
})