<!DOCTYPE html>
<html lang="en">
<head>
    <?php include("header.php") ?>
    <title>Users</title>
</head>
<body>
       <?php include("navbar.php") ?>
    <!-- side bar start-->
  
    
        
        <!-- side nav starts here -->
         <?php include("sideNav.php") ?>
    <!-- side bar end-->
<div class="container">
    
 <h3 style="text-align: center;">Create New User</h3>
   
 <div class="row p-2">
     <div class="col-sm-10">
         <form action="/api/admin/post/submit/{{id}}" method="POST" enctype="multipart/form-data" style="width: 50%; margin: 1px auto;" >
             <div class="form-group">
                 <label for="title">Name</label>
                 <input type="text" class="form-control" name="title" id="title" placeholder="Enter the title">
             </div>
             <!-- first input ends here -->
             <div class="form-group">
                 <label for="title">Email</label>
                 <input type="email" class="form-control" name="title" id="title" placeholder="Enter the title">
             </div>
             
             <div class="form-group">
                 <label for="title">Phone</label>
                 <input type="email" class="form-control" name="title" id="title" placeholder="Enter the title">
             </div>

            <div class="form-group">
           <label for="file">Image Upload</label>
           <input type="file" class="form-control" id="file" name="uploadedFile">

            </div>

              <div class="form-group">
                 <label for="status">status</label>
                 <select id="status" name="status" class="form-control">
                     <option value="public">Supervisor</option>
                     <option value="private">Employee</option>
                     <option value="draft">Assistant Supervisor</option>
                     </select>
             </div>
               

               <button type="submit" class="btn btn-outline-success btn-lg">
                   Create User
               </button>

         </form>
     </div>

 </div>

</div>
       <?php include("script.php") ?>   <!--all scripts-->
</body>
</html>