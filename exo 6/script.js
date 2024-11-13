// const phrase = "je suis une phrase";
// function compterNbLettres (phrase){
// let nbLettres = 0;
// for (i=0; i < phrase.length; i+=1){
//     let lettre = phrase[i].toLowerCase();
//     if ((lettre="a") || (lettre="b") || (lettre="c") || (lettre="d") || (lettre="e") || (lettre="f") || (lettre="g") || (lettre="h") || (lettre="i") || (lettre="j") || (lettre="k") || (lettre="l") || (lettre="m") || (lettre="n") || (lettre="o") || (lettre="p") || (lettre="q") || (lettre="r") || (lettre="s") || (lettre="t") || (lettre="u") || (lettre="v") || (lettre="w") || (lettre="x") || (lettre="y") || (lettre="z")){
//         nbLettres ++;
//     }
// }
// return nbLettres
// }

// console.log("le nombre de lettre est : " + compterNbLettres(phrase))

const string = "helohhh";

const redondance = {
};

// console.log(redondance);

// redondance["b"] = 5;

// console.log(redondance);

for (let i = 0; i < string.length; i = i + 1) {
    
    if(redondance[string[i]] === undefined){
        redondance[string[i]] = 1;
    } else {
        redondance[string[i]] += 1;
    }
}
console.log(redondance);
