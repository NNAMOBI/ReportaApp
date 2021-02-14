<?php

function connection() {
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
 }


?>
 