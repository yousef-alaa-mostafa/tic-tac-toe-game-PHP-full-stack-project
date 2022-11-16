<?php
//CHECK WHETHER THE FORM WAS SUBMITTED AS GET OR POST
if($_SERVER['REQUEST_METHOD'] == "POST")	
	signup();
else
	signin();


function signin(){

	$file = fopen("users.txt", "r");
	$email = $_GET["emauil_us"];
	$password = $_GET["pass_us"];

	while(!feof($file))
	{
		$details = explode(",", fgets($file));
		// print_r($details);
		$db_password = preg_replace('/\s+/', '', $details[2]);
		
		if($email == $details[1] && $password == $db_password ) { 
			// var_dump($password);
			setcookie("LoggedIn", "true", time() + 10000000);
			break;
		}
	}

	fclose($file);
	header("Location: index.php");
}


function signup(){

	$file = fopen("users.txt", "r+");
	$email = $_POST["emauil_us"];
	$password = $_POST["pass_us"];
	$match_passwor = $_POST["conf_pass_us"];
	$name = $_POST["name_us"];
	$found = false;

	while(!feof($file))
	{
		$details = explode(",", fgets($file));
		if($email == $details[1]) {
			$found = true;
			break;
		}

	}

	if($found == false && $password == $match_passwor && strlen($password)>8) {
		$message = $name.",".$email.",".$password;
		fwrite($file, "\n".$message."\n");
		setcookie("LoggedIn", "true", time() + 10000000);
	}

	fclose($file);
	header("Location: index.php");
}

?>