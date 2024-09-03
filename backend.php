<?php
$method = $_SERVER['REQUEST_METHOD'];

if ($method == "GET") {
    $conn = mysqli_connect("localhost", "root", "", "villagers");
    validate($conn, 'Establishing database connection failed (internal error)', 500);

    $villager[] = getNewVillager($conn);

    echo json_encode($villager);
} else if ($method == "POST") {
    $body = file_get_contents("php://input");
    $request = json_decode($body, true);

    $conn = mysqli_connect("localhost", "root", "", "villagers");
    validate($conn, 'Establishing database connection failed (internal error)', 500);

    $villagerGuess[] = getGuessVillager($conn, $request['name']);

    echo json_encode($villagerGuess);
}

function validate($condition, $message, $code)
{
    if (!$condition) {
        echo json_encode(['message' => $message]);
        http_response_code($code);
        exit;
    }
}

function getNewVillager($conn)
{
    $query = "select * from villagerlist";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);
    $villager = [];
    while ($row = mysqli_fetch_assoc($res)) {
        $villager[] = $row;
    }
    return selectRandomVillager($villager);
}

function selectRandomVillager($villager)
{
    $possibleNr = count($villager);
    $randomNr = rand(0, $possibleNr - 1);
    return $villager[$randomNr];
}

function getGuessVillager($conn, $name)
{
    $query = "SELECT bezeichnung, species, gender, personality FROM villagerlist WHERE bezeichnung = ?";
    $stmt = mysqli_prepare($conn, $query);
    mysqli_stmt_bind_param($stmt, 's', $name);
    mysqli_stmt_execute($stmt);
    $res = mysqli_stmt_get_result($stmt);

    if ($res) {
        $villagerGuess = mysqli_fetch_object($res);
    } else {
        $villagerGuess = null; // or handle this case as needed
    }
    
    return $villagerGuess;

}

?>