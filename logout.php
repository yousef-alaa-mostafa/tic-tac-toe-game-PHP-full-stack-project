<?php
//REMOVE THE COOKIE AND REDIRECT TO THE RIGHT PAGE
setcookie("LoggedIn", "true", time() - 1000);
    
header("Location: index.php");
?>