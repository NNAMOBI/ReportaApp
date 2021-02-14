<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.gstatic.com">   
    <link href="assets/signup.css" type="text/css", rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    <title>CDR App</title>
    
</head>
<!-- body starts here -->
<body>
 <!-- require php file create.php -->
 <?php require_once 'create.php' ?>     

    <!-- header starts here -->
    <header>
        <!-- Navigation bar starts here -->
        <!-- right Nav -->
        <nav class="right-nav">
            <ul id="nav-links">
                <li><a href="about">Product</a></li>
                <li><a href="products">Company</a></li>
                <li><a href="create.php">Contact</a></li>
                <li><a href="create.php">Login</a></li>
            </ul>



        </nav>
        <!-- end of right nav bar -->
        
        <!-- Nav logo- design starts here -->
        <nav class="left-nav">
        <ul id="logo">
            <li><a href="" class="logo-design">R</a></li>
            <li><a href="" class="reporta-text">reporta</a></li>
           
        </ul>
       </nav>
       
       <!-- the paragraph tag for call data -->
       <p>...a Call Data Tracker system</p>
      
     
       

    </header>
    <!-- header ends here -->
      <!-- main section -->
    <main>
        <section class="section-begin">
            <div class="container">
                <!-- left section -->
                <div class=row-left>
                    <h1>Welcome to Reporta <br/>
                        Customer Portal!
                    </h1>

                    <p class="register">Register with us and <br>
                       have a great experience <br>
                        with your call details <br>
                        record  
                    </p>
                    
                    <img class="img-pic" src="images/undraw-img.png">
                    
                </div>
                <div>
            
                    <!-- the right section -->
                </div class=row-right> 
                <form action="create.php" method="POST" id=company-form>
                    <label for="fname">CompanyName</label>
                    <input type="text"  name="create-name"  class="text-field" required><br>
                    <label for="lname">Email</label>
                    <input type="email"  name="create-email"  class="text-field" required><span class="material-icons">email</span><br>
                    <label for="lname">PhoneNo</label>
                    <input type="text"  name="create-phoneNo"  class="text-field" required><span class="material-icons">settings_phone</span><br>
                    <label for="password">Password</label>
                    <input type="text"  name="create-password" class="text-field" required><span class="material-icons">enhanced_encryption</span><br>
                    <h5 id="forgot-password">Forgot password?</h5>
                    <button name="create-button">Register</button>
                    <h6>Already a member? </h6>
                    <h6 class="login">Login</h6>
                  </form> 
            
              </div> 
           
 

        </section>
    </main>
     
<!-- main section ends here -->
    
    <footer>


    </footer>
    
</body>

<!-- php code starts here  -->
<?php

 

?>
</html>
