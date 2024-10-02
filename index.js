const characters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "~",
    "`",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
    "(",
    ")",
    "_",
    "-",
    "+",
    "=",
    "{",
    "[",
    "}",
    "]",
    ",",
    "|",
    ":",
    ";",
    "<",
    ">",
    ".",
    "?",
    "/",
];

let generatePasswordBtn = document.getElementById("generate-password-btn");
let randomPasswordOne = document.querySelector(".random-password-one");
let randomPasswordTwo = document.querySelector(".random-password-two");
let passwordLengthEl = document.getElementById("password-length");
let numbersCheckedEl = document.getElementById("numbers");
let charactersCheckedEl = document.getElementById("characters");
let alphabetsCheckedEL = document.getElementById("alphabets");

function generateRandomPassword(length, isNumbers, isAlphabets, isCharacters) {
    let password = "";
    let filteredCharacters = characters;

    if (!isCharacters) {
        filteredCharacters = filteredCharacters.filter((char) =>
            /^[A-Za-z0-9]$/.test(char)
        );
    }

    if (!isAlphabets) {
        filteredCharacters = filteredCharacters.filter((char) =>
            /^[^A-Za-z]$/.test(char)
        );
    }

    if (!isNumbers) {
        filteredCharacters = filteredCharacters.filter((char) =>
            /^[^\d]$/.test(char)
        );
    }

    for (let i = 1; i <= length; i++) {
        let randomIndex = Math.floor(Math.random() * filteredCharacters.length);
        password += filteredCharacters[randomIndex];
    }
    return password;
}

generatePasswordBtn.addEventListener("click", () => {
    let length = passwordLengthEl.value;
    let isNumbers = numbersCheckedEl.checked;
    let isCharacters = charactersCheckedEl.checked;
    let isAlphabets = alphabetsCheckedEL.checked;

    if (length <= 6 && length >= 15) {
        alert("Please enter a valid length to generate password!");
    } else if (!isAlphabets && !isCharacters && !isNumbers) {
        alert("Please select atleast one type to generate password!");
    } else {
        randomPasswordOne.textContent = generateRandomPassword(
            length,
            isNumbers,
            isCharacters,
            isAlphabets
        );
        randomPasswordTwo.textContent = generateRandomPassword(
            length,
            isNumbers,
            isCharacters,
            isAlphabets
        );
    }
});

randomPasswordOne.addEventListener("click", () => {
    const textToCopy = randomPasswordOne.textContent;
    navigator.clipboard.writeText(textToCopy);
});

randomPasswordTwo.addEventListener("click", () => {
    const textToCopy = randomPasswordTwo.textContent;
    navigator.clipboard.writeText(textToCopy);
});
