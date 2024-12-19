function login(){
    var login = document.getElementById("t1").value;
    var password = document.getElementById("h1").value;
    if(login == "admin" && password == "admin")
    {
        window.location.href="Oui.html";
    }
    else {
        alert ("identifiants non reconnus");
        window.location.href='non.html';
    }
}

function retour(){
    document.getElementById ("t1").value="";
    document.getElementById ("h1").value="";
}
