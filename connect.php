<?php
    $firstName = $_POST['firstName'];
    $email = $_POST['email'];
    $friendCode = $_POST['friendCode'];
    $kysely = $_POST['kysely'];
    $message = $_POST['message'];

    // DATABASE CONNECTION
    $con = new mysqli('localhost','root','','tietokanta');
    if($conn->connect_error) {
        die('Connection Failed : '.$conn->connect_error);
    } else {
        $stmt = $conn->prepare("insert into registration(firstName, email, friendCode, kysely, message) values(?, ?, ?, ?, ?)");
        $stmt->bind_param("sssss", $firstName, $email, $friendCode, $kysely, $message);
        $stmt->execute();
        echo "Registration Successfully";
        $stmt->close();
        $conn->close();
?> 