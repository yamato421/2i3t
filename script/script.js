let a = "";
let b = "";
let valor = "";
let executar = "";
let temPonto = false;
let desligada = false;
soma = (a,b) => Number(a) + Number(b);
sub = (a,b) => Number(a) - Number(b);
mult = (a,b) => Number(a) * Number(b);
div = (a,b) => Number(a) / Number(b);
raiz = a => Math.sqrt(a);
equacao2Grau = (a,b,c) =>{
    let delta = sub(mult(b,b),mult(4,mult(a,c)));
    if (delta < 0) return "Não possui raiz Real.";
    if (delta == 0) return "x1 = x2 = " + div(-b,mult(2,a));
    return "x1 = " + div(soma(-b,raiz(delta)),mult(2,a)) + 
           " x2 = " + div(sub(-b,raiz(delta)),mult(2,a));
}


function mostrar_resultado(){
    document.getElementById("resultado").value = valor;
}
function calcular(){
    if(desligada) return;
    if(executar != ""){
        b = valor;
        if(executar == "soma") valor = soma(a,b);
        if(executar == "sub") valor = sub(a,b);
        if(executar == "div") valor = div(a,b);
        if(executar == "mult") valor = mult(a,b);
        if(executar == 'porc') valor = 0;
        if(executar == "raiz") valor = raiz(a);
        mostrar_resultado();
        executar = "";
        a = "";
        b = "";
        valor = "";
        temPonto = false;
    }
}
function desliga(){
    desligada = !desligada;
    if(desligada){
        zerar();
    }else{
        zerar();
        mostrar_resultado();
    }
    return desligada;
}
desliga();
function calcula_raiz(){
    if (valor == ""){
        valor = 0;
    }
    valor = raiz(valor);
    mostrar_resultado();
}
function porcentagem(){
    if(executar == "mult")
    b = valor;
    valor = div(mult(a,b),100);
    mostrar_resultado();
}
function zerar(){
    if (desligada) return;
    a = "";
    b = "";
    valor = "0";
    executar = "";
    mostrar_resultado();
    valor = "";
}
function operacao(op){
    if(desligada) return;
    executar = op;
    a = valor;
    valor = "";
}
function digitando(tecla){
    if(desligada) return;
   if (tecla == "."){
       if(!temPonto) {
         valor = valor + tecla;
         mostrar_resultado();
         temPonto = true;
       }
       return;
   }
   valor = valor + tecla;
   mostrar_resultado();
}
