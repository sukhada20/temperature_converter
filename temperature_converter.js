function showTime() {
	document.getElementById('currentTime').innerHTML = new Date().toUTCString();
}
showTime();
setInterval(function () {
	showTime();
}, 1000);

function convertTemp() {
  let temperatureInput = parseFloat(document.getElementById('temperature').value);
  let resultC = document.getElementById('outputCelsius');
  let resultF = document.getElementById('outputFahrenheit');
  let resultK = document.getElementById('outputKelvin');
  
  if (isNaN(temperatureInput)) {
    resultC.innerText = "Invalid input";
    resultF.innerText = "Invalid input";
    resultK.innerText = "Invalid input";
    return;
  }
  
  if (document.getElementById('C').checked) {
    let Fahrenheit = (temperatureInput * 9/5) + 32;
    let Kelvin = temperatureInput + 273.15;
    resultC.innerText = `${temperatureInput.toFixed(2)} C `;
    resultF.innerText = `${Fahrenheit.toFixed(2)} F `;
    resultK.innerText = `${Kelvin.toFixed(2)} K `;
  } else if (document.getElementById('F').checked){
    let Celsius = (temperatureInput - 32) * 5/9;
    let Kelvin = ((temperatureInput - 32) / 1.8) + 273.15;
    resultC.innerText = `${Celsius.toFixed(2)} C `;
    resultF.innerText = `${temperatureInput.toFixed(2)} F `;
    resultK.innerText = `${Kelvin.toFixed(2)} K `;
  } else if (document.getElementById('K').checked) {
    let Celsius = temperatureInput - 273.15;
    let Fahrenheit = ((temperatureInput - 273.15) * 1.8) + 32;
    resultC.innerText = `${Celsius.toFixed(2)} C `;
    resultF.innerText = `${Fahrenheit.toFixed(2)} F `;
    resultK.innerText = `${temperatureInput.toFixed(2)} K `;
  } else {
    resultC.innerText = "Please select a unit";
    resultF.innerText = "Please select a unit";
    resultK.innerText = "Please select a unit";
  }
}

document.getElementById('temperature').addEventListener('input', convertTemp);
