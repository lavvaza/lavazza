<?php

    require_once 'config.php';

    session_start();

    header("Content-Type: text/html; charset=iso-8859-1");

    if(isset($_POST['mode']) && $_POST['mode'] == "entry") 
    {
        $message = createOrUpdate($db_config);
        echo json_encode(array('status' => "success","data"=>$row,"message"=> $message));
    }


    function createOrUpdate($db_config)
    {
        $id = session_id();
        $blend = $_POST['blend_name'];
        $current_stage = $_POST['stage'];
        $starttime = date("Y-m-d H:i:s");
        $endtime = date("Y-m-d H:i:s");

        $conn = new mysqli($db_config["host"],$db_config["user"],$db_config["password"],$db_config["database"]);

        if ($conn->connect_error)
        {
            die("Connection failed: " . $conn->connect_error);
        } 

        $sql = "SELECT id FROM user_experience where = '$id'";

        $result = $conn->query($sql);

        if ($result->num_rows > 0) 
        {
            updateRecord($db_config);
        }
        else 
        {
            createRecord($db_config);
        }
    }




    function createRecord($db_config)
    {
        $id = session_id();
        $blend = $_POST['blend_name'];
        $current_stage = $_POST['stage'];
        $starttime = date("Y-m-d H:i:s");
        $endtime = date("Y-m-d H:i:s");

        $conn = new mysqli($db_config["host"],$db_config["user"],$db_config["password"],$db_config["database"]);

        if ($conn->connect_error)
        {
            die("Connection failed: " . $conn->connect_error);
        } 
        
        $sql = "REPLACE INTO user_experience (id,blend_name,stage,starttime,endtime) 
        VALUES ('$id','$blend','$current_stage','$starttime','$endtime')";

        if(mysqli_query($conn, $sql)) 
        {
        return "Executed successfully!";
        } 
        else 
        {
        return "Error: " . $sql . " " . mysqli_error($conn);
        }
    }

    function updateRecord($db_config)
    {
        $id = session_id();
        $blend = $_POST['blend_name'];
        $current_stage = $_POST['stage'];
        $endtime = date("Y-m-d H:i:s");

        $conn = new mysqli($db_config["host"],$db_config["user"],$db_config["password"],$db_config["database"]);

        if ($conn->connect_error)
        {
            die("Connection failed: " . $conn->connect_error);
        } 
        
        $sql = "UPDATE user_experience SET 
        stage= '$current_stage',
        endtime= '$endtime' WHERE id= '$id'";

        if(mysqli_query($conn, $sql)) 
        {
            return "Executed successfully!";
        } 
        else 
        {
            return "Error: " . $sql . " " . mysqli_error($conn);
        }
    }
   
?>