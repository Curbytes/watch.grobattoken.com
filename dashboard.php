<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">

<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">

<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">

<link rel="manifest" href="/site.webmanifest">

<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#f90000">

<meta name="apple-mobile-web-app-title" content="M.E Webplayer">

<meta name="application-name" content="M.E Webplayer">

<meta name="msapplication-TileColor" content="#ffffff">

<meta name="theme-color" content="#ffffff">



<?php

/*

 * @ PHP 5.6

 * @ Decoder version : 1.0.0.1

 */



include "includes/header.php";

include "includes/sideNav.php";

echo "<style>\r\n.messagePerm\r\n{\r\n    position: absolute;\r\n    width: 70%;\r\n    left: 15%;\r\n}\r\n.dontShow\r\n{\r\n    position: relative;\r\n    bottom: 6px;\r\n    font-size: 11px;\r\n    opacity: 1;\r\n    right: -35px;\r\n    color: #000;\r\n    margin-top: 25px;\r\n}\r\n     \r\n.herelink {\r\n    color: #a039b1;\r\n    font-weight: 600;\r\n}     \r\n</style>\r\n<div class=\"container-fluid\">    \r\n    <div class=\"col-md-10 col-md-offset-1\">\r\n    ";

if ($headerparentcondition == "") {

    echo "        <div class=\"row\">\r\n          <div class=\"col-sm-2\">\r\n          </div>\r\n          <div class=\"col-sm-8\">\r\n            <div class=\"alert alert-warning\" style=\"position: relative;top: 20px;\">\r\n              <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\">&times;</a> \r\n              <strong style=\"font-weight: bold;\">Warning!</strong> \r\n               You don’t have set the PIN for Parental Control . Click here to set it up <a href=\"settings.php\" class=\"herelink\">here</a>\r\n            </div>\r\n          </div>\r\n          <div class=\"col-sm-2\">\r\n          </div>\r\n        </div> \r\n      ";

}

echo "

<style>

.ltv {

   background-image: url(./img/live_tv_background.png); 

    width: 350;

   height: 270px;

    background-size: contain;

    background-size: 100%;

   background-repeat: no-repeat;

}

.ltv:hover

{

   background-image: url(./img/livetv_focused.png); 

}



.mov {

   background-image: url(./img/on_demand_background.png); 

    width: 350;

   height: 270px;

    background-size: contain;

    background-size: 100%;

   background-repeat: no-repeat;

}

.mov:hover

{

   background-image: url(./img/ondemand_focused.png); 

}



.ser {

   background-image: url(./img/catch_background.png); 

    width: 350;

   height: 270px;

    background-size: contain;

    background-size: 100%;

   background-repeat: no-repeat;

}

.ser:hover

{

   background-image: url(./img/catch_up_focused.png); 

}



.acc {

   background-image: url(./img/account_background.png); 

    width: 300;

   height: 200px;

    background-size: contain;

    background-size: 100%;

   background-repeat: no-repeat;

}

.acc:hover

{

   background-image: url(./img/account_focused.png); 

}



.sit {

   background-image: url(./img/site_background.png); 

    width: 300;

   height: 200px;

    background-size: contain;

    background-size: 100%;

   background-repeat: no-repeat;

}

.sit:hover

{

   background-image: url(./img/site_focused.png); 

}



.log {

   background-image: url(./img/logout_background.png); 

    width: 300;

   height: 200px;

    background-size: contain;

    background-size: 100%;

   background-repeat: no-repeat;

}

.log:hover

{

   background-image: url(./img/logout_focused.png); 

}

</style>



<div class=\"home col-md-12 col-sm-12 col-xs-12\">

   <div class=\"col-md-4 col-sm-4 col-xs-12\">

     <a class=\"center-block ltv\" href=\"live.php\"></a>

   </div>

   

   <div class=\"col-md-4 col-sm-4 col-xs-12\">

      <a class=\"center-block mov\" href=\"movies.php\"></a>

   </div>

   

   <div class=\"col-md-4 col-sm-4 col-xs-12\">

      <a class=\"center-block ser\" href=\"series.php\"></a>

   </div>

</div>



<div class=\"col-md-12 col-sm-12 col-xs-12 Mybtns\">

   <div class=\"col-md-4 col-sm-4 col-xs-12\">

     <a class=\"center-block acc\" id=\"accountModal\"></a>

   </div>

   

   <div class=\"col-md-4 col-sm-4 col-xs-12\">

     <a class=\"center-block sit\" href=\"catchup.php\"></a>

   </div>

   <div class=\"col-md-4 col-sm-4 col-xs-12\">

     <a href=\"\" class=\"center-block logoutBtn log\"></a>

   </div>

</div>

";



$ExpiryData = "";

if ($_SESSION["webTvplayer"]["exp_date"] == "null" || $_SESSION["webTvplayer"]["exp_date"] == "") {

    $ExpiryData = "Unlimited";

} else {

    $ExpiryData = date("F d, Y", $_SESSION["webTvplayer"]["exp_date"]);

}

echo "        <h4 class=\"text-center\" style=\"color: #fff; top: 50px; float:left;width: 100%;position: relative;    text-transform: uppercase;\">Expiration: ";

echo $ExpiryData;

echo "</h4>\r\n    </div>\r\n</div>\r\n</div>\r\n";

include "includes/footer.php";



?>