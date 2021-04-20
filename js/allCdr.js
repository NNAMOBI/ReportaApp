

$(document).ready(function () {
 
      const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
     if(!bearer) {
         //redirect the user to the home page
      window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token
     }else {
         console.log('cdr page loaded')


 const url = `http://localhost:5000/api/user/cdr/fetch/token?token=${bearer}` //nodejs endpoint
   // function to call the fetchAPI (ajax)
          getData(url)
        .then((data) => {
         console.log(data, "+", data.data.id)
          let table = document.querySelector('#users-table > tbody')
             console.log(table)
             //Clears out existing table data
                 while(table.firstChild){
                     table.removeChild(table.firstChild)
                 }

                 //loop over array response
                 data.data.forEach((row)=> {
        
                  const tr = document.createElement("tr");
                   for (const data in row) {
                       const td = document.createElement("td")
                         td.textContent = row[data];
                        tr.appendChild(td);                       
                   }
                    table.appendChild(tr)
       })
         }).catch((err)=>{
            console.log(err.message)
         })
     }

})


       //  POST API method implementation:
       async function getData(url = '') {
   
          const response = await fetch(url, {
            method: 'GET', // *POST,
            mode: 'cors', //  cross origin resource sharing  
            cache: 'no-cache', // no-cache, 
            credentials: 'same-origin', // *same-origin,
            headers: {
              'Content-Type': 'application/json'
              
            },
            redirect: "follow", //  *follow
            referrerPolicy: 'no-referrer', // no-referrer, 
          });
          let check = response.url
          if (check.includes('null')) {
            // throw `error with status ${response.status}`
            return ("You are not authorized")
          }
          
          return response.json(); // parses JSON response into native JavaScript objects
          
          }