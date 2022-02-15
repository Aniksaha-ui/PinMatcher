function getPin() {
  const pinNumber = Math.round(Math.random() * 10000).toString();
  if (pinNumber.length >= 4) {
    return pinNumber;
  } else {
    getPin();
  }
}

function generatePin() {
  var pin = getPin();
  var pinField = document.getElementById("pinNumber");
  pinField.value = pin;
}

//get keypad listener

document.getElementById("key-pad").addEventListener("click", function (event) {
  var valueInput = event.target.innerText;
  var calculatorInputField = document.getElementById("calculator-input");
  if (isNaN(valueInput)) {
    if (valueInput == "C") {
      calculatorInputField.value = "";
    } else {
      //   console.log(valueInput);
    }
  } else {
    var calculatorValue = calculatorInputField.value;
    var totalCalculatorValue = calculatorValue + valueInput;
    calculatorInputField.value = totalCalculatorValue;
  }
});

//After submit varify pin number

function submitHandler() {
  var generatePin = document.getElementById("pinNumber").value;
  var typedPin = document.getElementById("calculator-input").value;
  if (generatePin == typedPin) {
    document.getElementById("match").style.display = "block";
    document.getElementById("not-matched").style.display = "none";
  } else {
    document.getElementById("not-matched").style.display = "block";
    document.getElementById("match").style.display = "none";
  }
}
