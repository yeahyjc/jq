<?php
header("Content-type:text/html;charset=utf-8");
if($_POST){
$dsn="mysql:host=localhost:3306;dbname=test";
$user = 'root';
$password = '';
try{
$pdo = new pdo($dsn,$user,$password
);
}catch(Exception $e){
	echo '错误'.$e->getmessage();
}
$name = $_POST['name'];
$pwd = ($_POST['pwd']);
$sql = "insert into user (username,password) values ('$name','$pwd')";
$exec = $pdo->exec($sql);
if($exec){
        echo  "<script>alert('注册成功，正在前往登录页面');location.href='../login.html'</script>";
}else{
         echo  "<script>alert('失败');location.href='../register.html'</script>";
}
}
?>