const engMorseDictionary = [
    {
        english: "A",
        morse: ".-"
    },
    {
        english: "B",
        morse: "-..."
    },
    {
        english: "C",
        morse: "-.-."
    },
    {
        english: "D",
        morse: "-.."
    },
    {
        english: "E",
        morse: "."
    },
    {
        english: "F",
        morse: "..-."
    },
    {
        english: "G",
        morse: "--."
    },
    {
        english: "H",
        morse: "...."
    },
    {
        english: "I",
        morse: ".."
    },
    {
        english: "J",
        morse: ".---"
    },
    {
        english: "K",
        morse: "-.-"
    },
    {
        english: "L",
        morse: ".-.."
    },
    {
        english: "M",
        morse: "--"
    },
    {
        english: "N",
        morse: "-."
    },
    {
        english: "O",
        morse: "---"
    },
    {
        english: "P",
        morse: "--"
    },
    {
        english: "Q",
        morse: "--.-"
    },
    {
        english: "R",
        morse: ".-."
    },
    {
        english: "S",
        morse: "..."
    },
    {
        english: "T",
        morse: "-"
    },
    {
        english: "U",
        morse: "..-"
    },
    {
        english: "V",
        morse: "...-"
    },
    {
        english: "W",
        morse: ".--"
    },
    {
        english: "X",
        morse: "-..-"
    },
    {
        english: "Y",
        morse: "-.--"
    },
    {
        english: "Z",
        morse: "--.."
    },
    {
        english: "1",
        morse: ".----"
    },
    {
        english: "2",
        morse: "..---"
    },
    {
        english: "3",
        morse: "...--"
    },
    {
        english: "4",
        morse: "....-"
    },
    {
        english: "5",
        morse: "....."
    },
    {
        english: "6",
        morse: "-...."
    },
    {
        english: "7",
        morse: "--..."
    },
    {
        english: "8",
        morse: "---.."
    },
    {
        english: "9",
        morse: "----."
    },
    {
        english: "0",
        morse: "-----"
    },

]

let userInput = document.querySelector(".input-box");
const submitButton = document.querySelector(".submit-button");
let systemOutput = document.querySelector(".output-box");
let buttonOne = document.querySelector("#button-one");
let buttonTwo = document.querySelector("#button-two");
let inputList= [];
let translatedText = [];

const englishToMorse = () => {
    submitButton.addEventListener("click", () => {
        systemOutput.value = "";
        translatedText = [];
        inputList = userInput.value.split("")
        inputList.forEach((character) => {
            for (i=0;i<engMorseDictionary.length;i++) {
                if (engMorseDictionary[i].english == character.toUpperCase()) {
                    translatedText.push(engMorseDictionary[i].morse)
                }
            }
            systemOutput.value = translatedText.join(" ")
            
        })
    })
}


const morseToEnglish = () => {
    submitButton.addEventListener("click", () => {
        systemOutput.value = "";
        translatedText = [];
        inputList = userInput.value.split(" ")
        inputList.forEach((character) => {
            for (let i=0;i<engMorseDictionary.length;i++) {
                if (engMorseDictionary[i].morse == character) {
                    translatedText.push(engMorseDictionary[i].english)
                }
            }
            systemOutput.value = translatedText.join("")
        })
    })
}

const translateToggle = () => {
    if (buttonOne.checked && !buttonTwo.checked) {
        englishToMorse()
        submitButton.removeAttribute("disabled")
    } else if (buttonTwo.checked && !buttonOne.checked){
        morseToEnglish()
        submitButton.removeAttribute("disabled")
    } else {
        submitButton.disabled = "true"
    }

}
translateToggle()