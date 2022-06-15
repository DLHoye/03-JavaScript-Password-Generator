// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();

    passwordText.value = password;
}

passwordText.addEventListener("click", (e) => {
    e.stopPropagation();
    if (passwordText.value !== "") {
        passwordText.select();
        navigator.clipboard.writeText(passwordText.value);
        alert("Password copied to clipboard");
    }
});

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let symbols = [' ', '!', '"', '#', '$', '%', '&', "'", '(', ')', '*', '+', ',', '-', '.', '/', ':', ';', '<', '=', '>', '?', '@', '[', '\\', ']', '^', '_', '`', '{', '|', '}', '~'];
let lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

function generatePassword() {
    let password = "";

    let length = window.prompt(
        "Choose a length of at least 8 characters and no more than 128 characters"
    );
    if (length === null || length === undefined) {
        return "";
    }
    length = isNaN(length) || length === "" ? 0 : length;
    if (length < 8 || length > 128 || isNaN(length))
        do {
            length = prompt(
                `${length} character(s) entered. Choose a length of at least 8 characters and no more than 128 characters`
            );
            if (length === null || length === undefined) {
                return "";
            }
            length = isNaN(length) || length === "" ? 0 : length;
        } while (length < 8 || length > 128);

    window.alert(`Your password will consist of ${length} characters`);

    let hasNumbers = confirm(
        `Would you like your password to contain numbers? (OK = Yes, Cancel = No)`
    );
    if (hasNumbers) {
        alert("Your password will contain numbers");

    } else {
        alert("Your password will NOT contain numbers")
    }
    console.log(hasNumbers)
    let hasSymbols = confirm(
        `Would you like your password to contain symbols? (OK = Yes, Cancel = No)`
    );
    if (hasSymbols) {
        alert("Your password will contain symbols");
    } else {
        alert("Your password will NOT contain symbols")
    }
    console.log(hasSymbols)
    let hasLowercase = confirm(
        `Would you like your password to contain lowercase  letters? (OK = Yes, Cancel = No)`
    );
    if (hasLowercase) {
        alert("Your password will contain lowercase letters");
    } else {
        alert("Your password will NOT contain lowercase letters")
    }
    console.log(hasLowercase)
    let hasUppercase = window.confirm(
        `Would you like your password to contain uppercase letters? (OK = Yes, Cancel = No)`
    );
    if (hasUppercase) {
        alert("Your password will contain uppercase letters");
    } else {
        alert("Your password will NOT contain uppercase letters")
    }
    console.log(hasUppercase)

            let availableCharacters = [
            ...(hasSymbols ? symbols : []),
            ...(hasNumbers ? numbers : []),
            ...(hasUppercase ? uppercase : []),
            ...(hasLowercase ? lowercase : []),
        ];
       
        if (availableCharacters.length === 0) return ""

        for (let i = 0; i < length; i++) {
            let randomIndex = Math.floor(Math.random() * availableCharacters.length);
            password += availableCharacters[randomIndex];
        }
        return password;
    
    
}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);