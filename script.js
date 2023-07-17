var upC = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lwC = "qwertyuiopasdfghjklmnbvcxz";
var numbers = "0123456789";
var symbols = "!@#$%^&*()_+-'=[]{}<>?.,;:/\\" + '"';
var button = document.getElementById('btn');
button.onclick = function () {
    var length = document.getElementById('wordLen').value;
    var u = document.getElementById('upc').checked;
    var l = document.getElementById('lwc').checked;
    var n = document.getElementById('num').checked;
    var s = document.getElementById('sym').checked;
    var password = generatePassword(length, u, l, n, s);
}

function generatePassword(len, u, l, n, s ) {
    var cnt = u + l + n + s;
    if(cnt > len){
        alert("Number of characters to be choosed is greater than length of password");
        return "";
    }
    if(cnt === 0)
    {
        alert("Atleast Select one Character");
        return "";
    }
    if(len > 26) {
        alert("password length is too largr");
        return "";
    }
    len -= cnt;
    var password = "";
    for (let i = 0; i < len; i++) {
       var sele = Math.floor(Math.random() * 4);
       if(sele == 0) { password += upC[Math.floor(Math.random() * 26)];}
       else if(sele == 1) { password += lwC[Math.floor(Math.random() * 26)];}
       else if(sele == 2) { password += numbers[Math.floor(Math.random() * 10)];}
       else if(sele == 3) { password += symbols[Math.floor(Math.random() * 29)];}
    }
    if(u) {
        var ran = Math.floor(Math.random() * password.length);
        password = password.substring(0, ran) + upC[Math.floor(Math.random() * 26)] + password.substring(ran, password.length);
    }
    if(l) {
        var ran = Math.floor(Math.random() * password.length);
        password = password.substring(0, ran) + lwC[Math.floor(Math.random() * 26)] + password.substring(ran, password.length);
    }
    if(n) {
        var ran = Math.floor(Math.random() * password.length);
        password = password.substring(0, ran) + numbers[Math.floor(Math.random() * 10)] + password.substring(ran, password.length);
    }
    if(s) {
        var ran = Math.floor(Math.random() * password.length);
        password = password.substring(0, ran) + symbols[Math.floor(Math.random() * 29)] + password.substring(ran, password.length);
    }
    document.getElementById('res').innerHTML = password;
}

var cpy = document.getElementById("clip");
cpy.onclick = function () {
    if(document.getElementById('res').innerHTML == "") {
        alert("nothing to copy");
    }
    else {
        navigator.clipboard.writeText(document.getElementById('res').innerHTML);
        alert("Copied to Clipboard!");
    }
}