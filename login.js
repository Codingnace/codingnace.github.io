

function check(){
	var username=document.getElementById('username').value;
    var password=document.getElementById('password').value;

	if (username==null ||username=="") {alert("name must be filled");
return false;
}
	if (password==null|| password=="") {alert("password must be filled");
return false;
}
alert("login succeccfull");
}