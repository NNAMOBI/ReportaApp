

const signout = document.getElementById('logout');

signout.addEventListener('click', ()=> {
  console.log('logging out');
  sessionStorage.removeItem('token');
  window.location.href =  "localhost:8080/reportaApp/ReportaApp/change.html"
});
