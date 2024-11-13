const mot = "modulo";
function nbVoyelles(mot) {
    let nbVoyelles = 0;
    for(i=0; i<mot.length; i+=1){
        let  lettre = mot[i];
        if((lettre === "a") || (lettre === "e") || (lettre === "i") || (lettre === "o") || (lettre === "u") || (lettre === "y")) {
             nbVoyelles++;
    }
}
    return nbVoyelles;
}
console.log("le nombre de voyelles est :" + nbVoyelles(mot));



