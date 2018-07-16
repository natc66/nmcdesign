<?php
    error_reporting(E_ALL);
    header("Content-Type: application/json");
    getImages();
    
    function getImages () {
        $list = file("etcFiles.txt");
        $output = array();
        for ($i = 0; $i < count($list); $i += 4) {
            $array = array();
            $array["class"] = trim($list[$i]);
            $array["img"] = trim($list[$i + 1]);
            $array["alt"] = trim($list[$i + 2]);
            $array["caption"] = trim($list[$i + 3]);
            array_push($output, $array);
        }
        print(json_encode($output));
    }

?>
