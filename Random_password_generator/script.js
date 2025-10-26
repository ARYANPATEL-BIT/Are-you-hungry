const result = document.getElementById("result");

function getPassword(length, includesLowercase,includesUppercase,includesNumber,includesSymbols){

    const lowerCase = "abcdefghijklmnopqrstuvwxyz";
    const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number = "0123456789";
    const symbol = "!@#$%^&*()_+-="


    allowedChar = "";
    password = "";

    allowedChar += includesLowercase ? lowerCase : "";
    allowedChar += includesUppercase ? upperCase : "";
    allowedChar += includesNumber ? number : "";
    allowedChar += includesSymbols ? symbol : "";

    if ( length <= 0 ){
        return `(password length must be atleast 1)`;
    }
    if ( allowedChar.length === 0){
        return `(You have to select at least 1 set of characters)`
    }
    for(let i = 0; i < length; i++){
        const randomIndex = Math.floor(Math.random() * allowedChar.length);
        password += allowedChar[randomIndex]
    }

    return password;

}

document.getElementById("button").addEventListener("click",() => {

    const PasswordLength = document.getElementById("PasswordLength").value;
    const includesLowercase = document.getElementById("isLower").checked;
    const includesUppercase = document.getElementById("isUpper").checked;
    const includesNumber = document.getElementById("isNum").checked;
    const includesSymbols = document.getElementById("isSymbol").checked;

    const password= getPassword(
        PasswordLength,
        includesLowercase,
        includesUppercase,
        includesNumber,
        includesSymbols
    );

    result.textContent = password;
});
