function snapCrackle(maxValue) {
    let text = ""
    let index
for ( index = 1; index <= maxValue; index ++ ) {
    if (maxValue % 2 === 1) {
        meuRetorno.push(`Snap`) }
     if (maxValue % 5 === 0) {
        meuRetorno.push(`Crakle`) } 
     if ((maxValue % 2 === 1)&&(maxValue % 5 === 0)){
        meuRetorno.push(`SnapCrakle`)} 
    if ((maxValue % 2 === 0) || (maxValue % 5 === 1)){
        meuRetorno.push(index)} 

}
console.log(text)
}
snapCrackle()


//
function snapCrackle(maxValue) {
    let text = "";
    for (let value = 1; value <= maxValue; value++) {
        if (value % 2 === 1 && value % 5 === 0) {
            text += "SnapCrackle, ";
            continue;
        }
        if (value % 2 === 1) {
            text += "Snap, ";
            continue;
        }
        if (value % 5 === 0) {
            text += "Crackle, ";
            continue;
        }
        text += value + ", ";
    }
    console.log(text);
}

snapCrackle(15);

//-------------------------------//
function snapCracklePrime(maxValue) {
    let text = "";
    for (let value = 1; value <= maxValue; value++) {
        if (value % 2 === 1 && value % 5 === 0) {
            text += "SnapCrackle, ";
            continue;
        }
        if (value % 2 === 1) {
            text += "Snap, ";
            continue;
        }
        if (value % 5 === 0) {
            text += "Crackle, ";
            continue;
        }

        if (value % 2 === 1 && value % value === 0) {
        text += value + "Prime, ";
        continue;
    }
    text += value + ", ";
}
    console.log(text);
}

snapCracklePrime(15);




