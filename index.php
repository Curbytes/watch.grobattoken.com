<!DOCTYPE html>
<?php
    include "includes/header.php";

    if (!empty($_SESSION["webTvplayer"])){
        header("Location: dashboard.php");
        die();
    }

    $cookieusername = isset($_COOKIE["username"]) ? $_COOKIE["username"] : "";
    $FinalUsername = isset($_GET["username"]) ? $_GET["username"] : $cookieusername;
    $cookiepassword = isset($_COOKIE["userpassword"]) ? base64_decode($_COOKIE["userpassword"]) : "";
    $FinalPassword = isset($_GET["password"]) ? $_GET["password"] : $cookiepassword;

    $cookieserver = isset($_COOKIE["server"]) ? $_COOKIE["server"] : "";
    $Finalserver = isset($_GET["server"]) ? $_GET["server"] : $cookieserver;

    echo "<style type=\"text/css\">\r\n  .addborder {\r\n      border: 1px solid red !important;\r\n  }\r\n  .hideOnload\r\n  {\r\n    display: none !important;\r\n  }\r\n  div#FailLOginMessage {\r\n      position: fixed;\r\n      top: -100%;\r\n      text-align: center;\r\n      left: 35%;\r\n      width: 30%;\r\n  }\r\nbody{background:black;}</style>\r\n<!-- <nav class=\"navbar navbar-inverse navbar-static-top\">\r\n    <div class=\"container full-container navb-fixid\">\r\n      <div class=\"navbar-header\">\r\n        \r\n      </div>\r\n      <a class=\"\" href=\"#\"><img class=\"img-responsive\" src=\"img/logo.png\" alt=\"\" width=\"187px\"></a>\r\n      \r\n     //.nav-collapse\r\n    </div>\r\n  </nav> -->\r\n  <div class=\"alert alert-danger \" id=\"FailLOginMessage\">\r\n      <strong>Error!</strong> <span id=\"ErrorText\">Invalid Details</span>\r\n  </div>\r\n<div class=\"container-fluid\">\r\n        <!-- Login Wrapper -->\r\n        <center><a href=\"dashboard.php\"><img class=\"img-responsive\" src=\"";
    echo isset($XClogoLinkval) && !empty($XClogoLinkval) ? $XClogoLinkval : "img/logo.png";
    echo "\" alt=\"\" onerror=\"this.src='img/logo.png';\" width=\"200px\" style=\"margin-top: 40px;\"></a>\r\n        </center>\r\n          <div class=\"midbox\">\r\n            <h3>Login With Your Account</h3>\r\n<form>\r\n";

    $db = new SQLite3('./admin/api/.db.db');
    $res = $db->query('SELECT * FROM dns');
    $rows = $db->query("SELECT COUNT(*) as count FROM dns");
    $row = $rows->fetchArray();
    $numRows = $row['count'];


    echo $Finalserver;
    echo"   <div class=\"form-group\">\r\n                <label>Username</label>\r\n                <input type=\"username\" class=\"form-control logininputs\" id=\"input-login\" placeholder=\"Username\" value=\"";
    echo $FinalUsername;
    echo "\">\r\n              </div>\r\n              <div class=\"form-group\">\r\n                <label>Password</label>\r\n                <input type=\"password\" class=\"form-control logininputs\" id=\"input-pass\" placeholder=\"Password\" value=\"";
    echo $FinalPassword;
    echo "\">\r\n              </div>\r\n              <div class=\"col-lg-6 col-md-6 col-sm-6 col-xs-6 form_left\">\r\n                <div class=\"checkbox checkbox_new\">\r\n                  <label>\r\n                    <input type=\"checkbox\" id=\"rememberMe\"> Remember me\r\n                  </label>\r\n                </div>\r\n              </div>\r\n              <div class=\"form-group text-right\">\r\n                <button type=\"submit\" class=\"btn btn-ghost webtvloginprocess rippler rippler-default\">LOGIN <i class=\"fa fa-spin fa-spinner hideOnload\" id=\"loginProcessIcon\"></i></button>\r\n              </div>\r\n            </form>\r\n          </div>\r\n        <!-- /Login Wrapper -->\r\n      </div>\r\n      ";
?>
<!-- <div class="container" style="height: 100vh;display: grid;">
    <center>
        <img class="img-responsive mb-5" src="images/logo.png" alt="" width="200px" style="margin-top: 40px;">

        <div class="alert alert-success" role="alert">
          <h4 class="alert-heading">Welcome to DogeTV live stream</h4>
          <p>This site requires metamask wallet to authenticate your wallet account.</p>
          <p>You are required to hold atleast <b><span id="min_token"></span> $DGTV tokens</b> to access this site.</p>
        </div>

        <button type='button' class='btn btn-lg btn-success' id='connectButton'>Connect Wallet</button>
        <button type='button' class='btn btn-lg btn-danger' style="display: none" id='disconnectButton'>Disconnect Wallet</button>
        </div>
    </center>
</div> -->
<?php
    include "includes/footer.php";
?>