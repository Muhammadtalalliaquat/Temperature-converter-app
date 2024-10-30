
// converter Temperature Feature

function convertTemperature() {

  let temperatureInput = document.getElementById("temperature").value;
  let formUnit = document.getElementById("fromUnit").value;
  let toUnit = document.getElementById("toUnit").value;

  if (isNaN(temperatureInput)) {
    return;
  }

  let temperature = parseFloat(temperatureInput);
  let convertTemperatures;

  if (formUnit === "celsius") {

    if (toUnit === "fahrenheit") {
      convertTemperatures = (temperature * 9) / 5 + 32;

    } 
    else if (toUnit === "kelvin") {
      convertTemperatures = temperature + 273.15;
    } 
    else {
      convertTemperatures = temperature;
    }
  } 
  else if (formUnit === "fahrenheit") {

    if(toUnit === "celsius"){
      convertTemperatures = (temperature - 32) * 5 / 9;
    }
    else if(toUnit === "kelvin"){
      convertTemperatures = (temperature + 459.67) * 5 / 9;
    }
    else{
      convertTemperatures = temperature;
    }
  }
  else if(formUnit === "kelvin") {

    if(toUnit === "celsius"){
      convertTemperatures = temperature - 273.15;
    }
    else if(toUnit === "fahrenheit"){
      convertTemperatures = (temperature * 9 / 5) - 459.67;
    }
    else{
      convertTemperatures = temperature;
    }
  }

  let resultUnitVal = document.getElementById("result");
  resultUnitVal.innerHTML = convertTemperatures.toFixed(2) + " " + toUnit;
  resultUnitVal.className += " show-result"; 

}
