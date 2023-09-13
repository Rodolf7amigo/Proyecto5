

var nombre = 'alejandro' 
var apellidos = "Alex"  
var dineroTotal = "5000"  
var decimal = 5.52;
var arreglo = ["Alex","Ana"];   

var persona = ["Alexa", "Ortegha", "Estrella", 20, "Lela", true, "Fernanda"];       

var persona2 = ["Ella", "Ana"];  

var cadenaTexto = persona.join(' '); 
 
document.write(nombre); 
document.write(nombre+' '+apellidos)    

var numero = 7; 
var numero2 = 9; 
var resultado = numero++;

var todosAmigos = persona.concat(persona, persona2);  

document.write(todosAmigos); 
persona.sort();   

document.write(resultado); 
document.write('<br>');
document.write(numero);

console.log(persona.length); 

console.log(cadenaTexto);  


var edad = 18; 

if (edad > 18) {
    console.log('Eres mayor de edad');
} else {
    console.log('Eres menor de edad');  
} 

var pais = 'Portugal';     

if (pais == 'Portugal') {
    console.log('Eres portugues');  
} else if (pais == 'España') {  
    console.log('Eres español');
} else {
    console.log('No sabemos de donde eres');  
}

switch (pais) {
    case 'Portugal':
        console.log('Eres portugues');
        break;
        case 'España':
        console.log('Eres español'); 
        break; 
        default: 
            console.log('No sabemos de donde eres');    
} 

for (let hola = 1; hola < 10; hola++) {
    document.write('hola' + '<br>');   
    
} 

for (var hola = 10; hola >= 1; hola--) {
    document.write('hola' + '<br>');      
    
} 



// while(numero <= 10) {
//     document.write(numero + '<br>');
//     numero++;  
// }  



var amigos = ['Joel', 'Diego', 'Alex', 'Andres'];

for (var amigo in amigos) {   
    if (amigos[amigo] == 'Diego') { 
        continue;  
    }   
    document.write(amigos[amigo] + '<br>'); 
    if (amigos[amigo] == 'Joel') {  
        break;     
    }    
}  


function suma(numero1, numero3) {
    resultado = numero1 + numero3;   
    document.write(resultado + '<br>'); 
}

suma(7,9); 
suma(4,5);

function multiplication(numero4, numero5) { 
    resultado = numero4 * numero5; 
    return resultado;  
}
document.write(multiplication(3,7),'<br>');       

var resta = (numero1, numero2) => numero1 - numero2;

document.write(resta(10,7),'<br>');   

(function() {       
    var texto = 'Hola'; 
    console.log(texto);
    
    function division(numero4, numero5) { 
         resultado = numero4 / numero5; 
        return resultado;       
    } 
    document.write(division(21,7),'<br>');    
}());   

var estrella = 'Alejandra Mayo';

document.write(estrella.toUpperCase());  // metodo lleva parentesis 


var cajas = document.getElementsByTagName('div');  
var cajas = document.getElementsByClassName('caja'); 
// var cajas = document.getElementById('primeraCaja'); 

cajas[0].textContent = 'Hola todos';    
cajas[1].innerHTML = 'como estas';  

var caja = document.createElement('div');
var contenido = document.createTextNode('hola que tal'); 
caja.appendChild(contenido);  
caja.setAttribute('class', 'caja verde');  
var contenedor = document.getElementById('contenedor');  
contenedor.appendChild(caja);     



caja.id = 'primera'; 
caja.className = 'caja verde'; 

var primo = caja.parentNode;

// primo.insertBefore(caja, primeraCaja);         

primo.replaceChild(caja, cajas[3]); 

function crearCaja() {
    var contenedor1 = document.getElementById('contenedor1');  
    var caja1 = document.createElement('div');    
    caja1.className = 'caja1';    
    contenedor1.appendChild(caja1);       
} 

var btnCaja = document.getElementById('btn-Caja');    
btnCaja.addEventListener('click', crearCaja);   



// Cambio de color caja    


var caja = document.getElementsByClassName('caja');     

function color() { 
    this.classList.toggle('gris');           
} 

caja[0].addEventListener('click', color);   

for (var i = 0; i < caja.length; i++) {
    caja[i].addEventListener('click', color);   
    
} 

var a = 7   


var formulario = document.getElementById('formulario');    

var nombre = formulario.nombre;
var sexo = formulario.sexo;  
var terminos = formulario.terminos; 

function validar(e) {
    if (nombre.value.length >9) { 
        alert('maximo permitidos');  
        e.preventDefault();       
    } else if(nombre.value == ''){
        alert('por favor ingresar nombre'); 
        e.preventDefault(); 
    }

    if (sexo[0].checked == false && sexo[1].checked ==false) { 
        alert('por ingresar un tipo de sexo');
        e.preventDefault();  
    }

    if (terminos.checked == false) {  
        alert('por favor aceptar los terminos y condiciones');
         e.preventDefault();    
    }    
}

formulario.addEventListener('submit', validar);  


var objeto = {
    nombre: 'Alex',
    edad: 20,
    pais: 'Peru',
    bio: function() {
        return this.nombre + ' tiene ' + this.edad + ' años';  
    }
};   

document.write(objeto.bio());  


function personaaz(nombre, edad, pais) {
    this.nombre = nombre;  
    this.edad = edad;
    this.pais = pais; 
};

var amigo = new personaaz('Oscar', 25, 'Peru');
document.write(amigo.nombre);   

const nombre1 = 'Estrella'; Pi = 3.1;  
const colores = ['rojo', 'verde']; 
const edad1 = 20; 
const pais1 = 'Peru'; 

colores.push('azul');  

console.log(nombre1);  
console.log(colores); 
console.log(`La persona es ${nombre1} tiene ${edad1} y es de ${pais1}`); 



const nombres = ['Lyham', 'Felix', 'Alex'];  

const numero_caracteres = nombres.map(function (nombre) {
    console.log(`${nombre} tiene ${nombre.length} letras`);
    
}); 

const numero_caracteres2 = nombres.map(nombre => `${nombre} tiene ${nombre.length} letras`);  

console.log(numero_caracteres2);   

class usuario {
    constructor(nombre, edad, correo) { 
        this.nombre = nombre;
        this.edad = edad; 
        this.correo = correo;  
    }
 
    mostrarInformacion() { 
        return ` 
        nombre: ${this.nombre} <br>
        edad: ${this.edad} <br>  
        correo: ${this.correo} <br> 
        <hr> 
        `;      
    }
}

class estudiante extends usuario {
    constructor(nombre, edad, correo, profesion) { 
        super(nombre, edad, correo);
        this.profesion = profesion;    
    }
    mostrarInformacion() {  
        return ` 
        nombre: ${this.nombre} <br>
        edad: ${this.edad} <br>  
        correo: ${this.correo} <br>
        carrera: ${this.profesion} <br>     
        <hr> 
        `;       
    } 

}

const alex = new estudiante('Alexander', 20, 'correo@correo.com', 'doctor'); 
document.write(alex.mostrarInformacion());  

const mostrarDatos = (...datos) => {
    console.log(datos);
}

mostrarDatos('Alexander', 25,'correo@correo.com', 'Peru', 'm');

const promesa = new Promise((resolve, reject)=>{

    const exito = true;

    if(exito) {
        resolve();
    } else {
        reject();
    }
})

promesa.then(()=>{
    alert('hola');
})

promesa.catch(()=>{
    alert('hola que tal');  
})





















































 







































 








