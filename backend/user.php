<?php

include "conexion.php";


$dbConn =  connect($db);

if ($_SERVER['REQUEST_METHOD'] == 'GET')
{
    if (isset($_GET['id']))
    {
      //Obtiene un usuario por id
      $sql = $dbConn->prepare("SELECT * FROM usuario where id=:id");
      $sql->bindValue(':id', $_GET['id']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
	  }
	  
	   //Obtiene un usuario por un campo
	  elseif(isset($_GET['content']))
	  { $sql = $dbConn->prepare("SELECT * FROM usuario where content=:content");
      $sql->bindValue(':content', $_GET['content']);
      $sql->execute();
      header("HTTP/1.1 200 OK");
      echo json_encode(  $sql->fetch(PDO::FETCH_ASSOC)  );
      exit();
	  }
    else {
      //Obtiene todos los usuarios
      $sql = $dbConn->prepare("SELECT * FROM usuario");
      $sql->execute();
      $sql->setFetchMode(PDO::FETCH_ASSOC);
      header("HTTP/1.1 200 OK");
      echo json_encode( $sql->fetchAll()  );
      exit();
	}
}

// Crea nuevo usuario
if ($_SERVER['REQUEST_METHOD'] == 'POST')
{
    $input = $_POST;
    $sql ="INSERT INTO usuario
          (comenta_admin, direccion, edad_compra, email, facebook, id, instagram, nombre, sexo_compra, telefono, twitter)
          VALUES(:comenta_admin, :direccion, :edad_compra, :email, :facebook, :id, :instagram, :nombre, :sexo_compra, :telefono, :twitter)";
    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);
    $statement->execute();
    $userId = $dbConn->lastInsertId();
    if($userId)
    {
      $input['id'] = $postId;
      header("HTTP/1.1 200 OK");
      echo json_encode($input);
      exit();
	 }
}


//Actualizar
if ($_SERVER['REQUEST_METHOD'] == 'PUT')
{
    $input = $_GET;
    $userId = $input['id'];
    $field = getParams($input);

    $sql = "
          UPDATE usuario
          SET $field
          WHERE id='$userId'
           ";

    $statement = $dbConn->prepare($sql);
    bindAllValues($statement, $input);

    $statement->execute();
    header("HTTP/1.1 200 OK");
    exit();
}


?>
