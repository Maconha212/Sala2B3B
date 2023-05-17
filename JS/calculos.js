document.querySelector("#btnSomar").addEventListener("click",somarIMC);

function somarIMC(){
    var peso = parseFloat(document.querySelector("#peso").value);
    var altura = parseFloat(document.querySelector("#altura").value);
    var soma = peso / (altura * altura);

    document.querySelector("#resultado").value = soma;
}
// const bSomar = document.querySelector("#btnSomar");
// bSomar.addEventListener("click", ()=>{
//     var n1 = parseFloat(document.querySelector("#numero1").value);
//     var n2 = parseFloat(document.querySelector("#numero2").value);
// })

// function somar(p1, p2){
//     var soma = p1+p2;
//     document.querySelector("#resultado").value = soma;
// }

