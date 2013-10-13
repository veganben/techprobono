<?php
include 'connect.php';

if (isset($_POST['email']) && !(empty($_POST['email']))){
	$orgname = mysql_real_escape_string($_POST['orgname']);
	$website = mysql_real_escape_string($_POST['website']);
	$email = mysql_real_escape_string(strip_tags($_POST['email']));

    $alreadyRegistered = mysql_query("SELECT id FROM `CAUSES` WHERE `email` = '$email'");
    if (mysql_num_rows($alreadyRegistered) > 0){
        $json =   '{"error": "already_registered"}';
    } else {
        $query_insertOrg = "INSERT INTO `CAUSES` (`orgname`,`website`, `github`) VALUES ('$orgname', '$website', '$github')";
        $insertOrg = mysql_query($query_insertOrg);
        $insertId = mysql_insert_id($con) || "error";
        mysql_close($con);
        $json =  '{"id": "' . $insertId . '"}';
    }
} else {
    $json =   '{"error": "noemail"}';
}

header("Content-Type: application/json; charset=utf-8");
echo utf8_encode($json);

?>
