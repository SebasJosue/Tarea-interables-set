//Map es igual que el object que una coleccion de datos identificados por claves , la diferencia es que map permite calves de cualquier tipo //
//ejemplos //


'use strict'

let set = new Set ();

let Erick = {name: "Erick"};
let Maria = {name: "Maria"};
let Marlon = {name: "Marlon"};

set.add("Erick");
set.add("Maria");
set.add("Marlon");
set.add("Erick");
set.add("Maria");

alert( set.size );

for (let user of set){
    alert(user.name);
}
