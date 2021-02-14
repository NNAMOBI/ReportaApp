<?php
 
    //function to connect to the database and create record
    function createRecord(){
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
          echo "connection was successful";
        }


        //Storing the userinput into variables
        $companyName = $_POST['create-name'];
        $email = $_POST['create-email'];
        $phoneNo = $_POST['create-phoneNo'];
        $password = $_POST['create-password'];

        //Attempting to insert Data into our table
        $sql =  "INSERT INTO User (companyName, email, phoneNo, password) VALUES ('$companyName ', ' $email',  '$phoneNo', '$password')";

        //Check if inserting data was successful
        if(mysqli_query($connection, $sql)) {
          echo 'successfully inserted data';
        }else{
          echo 'Error: '.$sql.mysqli_error($connection);
        }

        //close connection
        mysqli_close($connection);

      }


if(isset($_POST['create-button'])){
    createRecord();
}


?>