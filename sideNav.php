<!DOCTYPE html>
<html lang="en">
<head>
<?php include("header.php") ?>
</head>
<body>
<div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sb-sidenav accordion" style="background-color: #EB5757; color: white"; id="sidenavAccordion">
                    <div class="sb-sidenav-menu">
                        <div class="nav">
                            <div class="sb-sidenav-menu-heading" ; font-family:Verdana, Geneva, Tahoma, sans-serif">
                                <a href="/home" style="color: white" >Back to Home page</a>
                                </div>
                            <a class="nav-link" href="/admin" style="color: white">
                                <div class="sb-nav-link-icon" style="color: white"><i class="fas fa-tachometer-alt"></i></div>
                                CDR
                            </a>
                            <div class="sb-sidenav-menu-heading" >Interface</div>
                            <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseLayouts" aria-expanded="" aria-controls="collapseLayouts" style="color: white">
                                <div class="sb-nav-link-icon"><i class="fas fa-columns"></i></div>
                                Manage User
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapseLayouts"   aria-labelledby="headingOne" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav">
                                    <a class="nav-link" href="">All Users</a>
                                    <a class="nav-link" id="create-user" href="">Create New User</a
                                  

                                </nav>
                            </div>
                            <a class="nav-link collapsed" href="#" data-toggle="collapse"  style="color: white"  data-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                                <div class="sb-nav-link-icon" style="color: white"><i class="fas fa-book-open"></i></div>
                                CDR
                                <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                            </a>
                            <div class="collapse" id="collapsePages" aria-labelledby="headingTwo" data-parent="#sidenavAccordion">
                                <nav class="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                                    <a class="nav-link" href="/api/admin/category/all/{{id}}"style="color: white" >
                                        View Agents
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                     
                                    <a class="nav-link" href="/api/admin/category/create/{{id}}" style="color: white">
                                        View Customers
                                        <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
                                    </a>
                                    <div class="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-parent="#sidenavAccordionPages">
                                        <nav class="sb-sidenav-menu-nested nav">
                                            <a class="nav-link" href="401.html">401 Page</a>
                                            <a class="nav-link" href="404.html">404 Page</a>
                                            <a class="nav-link" href="500.html">500 Page</a>
                                        </nav>
                                    </div>
                                </nav>
                            </div>
                            <div class="sb-sidenav-menu-heading" >Addons</div>
                            <a class="nav-link" href="charts.html"  style="color: white">
                                <div class="sb-nav-link-icon"  ><i class="fas fa-chart-area"></i></div>
                               Notifications
                            </a>
                            <a class="nav-link" href="tables.html"  style="color: white">
                                <div class="sb-nav-link-icon"><i class="fas fa-table"></i></div>
                               E-mails
                            </a>
                        </div>
                    </div>
                    <div class="sb-sidenav-footer">
                        <div class="small">Logged in as:</div>
                    </div>
                </nav>
            </div>
            <script src="js/dashboard.js"></script>
</body>
</html>
