<?php
Header("content-type: application/json");

$appdata = array(
    "name" => "testapp",
    "items" => array(
        array(
            "text" => "Options",
            "icon" => "1352272443_setting.png",
            "handler" => "option"
        ),
        array(
            "text" => "Open Location",
            "icon" => "1352272722_Arzo Icons Icon 24 2.png",
            "handler" => "location"   
        )
    )
);

echo json_encode($appdata);

?>
