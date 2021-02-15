<?php
   include("database/connection.php"); 
    //function to create record in the db
    function createRecord($companyName, $email,$phoneNo, $password){
        // $connection = connection(); 
        //Attempting to insert Data into our table
        $serverName = 'localhost';
        $userName = "root";
        $password = "root";
        $databaseName= "reportaDB";

        //creating a connection to the database
        $connection = mysqli_connect($serverName, $userName, $password, $databaseName);
         
        //check if connection was successful or not
        if(!$connection){
          die('connection unsuccessful : '.mysqli_connect_error());
        }else {
            echo 'connection was successful';
        //   return TRUE;
        }
    $sql =  "INSERT INTO User (companyName, email, phoneNo, password) VALUES ('$companyName' ,
                                                                             '$email',  '$phoneNo', '$password')";

        // Check if inserting data was successful
        if(mysqli_query( $connection, $sql)) {
          echo 'successfully inserted data';
          
        }else{
          echo 'Error: '.$sql.mysqli_error( $connection);
        }

       // close connection
        mysqli_close($connection);

      }


// if(isset($_POST['create-button'])){
//     createRecord();
// }


?>