<?php
$servername="localhost";
$username="root";
$password="";
$database_name="sgt_final";

$conn=mysqli_connect($servername,$username,$password,$database_name);

if(!$conn)
{
    die("Connection Failed:" . mysqli_connect_error());

}

if(isset($_POST['save']))
{
    $name_me = $_POST['name_me'];
    $email = $_POST['email'];
    $message_me = $_POST['message_me'];

    $sqli_query = "INSERT INTO contact_info (name_me,email,message_me)
    VALUES ('$name_me','$email','$message_me')";
}

if (mysqli_query($conn, $sqli_query))
{
    echo "We have received Your info and will contact You shortly!";
}
else
{
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
?>
