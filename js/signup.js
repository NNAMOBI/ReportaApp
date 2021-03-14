
// action to register the user using client API( FETCH)


  const button = document.getElementById('button-click');
    console.log(button);


  button.addEventListener('click', (ev)=> {
    try {
       ev.preventDefault();
       console.log('I have been clicked');
        let companyName = document.querySelector('#reg-form .companyName').value; //value of the input
        let email = document.querySelector('#reg-form .email').value;  // value of the input
        let password = document.querySelector('#reg-form .password').value;     //value of the input
        let confirmPassword = document.querySelector('#reg-form .confirmPassword').value;     //value of the input
        let phoneNo = document.querySelector('#reg-form .phone').value;       //value of the input
        let address = document.querySelector('#reg-form .address').value;
         
        let userData = {
          companyName,
          email,
          password,
          confirmPassword,
          phoneNo,
          address
        }

        console.log(userData);
             //AJAX call to submit the form to the API / CMS backend
        const endpoint = `http://localhost:5000/api/organization/register`;

        postData(endpoint, userData)
       .then((data) => {
      console.log(data);
      console.log(data.data.accessToken)
      const bearer =  data.data.accessToken;
      localStorage.setItem('token', bearer);
      if(data.data.mail) { 
       
      swal("You have successfully registered!", "Please check your email to change your password. thank you!", "success");
        //redirect to home page
     }else if(data.data){
       
        swal(data.data);     
     }
    });
    }catch(err){
        console.error(err.error);
        return error;
    }

 });


       //  POST method implementation:
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
  
