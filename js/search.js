


 const deleteBtn = document.getElementById('delete-btn');



   deleteBtn.addEventListener('click', (ev)=> {
      ev.preventDefault();

        let searchField = document.querySelector('#search-input').value; //value of the input
    console.log(searchField )

    const endpoint = `http://localhost:5000/api/user/cdr/delete/${searchField}`;

        deleteData(endpoint)
       .then((data) => {
      console.log(data);
      if(data)   
      swal("You have successfully deleted the call details record!", "thank you", "success");
        //redirect to home page  
    }).catch((err)=>{
        console.log(err)
    })

 })



       //  POST method implementation:
async function deleteData(url = '') {
   
    const response = await fetch(url, {
      method: 'DELETE', // *DELETE,
      mode: 'cors', //  cross origin resource sharing  
      cache: 'no-cache', // no-cache, 
      credentials: 'same-origin', // *same-origin,
      headers: {
        'Content-Type': 'application/json'
        
      },
      redirect: "follow", //  *follow
      referrerPolicy: 'no-referrer', // no-referrer, 
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }
  