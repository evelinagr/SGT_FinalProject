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
    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];
    $e_mail = $_POST['e_mail'];
    $phone = $_POST['phone'];
    $delivery = $_POST['delivery'];
    $whereto = $_POST['whereto'];

    $sqli_query = "INSERT INTO order_details (first_name,last_name,e_mail,phone,delivery,whereto) 
    VALUES ('$first_name','$last_name','$e_mail','$phone','$delivery','$whereto')";
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
