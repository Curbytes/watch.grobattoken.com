<!DOCTYPE html>
<?php
	include "includes/header.php";

	if (!empty($_SESSION["webTvplayer"])){
		header("Location: dashboard.php");
		die();
	}
?>
<div class="container" style="height: 100vh;display: grid;">
	<center>
		<img class="img-responsive" src="images/logo.png" alt="" onerror="this.src='img/logo.png';" width="200px" style="margin-top: 40px;">

		<div class="alert alert-success" role="alert">
		  <h4 class="alert-heading">Welcome to $CWI live stream</h4>
		  <p>This site requires metamask wallet to authenticate your wallet account.</p>
		  <p>You are required to hold atleast <b><span id="min_token"></span> $CWI tokens</b> to access this site.</p>
		</div>

		<button type='button' class='btn btn-lg btn-success' id='connectButton'>Connect Wallet</button>
		<button type='button' class='btn btn-lg btn-danger' style="display: none" id='disconnectButton'>Disconnect Wallet</button>
	</center>
</div>
<?php
	include "includes/footer.php";
?>