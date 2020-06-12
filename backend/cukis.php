<?php

include "conexion.php";


$dbConnexion =  connect($db);
  //Obtener cukis
if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
      $sql = $dbConnexion->prepare("SELECT * FROM cukis");
      $sql->execute();
      $sql->setFetchMode(PDO::FETCH_ASSOC);
      header("HTTP/1.1 200 OK");
      echo json_encode( $sql->fetchAll()  );
      exit();
}



//Actualizar
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    $inpt = $_GET;
    $userCuki = $inpt['id'];
    $fields = getParams($inpt);

    $sql = "
          UPDATE cukis
          SET $fields
          WHERE id='$userCuki'
           ";

    $statent = $dbConnexion->prepare($sql);
    bindAllValues($statent, $input);

    $statent->execute();
    header("HTTP/1.1 200 OK");
    exit();
}


?>

