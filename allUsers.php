

<!DOCTYPE html>
<html lang="en">
<head>
        <?php include("header.php") ?>
         <title>All users</title>
</head>
<body>
          <!--  nav starts here -->
             <?php include("navbar.php") ?>


               <!-- side nav starts here -->
         <?php include("sideNav.php") ?>
    <!-- side bar end-->
           <div class="container">
            <h3 class="alert alert-dark p-3 text-center">All Users</h3>

 <div class="row">
    <div class="col-6 mx-auto">   <!--bootstrap-->
        
    
    <!--third div  here-->

    <table class="table table-bordered text-center border-success text-white">
        <thead class="bg-primary">
            <tr>  
                 <th>Title</th>                
                  
                   <th>Action</th>
            </tr>
        </thead>
        <tbody class="table-hover bg-light text-dark category-list">
           
         <tr>
                 <td>title</td>
                 <td class="d-flex justify-content-center">
                    <a href="/api/admin/category/edit/{{this.id}}" class="btn btn-sm btn-warning mr-2">Edit Category</a> <!--bootstrap-->
                <form action="/api/admin/category/{{this.id}}?_Method=DELETE" method="POST">
                <button class="btn btn-sm btn-danger" type="submit">Delete Categories</button>
                </form>

                 </td>
                  
                 <th>True</th> 
        </tr>
     
        </tbody>
    </table>

      <!-- side bar end-->


</div>
       <?php include("script.php") ?> 
</body>
</html>