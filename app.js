let entrada_texto="";
let salida_texto="";
const char={
    "a":"ai",
    "e":"enter",
    "i":"imes",
    "o":"ober",
    "u":"ufat"
}


function encrypt(){
    entrada_texto=document.getElementById('input').value;
    salida_texto=entrada_texto;
    salida_texto=salida_texto.replace(/[aeiou]/g, m=> char[m]);
    //alert(salida_texto);
    document.getElementById('input').value="";
    document.getElementById('output').innerText=salida_texto;
}

function decrypt(){
    entrada_texto=document.getElementById('input').value;
    salida_texto=entrada_texto
    .replaceAll("ai","a")
    .replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ober","o")
    .replaceAll("ufat","u");
    //alert(salida_texto);
    document.getElementById('input').value="";
    document.getElementById('output').innerText=salida_texto;
}

function copy(){
    navigator.clipboard.writeText(salida_texto);
}

function cleard(){
    document.getElementById('output').innerText="";
}