let w = 600;
let datos = [] //vacio
n = 40 //numero de columna y fila
m = w/n

function setup() {
  createCanvas(w, w);
  colorMode(HSB);
  angleMode(DEGREES);
  
  

datos.push(5);
datos.push(9);
datos.push(14);
datos.push(random(100));
  
  creaDatos();
  
  
  
  console.log(datos);
  
}

function draw() {
  background(200);
  
  //acceder a datos de un array
  circle(w/2,w/2,datos[3]) //0,1,2,3
  
  //dibuja la matriz
     for(let fila= 0; fila< n; fila++){
        for(col = 0; col<n; col++){
          
          //esquina superior izquierda
          let x = col*m
          let y = fila*m
          
          //centro
          let xc = x + m/2
          let yc = y + m/2
          
          //índice, número c/casilla
          let index = (fila*n) + col
          
          //dato
          let d = datos[index]
          
          //circle(xc, yc, m/2)
          //text(d, xc, yc)
          
          if(d == 1){
            //desde esquina de arriba izquierda a abajo derecha
            color(100)
            strokeWeight(5)
            line(x,y,x+m,y+m)
          }else{
            //desde esquina de abajo izquierda a arriba derecha
            stroke(200,40,200)
           strokeWeight(m/2)
            line(x,y+m,x+m,y)
         
           {  color(0)
            strokeWeight(0)
            circle(x,y,m/4)}
       
               { fill(200,40,200)
            color(100)
           ;
            circle(y,x,m/2)
           };
            
        
            
          
           
            
          
          }
          
          
        }
}

  
  
}

function keyTyped(){
  creaDatos();
  //console.log(key);
}
 

//crea nuevos datos
// lanzar una moneda n numero de veces o un dado
function creaDatos(){
  datos = [] //limpia datos
  
  // n*n valores nuevos
  //datos.push(random(2)) //añade un valor nuevo
  
  for(let i = 0; i < n*n; i++){
    
     // n*n valores nuevos
  datos.push(floor(random(2))) //añade un valor nuevo
  //floor redonde a por defecto
    
  }
  
  console.log(datos) //imprime datos
  
}