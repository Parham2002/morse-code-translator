"use strict";

var engMorseDictionary = [{// english: " ",
  // morse: "/",
}, {
  english: "A",
  morse: ".-"
}, {
  english: "B",
  morse: "-..."
}, {
  english: "C",
  morse: "-.-."
}, {
  english: "D",
  morse: "-.."
}, {
  english: "E",
  morse: "."
}, {
  english: "F",
  morse: "..-."
}, {
  english: "G",
  morse: "--."
}, {
  english: "H",
  morse: "...."
}, {
  english: "I",
  morse: ".."
}, {
  english: "J",
  morse: ".---"
}, {
  english: "K",
  morse: "-.-"
}, {
  english: "L",
  morse: ".-.."
}, {
  english: "M",
  morse: "--"
}, {
  english: "N",
  morse: "-."
}, {
  english: "O",
  morse: "---"
}, {
  english: "P",
  morse: ".--."
}, {
  english: "Q",
  morse: "--.-"
}, {
  english: "R",
  morse: ".-."
}, {
  english: "S",
  morse: "..."
}, {
  english: "T",
  morse: "-"
}, {
  english: "U",
  morse: "..-"
}, {
  english: "V",
  morse: "...-"
}, {
  english: "W",
  morse: ".--"
}, {
  english: "X",
  morse: "-..-"
}, {
  english: "Y",
  morse: "-.--"
}, {
  english: "Z",
  morse: "--.."
}, {
  english: "1",
  morse: ".----"
}, {
  english: "2",
  morse: "..---"
}, {
  english: "3",
  morse: "...--"
}, {
  english: "4",
  morse: "....-"
}, {
  english: "5",
  morse: "....."
}, {
  english: "6",
  morse: "-...."
}, {
  english: "7",
  morse: "--..."
}, {
  english: "8",
  morse: "---.."
}, {
  english: "9",
  morse: "----."
}, {
  english: "0",
  morse: "-----"
}];
var userInput = document.querySelector(".input-box");
var submitButton = document.querySelector(".submit-button");
var systemOutput = document.querySelector(".output-box");
var buttonOne = document.querySelector("#button-one");
var buttonTwo = document.querySelector("#button-two");
var inputList = [];
var translatedText = [];

var englishToMorse = function englishToMorse() {
  submitButton.addEventListener("click", function () {
    systemOutput.value = "";
    translatedText = [];
    inputList = userInput.value.split("");
    inputList.forEach(function (character) {
      for (i = 0; i < engMorseDictionary.length; i++) {
        if (engMorseDictionary[i].english == character.toUpperCase()) {
          translatedText.push(engMorseDictionary[i].morse);
        }
      }

      systemOutput.value = translatedText.join(" ");
    });
  });
};

var morseToEnglish = function morseToEnglish() {
  submitButton.addEventListener("click", function () {
    systemOutput.value = "";
    translatedText = [];
    inputList = userInput.value.split(" ");
    inputList.forEach(function (character) {
      for (var _i = 0; _i < engMorseDictionary.length; _i++) {
        if (engMorseDictionary[_i].morse == character) {
          translatedText.push(engMorseDictionary[_i].english);
        }
      }

      systemOutput.value = translatedText.join("");
    });
  });
};

var translateToggle = function translateToggle() {
  if (buttonOne.checked && !buttonTwo.checked) {
    englishToMorse();
    submitButton.removeAttribute("disabled");
  } else if (buttonTwo.checked && !buttonOne.checked) {
    morseToEnglish();
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.disabled = "true";
  }
};

translateToggle();