function calculo(){
var Altura = document.getElementById('Altura').value;
var Peso = document.getElementById('Peso').value;


var CalculoA = Altura*Altura;
var resultado= Peso/CalculoA;



if(resultado<18.5){
    alert('Você está abaixo do peso');
} else if(resultado>=18.5 && resultado<25){
    alert('Você está com o peso normal');
}else if(resultado>=25 && resultado<30){
    alert('Você está com sobrepeso');
}else if(resultado>=30 && resultado<35){
    alert('Você está com obesidade grau 1');
}else if(resultado>=35 && resultado<40){
    alert('Você está com obesidade grau 2');
}else if(resultado>=40){
    alert('Você está com obesidade grau 3'); 
}   

alert(`Sua massa Corporal é ${resultado.toFixed(2)}`);


}

function formatacao( valor ){
    console.log(valor);
    



}


