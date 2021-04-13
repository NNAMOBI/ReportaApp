// Route for organization to login  using fetch API AJAX method



    $( ":submit" ).click(function(ev) {   //using jquery to select the input type submit button   
      try {
        //prevent default action by form
        ev.preventDefault();
        //jquery to select form input
          let email = document.querySelector('#log-form .email').value;
          let password = document.querySelector('#log-form .password').value
             console.log(email)
          let userData = {
            email,
            password
          }

          console.log(userData)
            //AJAX call to the login route / CMS backend
            const endpoint = "http://localhost:5000/api/org/login"; //login url
        //invoking the function to post login input
          postData(endpoint, userData)
          .then((data) => {
         if(data.data.accessToken) { 
          console.log(data);
         localStorage.setItem('token', data.data.accessToken);// set the token for the session in the local storage       
    //redirect the user to the dashboard where he can view post after login successful 
       console.log("token:->", data.data.accessToken)
        window.location.href =  "http://localhost:8080/reportaApp/ReportaApp/orgDashboard.html"
        }else {        
            console.log("route to home page");
         window.location.href =  "http://localhost:8080/reportaApp/ReportaApp/home.html"     
        }
     })
    }catch(err){
      console.error(err);
         
      }
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
        
        return response.json(); // parses JSON response into native JavaScript objects
    }     