<!DOCTYPE html>
<html lang="en">
<head>
      <?php include("header.php") ?>
  
    <title>Dashboard - SB Admin</title>
</head>


 <!-- body starts here -->

 <body class="sb-nav-fixed">

         <?php include("navbar.php") ?>
        
        <!-- side nav starts here -->
         <?php include("sideNav.php") ?>


        <!-- side nav ends here -->
            <div id="layoutSidenav_content">
                <main>
                    <div class="container-fluid">
                        <h1 class="mt-4">Welcome Admin</h1>
                        <ol class="breadcrumb mb-4">
                            <li class="breadcrumb-item active" style="color:red;">YOUR DATA</li>
                        </ol>
                        <div class="row">
                            <div class="col-xl-4 col-md-6">
                                <div class="card bg-primary text-white mb-4 color">
                                    <div class="card-body">Call details records</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card bg-warning text-white mb-4">
                                    <div class="card-body">Agents</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-md-6">
                                <div class="card bg-success text-white mb-4">
                                    <div class="card-body">Customers</div>
                                    <div class="card-footer d-flex align-items-center justify-content-between">
                                        <a class="small text-white stretched-link" href="#">View Details</a>
                                        <div class="small text-white"><i class="fas fa-angle-right"></i></div>
                                    </div>
                                </div>
                            </div>
                           
                    
                        <!-- <div class="card mb-4">
                            <div class="card-header">
                                <i class="fas fa-table mr-1"></i>
                                YOUR DATA

                               
                            </div> -->
 
                             
                            
                </main>

                                           
                <section>
                    <!-- datatable starts here -->

            
<div class="container">
<div class="alert alert-secondary text-center">   <!--bootstrap-->
<h5>ALL CDRS</h5>
</div>
<!--first div ends here-->

<table class="table table-bordered">
<thead class="bg-success text-center">
<tr class="text-white">  
   <th>Call_id</th>
   <th>Reason_terminated</th>                
    <th>Time_start</th>
    <th>Time_end</th>
    <th>Time-answered</th>
    <th>From_no</th>
    <th>To_no</th>
    <th>From_dn</th>
    <th>To_dn</th>
    <th>Date</th>
   <th>Action</th> 
   
</tr>
</thead>
<tbody class="text-center">

<tr>
   <td></td>
   <td></td>
   <td></td>
   <td></td>

   <td class="d-flex">
      <a href="/api/user/posts/edit/{{this.id}}" class="btn btn-sm btn-warning mr-2">Edit Post</a> <!--bootstrap-->
  <form action="/api/admin/post/delete/{{this.id}}?newMethod=DELETE" method="POST">
  <button class="btn btn-sm btn-danger" type="submit">Delete Post</button>
  </form>

   </td>






   

    
     <th></th> 
     <th></th>
     <th></th>
     <th></th>
     <th> 


     <td class="d-flex">
      <a href="/api/user/posts/edit/{{this.id}}" class="btn btn-sm btn-warning mr-2">Edit Post</a> <!--bootstrap-->
  <form action="/api/admin/post/delete/{{this.id}}?newMethod=DELETE" method="POST">
  <button class="btn btn-sm btn-danger" type="submit">Delete Post</button>
  </form>

   </td>





     </th>
     
</tr>

</tbody>
</table>
</div>
               



                <!-- datatable starts here -->


              </section>
              
                <footer class="py-4 bg-light mt-auto">
                    <div class="container-fluid">
                        <div class="d-flex align-items-center justify-content-between small">
                            <div class="text-muted">Copyright &copy; Your Website 2020</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                &middot;
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
        
   <?php include("script.php") ?>        <!--all scripts-->
   <script src="js/dashboard.js"></script>
</body>
</html>