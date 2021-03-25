// script to create users


$(document).ready(function () {

    console.log("i am here");
    $(':submit').click(function(e){ 
        console.log('i have clicked on the button') 
    e.preventDefault();   // prevent the default action of the page
  let data = $('#name-title').val() 
  console.log(data) //get the value from the input
const payload = { title: data };
  const url = `http://localhost:5000/api/authUser/token?token=${myParam}`

                  postData(url, payload )
                      .then((data) => {
                        console.log("data" , data)
                             if(!data.data){
                               console.log(data.data)
                              console.log("->:", "route to home page")
                //   window.location.href = "http://localhost:8080/reportaApp/ReportaApp/home.html";
    
                    }else if(data.data.includes("successful")) {
                        //    console.log("->: route to login page", data, data.data)
                //  window.location.href = "http://localhost:8080/reportaApp/ReportaApp/login.html";
    
                           }else{
                        //  console.log("your password is not matching");
                            //   swal(data.data);
                               }
}).catch((err)=>{
    console.log(err.message)
})


})


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