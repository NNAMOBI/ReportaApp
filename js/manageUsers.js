$(document).ready(function () {

      
    console.log('All assets are loaded')
      const bearer = localStorage.getItem('token')   //get token to create a session and authorization from the backend
     console.log(bearer);
     if(!bearer) {
         //redirect the user to the home page
      window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html"; //route the user to home page if no token
     }else {
      
              
    const url = `http://localhost:5000/api/users/fetch/token?token=${bearer}` //nodejs endpoint
   // function to call the fetchAPI (ajax)
          getData(url)
        .then((data) => {
          if(data.error) {
          swal(data.error);

          }else if(data.data) {
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
                    //   $('#search-input').on('keyup', function(d){
                    //     let value =  document.querySelector('#search-input').value; 
                    //      console.log(value)
                        // var data = searchTable(value, d)
                       
                              
                       // function to search table
                        //  function searchTable(value, data){
                        // let filteredData = [];
                        // for(let i=0; i<data.length; i++){
                        //     value = value.toLowerCase()
                        //     let name = data[i].name.toLowerCase();
               
                        //     if(name.includes(value)){
                        //         filteredData.push(data[i])
                        //     }
                        // }
                        // return filteredData;
               
                        //  }
                        // })
                 })
            //function to the get keyup event
       
             }else{
            console.log("You are not authorized");
                   //   swal(data.data);
                 }
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
          console.log("-> ", response, response.status);
          console.log("url->", response.url)
          return response.json(); // parses JSON response into native JavaScript objects
          
          }