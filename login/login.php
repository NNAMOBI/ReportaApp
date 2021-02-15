<!-- check if user is logged-in -->
<?php
   session_start();
   
    include("connection.php");
    include("functions.php");
  
      //check if the user has logged-in
    $user_data = check_login($connection);
?>
