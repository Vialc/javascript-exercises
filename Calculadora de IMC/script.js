var peso, altura, imc, resultado;


function calcular(event) {
  event.preventDefault();
  
  peso = document.getElementById('peso').value;
  altura = document.getElementById('altura').value;

  imc = peso / (altura * altura);

  resultado = document.getElementById('resultado')

  if (imc < 17) {
    resultado.innerHTML = `<br/> Seu resultado foi de ${imc.toFixed(2)}. <br/> Cuidado! Você está muito abaixo do peso!`
  } else if (imc > 17 && imc <= 18.49) {
    resultado.innerHTML = `<br/> Seu resultado foi de ${imc.toFixed(2)}. <br /> Você está abaixo do peso.`
  } else if (imc > 18.49 && imc <= 24.99) {
    resultado.innerHTML = `<br/> Seu resultado foi de ${imc.toFixed(2)}. <br /> Você está no peso ideal.`
  } else if (imc > 24.99 && imc <= 29.99) {
    resultado.innerHTML = `<br/> Seu resultado foi de ${imc.toFixed(2)}. <br /> Você está acima do peso.`
  } else if (imc > 29.99) {
    resultado.innerHTML = `<br/> Seu resultado foi de ${imc.toFixed(2)}. <br /> Cuidado! Obesidade`
  }
}