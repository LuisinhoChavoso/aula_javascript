function botao(){
    document.getElementById("arigato").innerHTML = "<i><b>Obrigado por Clicar!!!</b></i>";
    console.log(document.getElementById("arigato"));
    //alert("Obrigado por Clicar!!!")
}

function redirecionar(){
    //window.open("https://google.com");
    window.location.href = "https://google.com";
}

function passar(elemento){
    elemento.innerHTML = "Ei, eu não estava falando sério";
    //document.getElementById("mousemove").innerHTML = "Ei, eu não estava falando sério";
    //alert("");
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui!!!"
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui!!!";
}

function loading(){
    alert("Página Carregada!!!");
}

function funcaochange(elemento){
    console.log(elemento.value)
}

/*
function soma(n1,n2) {
    return n1 + n2;
}
*/

/*
alert(soma(15,15));

function validaIdade() {
    var validar;
    if(idade >= 18){
    validar = true;
}else{
    validar = false;
}
return validar;
}

var idade = prompt("Qual sua Idade?");
console.log(validaIdade(idade));
*/

/*
function setReplace(frase, nome, novo_nome){
    return frase.replace(nome,novo_nome);
}

alert(setReplace("Vai Japão","Japão","Brasil"));
*/

/*
var d = new Date();
//alert(d.getMonth()+1);
//alert(d.getDay());
alert(d.getHours());
alert(d.getMinutes());
*/

/*
var count;
for(count=0; count<=5; count++){
    alert(count);
}
*/

/*
var count = 0;
while (count <= 5){
    console.log(count);
    count++;
};
*/

/*
var idade = prompt("Qual sua idade?");

if (idade >= 18) {
    alert("maior de idade");
}else{
    alert("menor de idade");
}
*/


//var frutas = [{nome: "maçã", cor: "vermelha"},{nome: "uva", cor: "roxa"}];
//console.log(frutas);
//alert(frutas[1].nome);

//var lista = ["maçã","pêra","laranja"];
//lista.push = "uva"; //coloca um item no array
//lista.pop(); //tira o último item do array
//console.log(lista.length); //mostra quantos items tem no array
//console.log(lista.reverse()); //inverte a lista do array
//console.log(lista);
//console.log(lista.toString()); //transforma o array em string
//console.log(lista.join(" - ")); //transforma em string e torna ele moldavel

/*
var nome = "Pedro Joseph";
var idade = 17;
var idade2 = 22;
var frase = "Cuscuz é muito bom!";
var frase2 = "ABOBRINHA";

//alert(nome + " tem " + idade + " anos");
//alert(idade + idade2);

//alert(frase.replace("bom", "ruim"));
console.log(frase.replace("Cuscuz", "Dormir"));
console.log(frase.toUpperCase());
console.log(frase2.toLowerCase());
*/