
function imc(){
    var peso = document.getElementById("txtpeso");
    var altura = document.getElementById("txtaltura");
    var recebe = document.getElementById("resultado");
    
    var sexo = document.getElementsByName("sexo");
    var genero = '';

    var p = parseFloat(peso.value);
    var a = parseFloat(altura.value);

    var imc = p/(Math.pow(a,2));
    if(sexo[0].checked){
    	genero = "Mulher";
    }else if(sexo[1].checked){
    	genero="Homem";
    }
    var paragrafo = document.createElement('p');
    var texto  = document.createTextNode(`Sua altura é de ${altura.value} M e seu peso é de ${peso.value}KG o seu 
         é um(a) ${genero} seu IMC é de ${imc.toFixed(1)}`);
    paragrafo.appendChild(texto);

    if(imc < 18.5){
        recebe.innerHTML = `<p><strong>Abaixo do peso</strong></p>`;
    }else if(imc >= 18.6 && imc <= 24.9){
        recebe.innerHTML = `<p><strong>Peso normal</strong></p>`;
    }else if(imc >= 25 && imc <= 29.9){
        recebe.innerHTML = `<p><strong>Sobrepeso</strong></p>`;
    }else if(imc >= 30 && imc <= 34.9){
        recebe.innerHTML = `<p><strong>Obesidade Grau 1</strong></p>`;
    }else if(imc >= 35 && imc <= 39.9){
        recebe.innerHTML = `<p><strong>Obesidade Grau 2</strong></p>`;
    }else{
        recebe.innerHTML = `<p><strong>Obesidade Grau 3</strong></p>`;
    }
    recebe.appendChild(paragrafo);
}