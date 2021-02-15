<?php


// function to check if a user is logged -in
function check_login($con)
     {
         if(isset($_SESSION['userID']) )
         {   //check in the session if there is a userId

            $id = $_SESSION['userID'];
            $query = "SELECT * from User WHERE userID = '$id' limit 1";   //assign the query to a variable

            $result = mysqli_query($con, $query);    //query to check for the instance of the user
            if($result && mysqli_num_rows($result) > 0) //checks if the row > 0?
            {
                 $user_data = mysqli_fetch_assoc($result);    //fetch the data and assign it to a variable
                 return $user_data;                           //return the variable
            }

         }   
         
         //redirect to login
         header("Location: login.php");        
         die;
     }


?>