var texto1 = prompt("Ingrese alguna frase: ");
/*var a = 0;
var e = 0;
var i = 0;
var o = 0;
var u = 0;
var otras= 0; */

var vocales = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0,
}


for(let i = 0; i<texto1.length; i++) {
    let letra = texto1[i].toLowerCase;
    switch(letra) {
        case 'a': 
                   vocales[a]++;
                    break;

        default: 0;
    };
};
console.log("Cantidad de a: " + a);
console.log("Cantidad de e: " + e);
console.log("Cantidad de i: " + i);
console.log("Cantidad de o: " + o);
console.log("Cantidad de u: " + u);
console.log(otras);

