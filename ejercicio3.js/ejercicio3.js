//Object.keys, values, entries este tipo de mketodos son genericos existe un acuerdo comun par usarlo en la estructuracion de datos estos metodos tambien son similares siempre sse debe escribir de manera correcta caso contario //
//ejemplo//

'use strict'

let user = {
    name: "gabiel",
    age: 25
  };

  for (let value of Object.values(user)){
    alert(value);
  }