function repeatString(string, repeatCount) {
    let output = ""
    for(let i = 0; i < repeatCount; i++) {
       output += string;
    }
    return output;
}

console.log(repeatString("abc", 3));