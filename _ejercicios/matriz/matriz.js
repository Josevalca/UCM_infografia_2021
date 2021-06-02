let w = 600;
let datos = [];
let m = w/n





function setup() {
  createCanvas(w, w);
  colorMode(HSB); //  -> H 0-360  S 0-100, B 0-100
  angleMode(DEGREES);
  
  // añado valores al array
  datos.push(5); // un valor mas al final
  datos.push(9);
  datos.push(23);
    datos.push(random(100));


    creaDatos

  console.log(datos); // pone los datos en la consola
}

function draw() {
  background(0,0,50); // HSB
// acceder a los datos de un array
  circle(w/2,w/2, datos[3]); // 0,1,2,3 -> 1,2 3,4
  
  
  
  // dibujo de matriz
  for(let fila= 0; fila< n; fila++){
    for(col = 0; col<n; col++){
  circle(col*m, fila*m, m/2)
  
  
    }
}







function keyTyped(){
    creaDatos();
   // console.log(key);
}

function creaDatos(){
    datos = []; // limpia los datos
    // n*n valores nuevos
    for(let i = 0; i < n*n; i++){
        datos.push(floor(random(2))); // añade un valor nuevo
    }
    // imprime los datos en la consola
    console.log(datos);
}
