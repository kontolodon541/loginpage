var btnLogin = document.getElementById('do-login');
var idLogin = document.getElementById('login');
var username = document.getElementById('username');
btnLogin.onclick = function(){
  idLogin.innerHTML = '<p> Tunggu samapai ip addres ada di layar OLED ya... </p><h1>' +username.value+ '</h1>';
}