<?php
    include 'conexao.php';

    $sql = "DELETE FROM produto WHERE idProduto = $_GET[codigo]";

    $resultado = mysqli_query($conexao, $sql);

    if ($resultado) {
        header("location: listarProduto.php");
    } else {
        die("Erro: " . mysqli_error($conexao));
    }