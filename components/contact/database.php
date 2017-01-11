<?php
//connect to database
$conn = mysqli_connect("localhost","root","abc","portfolio");

if(mysqli_execute_errno())
{
	echo 'failed to connect:'.mysqli_connect_error();
}

?>