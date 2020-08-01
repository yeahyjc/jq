<?php
header("Content-type:text/html;charset=utf-8");
if($_POST){
$dsn="mysql:host=localhost:3306;dbname=test";
$user = 'root';
$password = '';
try{
$pdo = new pdo($dsn,$user,$password);
}
catch(Exception $e){
	echo '错误'.$e->getmessage();
}
$name = $_POST['name'];
$pwd = $_POST['pwd'];
 if($name == "" || $pwd == "")  
        {  
            echo "<script>alert('请输入用户名或密码！'); history.go(-1);</script>";  
        }  
if($name && $pwd){
$sql = "select * from user where username='$name' and password='$pwd'";
$sql1 = "select username from user where username='$name'";
$sql2 = "select password from user where password='$pwd'";
$stmt = $pdo->query($sql);
$stmt1 = $pdo->query($sql1);
$stmt2 = $pdo->query($sql2);
$info = $stmt->fetchAll(PDO::FETCH_ASSOC);
$info1 = $stmt1->fetchAll(PDO::FETCH_ASSOC);
$info2 = $stmt2->fetchAll(PDO::FETCH_ASSOC);	
if($info){
     echo  "<script>alert('登录成功，正在前往首页');location.href='../index.html'</script>";
}
if(!$info1){
	 echo  "<script>alert('该账号没有注册，请注册！');location.href='../register.html'</script>";
}
if(!$info2){
	 echo  "<script>alert('密码错误！请重试');location.href='../login.html'</script>";
}
}
}
?>