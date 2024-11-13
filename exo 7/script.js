let tableauNombre = [-16, -2, 2, 4 ];

let nombrePositif = [];
let nombreNegatif = [];

for(let i = 0; i < tableauNombre.length; i +=1)
    if (tableauNombre[i]>0) {
        nombrePositif.push(tableauNombre[i]);  
    }
    else {(tableauNombre[i]<0)
    nombreNegatif.push(tableauNombre[i]);}

    console.log(nombrePositif)
    console.log(nombreNegatif);
    