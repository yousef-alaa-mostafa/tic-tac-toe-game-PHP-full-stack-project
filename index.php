<?php

// MAKE SURE THE USER IS AUTHENTICATED AND MAKE HIM PLAY THE GAME OR SIGN IN
if(isset($_COOKIE["LoggedIn"]))
    header("Location: tictactoe.html");
else
    header("Location: login.html");
?> 