<?php
$servername="localhost";
$username="root";
$password="";
$database_name="sgt-final";

$conn=mysqli_connect($server_name,$username,$password,$database_name);

if(!$conn)
{
    die("Connection Failed:" . mysqli_connect_error());

}

if(isset($_POST['save']))
{
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $e_mail = $_POST['e_mail'];
    $phone = $_POST['phone'];
    $delivery = $_POST['delivery'];
    $address = $_POST['address'];

    $sqli_query = "INSERT INTO order_details (first_name,last_name,e_mail,phone,delivery,address) 
    VALUES ('$first_name' , '$last_name' , '$e_mail' , '$phone' , '$delivery' , '$address')";
}

if (mysqli_query($conn, $sql_query))
{
    echo "New Order Page entry inserted successfully!";
}
else
{
    echo "Error: " . $sql . "" . mysqli_error($conn);
}
mysqli_close($conn);
}
?>
